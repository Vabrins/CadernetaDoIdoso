<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PersonalData extends Model
{
    protected $table = 'personal_datas_1';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
