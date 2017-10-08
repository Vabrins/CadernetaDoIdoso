<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VulnerableElderly extends Model
{
    protected $table = 'vulnerable_elderly_identification_protocols_2_6';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
