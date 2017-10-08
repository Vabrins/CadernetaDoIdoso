<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SurgeriesPerformed extends Model
{
    protected $table = 'surgeries_performed_s_2_3';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
