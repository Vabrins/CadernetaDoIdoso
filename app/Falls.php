<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Falls extends Model
{
    protected $table = 'falls_2_9'; 

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
