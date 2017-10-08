<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConsultationExamination extends Model
{
    protected $table = 'consultation_examination_schedules_2_11_e';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
