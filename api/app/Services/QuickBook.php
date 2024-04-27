<?php

namespace App\Services;

use App\Models\Token;
use QuickBooksOnline\API\DataService\DataService;

class QuickBook {
    private DataService $dataService;

    public function __construct(private array $config, private Token $token) {}

    public function authorizationUri(): string
    {
        return $this->getDataService()
            ->getOAuth2LoginHelper()
            ->getAuthorizationCodeURL();
    }

    public function getDataService(): DataService
    {
        if (! $this->hasValidAccessToken() || ! isset($this->dataService)) {
            $this->dataService = $this->makeDataService();

        }

        return $this->dataService;
    }

    /**
     * Check to see if the token has a valid access token
     */
    public function hasValidAccessToken(): bool
    {
        return $this->token->hasValidAccessToken;
    }

    /**
     * Check to see if the token has a valid refresh token
     */
    public function hasValidRefreshToken(): bool
    {
        return $this->token->hasValidRefreshToken;
    }

    /**
     * Factory to make DataService
     *
     * There are 3 use cases for making a DataService....
     *
     *      1) Have valid access token, so ready to be used
     *      2) Have valid refresh token, so renew access token & then use
     *      3) No existing token, so need to link account
     *
     * @throws SdkException
     * @throws ServiceException
     */
    protected function makeDataService(): DataService
    {
        // Associative array to use to filter out only the needed config keys when using existing token
        $existing_keys = [
            'auth_mode' => null,
            'baseUrl' => null,
            'ClientID' => null,
            'ClientSecret' => null,
        ];

        // Have good access & refresh, so allow app to run
        if ($this->hasValidAccessToken()) {
            // Pull in the configs from the token into needed keys from the configs
            return DataService::Configure(
                array_merge(array_intersect_key($this->config, $existing_keys), [
                    'accessTokenKey' => $this->token->access_token,
                    'QBORealmID' => $this->token->realm_id,
                    'refreshTokenKey' => $this->token->refresh_token,
                ]),
            );
        }

        // Have refresh, so update access & allow app to run
        if ($this->hasValidRefreshToken()) {
            // Pull in the configs from the token into needed keys from the configs
            $dataService = DataService::Configure(
                array_merge(array_intersect_key($this->config, $existing_keys), [
                    'QBORealmID' => $this->token->realm_id,
                    'refreshTokenKey' => $this->token->refresh_token,
                ]),
            );

            $oauth_token = $dataService->getOAuth2LoginHelper()->refreshToken();

            $dataService->updateOAuth2Token($oauth_token);

            $this->token->parseOauthToken($oauth_token)->save();

            return $dataService;
        }

        // Create new...
        return DataService::Configure($this->config);
    }

    public function exchangeCodeForToken(string $code, int $realm_id): self
    {
        $oauth_token = $this->getDataService()
            ->getOAuth2LoginHelper()
            ->exchangeAuthorizationCodeForToken($code, $realm_id);

        $this->getDataService()->updateOAuth2Token($oauth_token);

        $this->token->parseOauthToken($oauth_token)->save();

        return $this;
    }
}
