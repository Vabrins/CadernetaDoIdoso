<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use HipsterJazzbo\Landlord\Facades\Landlord;
use Illuminate\Support\Facades\DB;

class ElderlyController extends ElderlyDataController
{
    public function show($identification){
    	if(strlen($identification) < 11){
    		$elderly = \App\Elderly::find($identification);
    	}else{
    		$elderly = \App\Elderly::where('document_cpf', $identification)->first();
    		if(empty($elderly['id'])){
    			$new_elderly = new \App\Elderly();
                $new_elderly->document_cpf = $identification;
                $new_elderly->save();
                $elderly['id'] = $new_elderly->id;
    		}
    		$identification = $elderly['id'];
    	}
    	setcookie("id_elderly", $identification,0,"/");
    	Landlord::addTenant('id_elderly', $identification);

    	parent::show($identification);
    }

    public function getChart(){
        Landlord::addTenant('id_elderly', 1);
        $pressure = $this->getAverageOfColumn(\App\PressureControl::withTrashed()->get(), 'pa_2_11_a'); //pa_2_11_a
        $weight = $this->getAverageOfColumn(\App\AnthropometricData::withTrashed()->get(), 'weight_2_5'); //weight_2_5
        $glucose = $this->getAverageOfColumn(\App\GlucoseControl::withTrashed()->get(), 'mg_dl_2_11_b'); //mg_dl_2_11_b
        dd(get_defined_vars());
    }

    public function getAverageOfColumn($data, $column){
        $years_months = array();
        $set_ano = false;
        $set_mes = false;
        foreach($data as $d){
            if(!isset($years_months[$d->created_at->format('y')])){
                $years_months[$d->created_at->format('y')] = array();
            }
            if(!isset($years_months[$d->created_at->format('y')][$d->created_at->format('m')])){
                $years_months[$d->created_at->format('y')][$d->created_at->format('m')] = array();
            }
            $years_months[$d->created_at->format('y')][$d->created_at->format('m')][] = $d[$column];
        }

        foreach($years_months as &$index){
            foreach($index as &$i){
                $i = array_sum($i) / count($i);
            }
        }

        return($years_months);
    }
}
