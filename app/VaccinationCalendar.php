<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VaccinationCalendar extends Model
{
    protected $table = 'vaccination_calendars_2_11_c';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
