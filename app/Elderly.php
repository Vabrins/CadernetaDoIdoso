<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Elderly extends Model
{
    // one to many
    public function anthropometricData() {
        return $this->hasMany('App\AnthropometricData');
    }

    // one to many
    public function complementaryInformation() {
        return $this->hasMany('App\ComplementaryInformation');
    }

    // one to many
    public function consultationExamination() {
        return $this->hasMany('App\ConsultationExamination');
    }

    // one to many
    public function dentalProsthesis() {
        return $this->hasMany('App\DentalProsthesis');
    }

    // one to many
    public function diagnosisPreviousHospitalization() {
        return $this->hasMany('App\DiagnosisPreviousHospitalization');
    }

    // one to many
    public function disabilities() {
        return $this->hasMany('App\Disabilities');
    }

    // one to many
    public function environmentalAssessment() {
        return $this->hasMany('App\EnvironmentalAssessment');
    }

    // one to many
    public function falls() {
        return $this->hasMany('App\Falls');
    }

    // one to many
    public function glucoseControl() {
        return $this->hasMany('App\GlucoseControl');
    }

    // one to many
    public function identificationChronicPain() {
        return $this->hasMany('App\IdentificationChronicPain');
    }

    // one to many
    public function identificationChronicPainsIntensity() {
        return $this->hasMany('App\IdentificationChronicPainsIntensity');
    }

    // one to many
    public function livingHabits() {
        return $this->hasMany('App\LivingHabits');
    }

    // one to many
    public function medicinesHerbalRemedies() {
        return $this->hasMany('App\MedicinesHerbalRemedies');
    }

    // one to many
    public function oralHealthAssessment() {
        return $this->hasMany('App\OralHealthAssessment');
    }

    // one to many
    public function personalData() {
        return $this->hasMany('App\PersonalData');
    }

    // one to many
    public function personalReferences() {
        return $this->hasMany('App\PersonalReferences');
    }

    // one to many
    public function reactionOrAllergy() {
        return $this->hasMany('App\ReactionOrAllergy');
    }

    // one to many
    public function residentialAddress() {
        return $this->hasMany('App\ResidentialAddress');
    }

    // one to many
    public function socialFamilyInformation() {
        return $this->hasMany('App\SocialFamilyInformation');
    }

    // one to many
    public function surgeriesPerformed() {
        return $this->hasMany('App\SurgeriesPerformed');
    }

    // one to many
    public function vaccinationCalendar() {
        return $this->hasMany('App\VaccinationCalendar');
    }

    // one to many
    public function vulnerableElderly() {
        return $this->hasMany('App\VulnerableElderly');
    }
}
