<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class History extends Model
{
	// one to many
    public function user() {
        return $this->belongsTo('App\AnthropometricData');
    }

    // one to one
    public function anthropometricData() {
        return $this->belongsTo('App\AnthropometricData');
    }

    // one to one
    public function complementaryInformation() {
        return $this->belongsTo('App\ComplementaryInformation');
    }

    // one to one
    public function consultationExamination() {
        return $this->belongsTo('App\ConsultationExamination');
    }

    // one to one
    public function dentalProsthesis() {
        return $this->belongsTo('App\DentalProsthesis');
    }

    // one to one
    public function diagnosisPreviousHospitalization() {
        return $this->belongsTo('App\DiagnosisPreviousHospitalization');
    }

    // one to one
    public function disabilities() {
        return $this->belongsTo('App\Disabilities');
    }

    // one to one
    public function environmentalAssessment() {
        return $this->belongsTo('App\EnvironmentalAssessment');
    }

    // one to one
    public function falls() {
        return $this->belongsTo('App\Falls');
    }

    // one to one
    public function glucoseControl() {
        return $this->belongsTo('App\GlucoseControl');
    }

    // one to one
    public function identificationChronicPain() {
        return $this->belongsTo('App\IdentificationChronicPain');
    }

    // one to one
    public function identificationChronicPainsIntensity() {
        return $this->belongsTo('App\IdentificationChronicPainsIntensity');
    }

    // one to one
    public function livingHabits() {
        return $this->belongsTo('App\LivingHabits');
    }

    // one to one
    public function medicinesHerbalRemedies() {
        return $this->belongsTo('App\MedicinesHerbalRemedies');
    }

    // one to one
    public function oralHealthAssessment() {
        return $this->belongsTo('App\OralHealthAssessment');
    }

    // one to one
    public function personalData() {
        return $this->belongsTo('App\PersonalData');
    }

    // one to one
    public function personalReferences() {
        return $this->belongsTo('App\PersonalReferences');
    }

    // one to one
    public function reactionOrAllergy() {
        return $this->belongsTo('App\ReactionOrAllergy');
    }

    // one to one
    public function residentialAddress() {
        return $this->belongsTo('App\ResidentialAddress');
    }

    // one to one
    public function socialFamilyInformation() {
        return $this->belongsTo('App\SocialFamilyInformation');
    }

    // one to one
    public function surgeriesPerformed() {
        return $this->belongsTo('App\SurgeriesPerformed');
    }

    // one to one
    public function vaccinationCalendar() {
        return $this->belongsTo('App\VaccinationCalendar');
    }

    // one to one
    public function vulnerableElderly() {
        return $this->belongsTo('App\VulnerableElderly');
    }
}
