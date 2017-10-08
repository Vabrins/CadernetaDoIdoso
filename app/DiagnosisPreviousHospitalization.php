<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DiagnosisPreviousHospitalization extends Model
{
    protected $table = 'diagnosis_and_previous_hospitalizations_2_2_1';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
