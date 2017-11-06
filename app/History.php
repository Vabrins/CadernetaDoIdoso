<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    protected $table = 'historys';

	// one to many
    public function user() {
        return $this->belongsTo('App\User', 'id_users');
    }

    // one to one
    public function anthropometricData() {
        return $this->hasOne('App\AnthropometricData');
    }

    // one to one
    public function complementaryInformation() {
        return $this->hasOne('App\ComplementaryInformation');
    }

    // one to one
    public function consultationExamination() {
        return $this->hasOne('App\ConsultationExamination');
    }

    // one to one
    public function dentalProsthesis() {
        return $this->hasOne('App\DentalProsthesis');
    }

    // one to one
    public function diagnosisPreviousHospitalization() {
        return $this->hasOne('App\DiagnosisPreviousHospitalization');
    }

    // one to one
    public function disabilities() {
        return $this->hasOne('App\Disabilities');
    }

    // one to one
    public function environmentalAssessment() {
        return $this->hasOne('App\EnvironmentalAssessment');
    }

    // one to one
    public function falls() {
        return $this->hasOne('App\Falls');
    }

    // one to one
    public function glucoseControl() {
        return $this->hasOne('App\GlucoseControl');
    }

    // one to one
    public function identificationChronicPain() {
        return $this->hasOne('App\IdentificationChronicPain');
    }

    // one to one
    public function identificationChronicPainsIntensity() {
        return $this->hasOne('App\IdentificationChronicPainsIntensity');
    }

    // one to one
    public function livingHabits() {
        return $this->hasOne('App\LivingHabits');
    }

    // one to one
    public function medicinesHerbalRemedies() {
        return $this->hasOne('App\MedicinesHerbalRemedies');
    }

    // one to one
    public function oralHealthAssessment() {
        return $this->hasOne('App\OralHealthAssessment');
    }

    // one to one
    public function personalData() {
        return $this->hasOne('App\PersonalData');
    }

    // one to one
    public function personalReferences() {
        return $this->hasOne('App\PersonalReferences');
    }

    // one to one
    public function reactionOrAllergy() {
        return $this->hasOne('App\ReactionOrAllergy');
    }

    // one to one
    public function residentialAddress() {
        return $this->hasOne('App\ResidentialAddress');
    }

    // one to one
    public function socialFamilyInformation() {
        return $this->hasOne('App\SocialFamilyInformation');
    }

    // one to one
    public function surgeriesPerformed() {
        return $this->hasOne('App\SurgeriesPerformed');
    }

    // one to one
    public function vaccinationCalendar() {
        return $this->hasOne('App\VaccinationCalendar');
    }

    // one to one
    public function vulnerableElderly() {
        return $this->hasOne('App\VulnerableElderly');
    }
}
