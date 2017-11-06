<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use HipsterJazzbo\Landlord\BelongsToTenants;

class ElderlyData extends Model
{
	use BelongsToTenants;

    use SoftDeletes;

	public $tenantColumns = ['id_elderly'];

	// one to one
    public function history() {
        return $this->belongsTo('App\History', 'id_history');
    }

    // one to many
    public function elderly() {
        return $this->belongsTo('App\Elderly', 'id_users');
    }
}
