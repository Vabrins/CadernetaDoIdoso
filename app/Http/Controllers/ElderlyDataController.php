<?php

namespace App\Http\Controllers;
use HipsterJazzbo\Landlord\Facades\Landlord;
use Illuminate\Http\Request;
use Session;
use Illuminate\Support\Facades\Auth;

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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $history = new \App\History();
            $history->id_users = 1; // mudar pelo amor de God
            $history->save();
            $deletedRows = $this->model::where('id_elderly', $_COOKIE['id_elderly'])->delete();
            $register = new $this->model();
            $data = $request['test'];
            $data['id_history'] = $history->id;
            $data['id_elderly'] = $_COOKIE['id_elderly'];
            $data['created_at'] = \Carbon\Carbon::now();
            $data['updated_at'] = \Carbon\Carbon::now();
            // print_r($data);
            // exit();
            $register->insert($data);
            echo json_encode(true);
        } catch (Exception $e) {
            echo json_encode(false);
        }
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
        try {
            $register = $this->model::find($id);
            foreach($request->all() as $field => $value){
                $register->$field = $value;
            }
            $register->save();
            echo json_encode(true);
        } catch (Exception $e) {
            echo json_encode(false);
        }
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

    public function getTrashed()
    {
        echo json_encode($this->model::onlyTrashed()->with('history.user:id,name')->get());
    }
}
