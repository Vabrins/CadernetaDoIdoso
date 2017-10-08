<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DentalProsthesis extends Model
{
    protected $table = 'dental_prosthesis_2_11_d_a';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
