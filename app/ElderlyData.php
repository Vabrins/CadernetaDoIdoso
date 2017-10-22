<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use HipsterJazzbo\Landlord\BelongsToTenants;

class ElderlyData extends Model
{
	use BelongsToTenants;

	public $tenantColumns = ['id_elderly'];

	// one to one
    public function history() {
        return $this->hasOne('App\History');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly');
    }
}
