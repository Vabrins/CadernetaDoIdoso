<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IdentificationChronicPainsIntensity extends Model
{
    protected $table = 'identification_of_chronic_pains_intensities_2_10_b';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
