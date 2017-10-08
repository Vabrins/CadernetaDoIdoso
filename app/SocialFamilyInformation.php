<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SocialFamilyInformation extends Model
{
    protected $table = 'social_and_family_informations_1_b';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
