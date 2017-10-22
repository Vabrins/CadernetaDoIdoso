<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    // one to many
    public function User() {
        return $this->hasMany('App\User');
    }

	protected $table = 'companies';
}
