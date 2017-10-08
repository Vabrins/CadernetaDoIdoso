<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MedicinesHerbalRemedies extends Model
{
    protected $table = 'medicines_herbal_remedies_suppl_vit_in_uses_2_1';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
