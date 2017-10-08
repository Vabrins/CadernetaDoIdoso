<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IdentificationChronicPain extends Model
{
    protected $table = 'identification_of_chronic_pains_2_10';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
