<?php

use Illuminate\Database\Seeder;
use App\PersonalData;
use App\User;
class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // DB::table('personal_datas_1')->truncate();
        DB::table('users')->truncate();

        // PersonalData::create
        User::create([
            'cpf' => '12345678910',
            'email' => 'teste@teste.com',
            'password' => '45646546546545654',
            'name' => 'Victor Andrade',
            'card_number_cns' => '12345678910',
            'company' => 'Array Enterprises',
            'level' => 'professional',
            'remember_token' => 'lalalal'

        ]);
    }
}
