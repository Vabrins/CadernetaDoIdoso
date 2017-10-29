<?php

namespace App\Http\Controllers;
use HipsterJazzbo\Landlord\Facades\Landlord;
use Session;

class ElderlyDataController extends Controller
{
    private $model;

    public function __construct(){
        $this->model = 'App\\'.str_replace('Controller', '', class_basename(get_called_class())
        );
        if(!empty($_COOKIE['id_elderly'])){
            Landlord::addTenant('id_elderly', $_COOKIE['id_elderly']);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    	echo json_encode($this->model::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        echo json_encode("aquiii");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $register = new $$this->model();
        foreach($request->all() as $field => $value){
            $register->$field = $value;
        }
        $register->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        echo json_encode($this->model::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $register = $this->model::find($id);
        foreach($request->all() as $field => $value){
            $register->$field = $value;
        }
        $register->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
