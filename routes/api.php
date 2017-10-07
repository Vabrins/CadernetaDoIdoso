<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('api/v1/anthropometricdata', 'AnthropometricDataController');
Route::resource('api/v1/complementaryinformation', 'ComplementaryInformationController');
Route::resource('api/v1/consultationexamination', 'ConsultationExaminationController');
Route::resource('api/v1/dentalprosthesis', 'DentalProsthesisController');
Route::resource('api/v1/diagnosisprevioushospitalization', 'DiagnosisPreviousHospitalizationController');
Route::resource('api/v1/environmentalassessment', 'EnvironmentalAssessmentController');
Route::resource('api/v1/glucosecontrol', 'GlucoseControlController');
Route::resource('api/v1/history', 'HistoryController');
Route::resource('api/v1/identificationchronicpain', 'IdentificationChronicPainController');
Route::resource('api/v1/idenchronicpainsintensity', 'IdenChronicPainsIntensityController');
Route::resource('api/v1/livinghabits', 'LivingHabitsController');
Route::resource('api/v1/medicinesherbalremedies', 'MedicinesHerbalRemediesController');
Route::resource('api/v1/oralhealthassessment', 'OralHealthAssessmentController');
Route::resource('api/v1/personaldata', 'PersonalDataController');
Route::resource('api/v1/personalreferences', 'PersonalReferencesController');
Route::resource('api/v1/pressurecontrol', 'PressureControlController');
Route::resource('api/v1/reactionorallergy', 'ReactionOrAllergyController');
Route::resource('api/v1/residentialaddress', 'ResidentialAddressController');
Route::resource('api/v1/socialfamilyinformation', 'SocialFamilyInformationController');
Route::resource('api/v1/surgeriesperformed', 'SurgeriesPerformedController');
Route::resource('api/v1/vaccinationcalendar', 'VaccinationCalendarController');
Route::resource('api/v1/vulnerableelderly', 'VulnerableElderlyController');