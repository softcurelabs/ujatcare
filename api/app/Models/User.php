<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Mail\InviteEmail;
use App\Traits\HasQuickBooksToken;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, CanResetPassword, HasQuickBooksToken;

    protected $appends = [
        'role',
        'flat',
        'profile',
        'flat_name',
        'apartment_name',
        'apartment_id',
        'quickbooks',
        'name'
    ];
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function profile(): HasOne
    {
        return $this->hasOne(UserProfile::class, 'user_id', 'id');
    }

    public function flat(): HasOne
    {
        return $this->hasOne(FlatOwner::class, 'user_id', 'id');
    }

    public function documents(): HasMany
    {
        return $this->hasMany(UserDocuments::class);
    }

    public function getFlatNameAttribute()
    {
        return null !== $this->flat()->first() ?  $this->flat()->first()->flat()->first()->name : "";
    }
    public function getApartmentNameAttribute()
    {
        return null !== $this->flat()->first()    ? $this->flat()->first()->flat()->first()->apartment()->first()->name : "";
    }
    public function getApartmentIdAttribute()
    {
        return null !== $this->flat()->first()    ? $this->flat()->first()->flat()->first()->apartment()->first()->id : "";
    }

    public function getRoleAttribute()
    {
        return $this->getRoleNames()->first();
    }

    public function getNameAttribute()
    {
        return $this->first_name . " " . $this->last_name;
    }

    public function getFlatAttribute()
    {
        return $this->flat()->first();
    }

    public function getProfileAttribute(): UserProfile
    {
        return $this->profile()->first();
    }

    public function getQuickbooksAttribute(): array
    {
        return [
            // "BillAddr" => [
            //     "Line1" =>  $this->getProfileAttribute()->,
            //     "City" =>  "Mountain View",
            //     "Country" =>  "USA",
            //     "CountrySubDivisionCode" =>  "CA",
            //     "PostalCode" =>  "94042"
            // ],
            "Notes" =>  $this->getProfileAttribute()->special_instruction,
            // "Title" =>  "Mr",
            "GivenName" =>  $this->first_name,
            // "MiddleName" =>  "1B",
            // "FamilyName" =>  "King",
            "FamilyName" =>  $this->last_name,
            // "Suffix" =>  "Jr",
            "FullyQualifiedName" =>  $this->name,
            // "CompanyName" =>  "King Evial",
            "DisplayName" =>  $this->name,
            "PrimaryPhone" =>  [
                "FreeFormNumber" =>  $this->getProfileAttribute()->phone_number
            ],
            "PrimaryEmailAddr" =>  [
                "Address" => $this->email
            ]
        ];
    }

    public function sendWelcomeEmail(){

        $token = app('auth.password.broker')->createToken($this);;

        DB::table(config('auth.passwords.users.table'))->updateOrInsert([
            'email' => $this->email
        ],[
            'email' => $this->email,
            'token' => $token
        ]);

        $resetUrl= url(config('app.url').route('password.reset', $token, false));

        Mail::to($this)->send(new InviteEmail($this, $resetUrl));
      }
}
