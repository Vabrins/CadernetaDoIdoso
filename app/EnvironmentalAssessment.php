<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EnvironmentalAssessment extends Model
{
    protected $table = 'environmental_assessments_2_8';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
