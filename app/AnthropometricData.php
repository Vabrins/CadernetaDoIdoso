<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AnthropometricData extends Model
{
    protected $table = 'anthropometric_data_s_2_5';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
