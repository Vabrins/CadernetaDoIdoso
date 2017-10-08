<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OralHealthAssessment extends Model
{
    protected $table = 'oral_health_assessments_2_11_d';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
