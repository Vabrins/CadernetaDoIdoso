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

Route::group(['prefix' => '/v1'], function () {
	Route::get('/anthropometricdata/getTrashed', 'AnthropometricDataController@getTrashed');
	Route::resource('/anthropometricdata', 'AnthropometricDataController');

	Route::get('/complementaryinformation/getTrashed', 'ComplementaryInformationController@getTrashed');
	Route::resource('/complementaryinformation', 'ComplementaryInformationController');

	Route::get('/consultationexamination/getTrashed', 'ConsultationExaminationController@getTrashed');
	Route::resource('/consultationexamination', 'ConsultationExaminationController');

	Route::get('/dentalprosthesis/getTrashed', 'DentalProsthesisController@getTrashed');
	Route::resource('/dentalprosthesis', 'DentalProsthesisController');

	Route::get('/diagnosisprevioushospitalization/getTrashed', 'DiagnosisPreviousHospitalizationController@getTrashed');
	Route::resource('/diagnosisprevioushospitalization', 'DiagnosisPreviousHospitalizationController');

	Route::get('/environmentalassessment/getTrashed', 'EnvironmentalAssessmentController@getTrashed');
	Route::resource('/environmentalassessment', 'EnvironmentalAssessmentController');

	Route::get('/glucosecontrol/getTrashed', 'GlucoseControlController@getTrashed');
	Route::resource('/glucosecontrol', 'GlucoseControlController');

	Route::get('/history/getTrashed', 'HistoryController@getTrashed');
	Route::resource('/history', 'HistoryController');

	Route::get('/identificationchronicpain/getTrashed', 'IdentificationChronicPainController@getTrashed');
	Route::resource('/identificationchronicpain', 'IdentificationChronicPainController');

	Route::get('/idenchronicpainsintensity/getTrashed', 'IdentificationChronicPainsIntensityController@getTrashed');
	Route::resource('/idenchronicpainsintensity', 'IdentificationChronicPainsIntensityController');

	Route::get('/livinghabits/getTrashed', 'LivingHabitsController@getTrashed');
	Route::resource('/livinghabits', 'LivingHabitsController');

	Route::get('/medicinesherbalremedies/getTrashed', 'MedicinesHerbalRemediesController@getTrashed');
	Route::resource('/medicinesherbalremedies', 'MedicinesHerbalRemediesController');

	Route::get('/oralhealthassessment/getTrashed', 'OralHealthAssessmentController@getTrashed');
	Route::resource('/oralhealthassessment', 'OralHealthAssessmentController');

	Route::get('/personaldata/getTrashed', 'PersonalDataController@getTrashed');
	Route::resource('/personaldata', 'PersonalDataController');

	Route::get('/personsreferences/getTrashed', 'PersonalReferencesController@getTrashed');
	Route::resource('/personsreferences', 'PersonalReferencesController');

	Route::get('/pressurecontrol/getTrashed', 'PressureControlController@getTrashed');
	Route::resource('/pressurecontrol', 'PressureControlController');

	Route::get('/reactionorallergy/getTrashed', 'ReactionOrAllergyController@getTrashed');
	Route::resource('/reactionorallergy', 'ReactionOrAllergyController');

	Route::get('/residentialaddress/getTrashed', 'ResidentialAddressController@getTrashed');
	Route::resource('/residentialaddress', 'ResidentialAddressController');

	Route::get('/socialfamilyinformation/getTrashed', 'SocialFamilyInformationController@getTrashed');
	Route::resource('/socialfamilyinformation', 'SocialFamilyInformationController');

	Route::get('/surgeriesperformed/getTrashed', 'SurgeriesPerformedController@getTrashed');
	Route::resource('/surgeriesperformed', 'SurgeriesPerformedController');

	Route::get('/vaccinationcalendar/getTrashed', 'VaccinationCalendarController@getTrashed');
	Route::resource('/vaccinationcalendar', 'VaccinationCalendarController');

	Route::get('/vulnerableelderly/getTrashed', 'VulnerableElderlyController@getTrashed');
	Route::resource('/vulnerableelderly', 'VulnerableElderlyController');

	Route::get('/disabilities/getTrashed', 'DisabilitiesController@getTrashed');
	Route::resource('/disabilities', 'DisabilitiesController');

	Route::get('/falls/getTrashed', 'FallsController@getTrashed');
	Route::resource('/falls', 'FallsController');

	Route::get('/elderly/getTrashed', 'ElderlyController@getTrashed');
	Route::resource('/elderly', 'ElderlyController');

	Route::get('/company/getTrashed', 'CompanyController@getTrashed');
	Route::resource('/company', 'CompanyController');

});