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

Route::resource('anthropometricdata', 'AnthropometricDataController');
Route::resource('complementaryinformation', 'ComplementaryInformationController');
Route::resource('consultationexamination', 'ConsultationExaminationController');
Route::resource('dentalprosthesis', 'DentalProsthesisController');
Route::resource('diagnosisprevioushospitalization', 'DiagnosisPreviousHospitalizationController');
Route::resource('environmentalassessment', 'EnvironmentalAssessmentController');
Route::resource('glucosecontrol', 'GlucoseControlController');
Route::resource('history', 'HistoryController');
Route::resource('identificationchronicpain', 'IdentificationChronicPainController');
Route::resource('identificationchronicpainsintensity', 'IdentificationChronicPainsIntensityController');
Route::resource('livinghabits', 'LivingHabitsController');
Route::resource('medicinesherbalremedies', 'MedicinesHerbalRemediesController');
Route::resource('oralhealthassessment', 'OralHealthAssessmentController');
Route::resource('personaldata', 'PersonalDataController');
Route::resource('personalreferences', 'PersonalReferencesController');
Route::resource('pressurecontrol', 'PressureControlController');
Route::resource('reactionorallergy', 'ReactionOrAllergyController');
Route::resource('residentialaddress', 'ResidentialAddressController');
Route::resource('socialfamilyinformation', 'SocialFamilyInformationController');
Route::resource('surgeriesperformed', 'SurgeriesPerformedController');
Route::resource('vaccinationcalendar', 'VaccinationCalendarController');
Route::resource('vulnerableelderly', 'VulnerableElderlyController');