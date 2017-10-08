<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Disabilities extends Model
{
    protected $table = 'disabilities_2_6_a';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
