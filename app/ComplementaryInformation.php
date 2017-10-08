<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ComplementaryInformation extends Model
{
    protected $table = 'complementary_informations_2_7';

    // one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
