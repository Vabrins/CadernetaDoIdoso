<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LivingHabits extends Model
{
    protected $table = 'living_habits_2_11';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
