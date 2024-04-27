<?php

namespace App\Providers;

use App\Services\QuickBook;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(QuickBook::class, function (Application $app) {
            $token =
                $app->auth->user()->quickBooksToken ?:
                $app->auth
                    ->user()
                    ->quickBooksToken()
                    ->make();

            return new QuickBook($app->config->get('app.quickbook'), $token);
        });

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

    }
}
