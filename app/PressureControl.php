<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PressureControl extends Model
{
    protected $table = 'blood_pressure_controls_2_11_a';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
