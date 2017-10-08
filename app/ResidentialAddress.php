<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ResidentialAddress extends Model
{
    protected $table = 'residential_addresses_1_a';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
