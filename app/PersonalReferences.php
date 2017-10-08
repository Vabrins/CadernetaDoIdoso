<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PersonalReferences extends Model
{
    protected $table = 'persons_references_1_1';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
