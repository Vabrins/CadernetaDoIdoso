<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use HipsterJazzbo\Landlord\Facades\Landlord;

class ElderlyController extends ElderlyDataController
{
    public function show($identification){
    	if(strlen($identification) < 11){
    		$elderly = \App\Elderly::find($identification);
    	}else{
    		$elderly = \App\Elderly::where('document_cpf', $identification)->first();
    		if(empty($elderly['id'])){
    			return false;
    		}
    		$identification = $elderly['id'];
    	}
    	setcookie("id_elderly", $identification,0,"/");
    	Landlord::addTenant('id_elderly', $identification);

    	parent::show($identification);
    }
}
