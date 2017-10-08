<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReactionOrAllergy extends Model
{
    protected $table = 'adverse_reactions_or_allergies_to_medicines_2_4';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
