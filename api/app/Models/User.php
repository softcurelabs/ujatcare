<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, CanResetPassword;

    protected $appends = [
        'role',
        'flat',
        'profile',
        'flat_name',
        'apartment_name',
    ];
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
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

    public function getFlatNameAttribute()
    {
        return null !== $this->flat()->first() ?  $this->flat()->first()->flat()->first()->name : "";
    }
    public function getApartmentNameAttribute()
    {
        return null !== $this->flat()->first()    ? $this->flat()->first()->flat()->first()->apartment()->first()->name : "";
    }

    public function getRoleAttribute()
    {
        return $this->getRoleNames()->first();
    }

    public function getFlatAttribute()
    {
        return $this->flat()->first();
    }

    public function getProfileAttribute()
    {
        return $this->profile()->first();
    }
}
