<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GlucoseControl extends Model
{
    protected $table = 'blood_glucose_controls_2_11_b'; 

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
