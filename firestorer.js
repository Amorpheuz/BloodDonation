// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});
db.enablePersistence()
    .catch(function (err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

function setConditionDate() {
    var hasCondition = document.getElementById('inputConditions');
    if (hasCondition.options[hasCondition.selectedIndex].value != 'None') {
        document.getElementById('conditionsDate').hidden = false;
    } 
    else {
        document.getElementById('conditionsDate').hidden = true;
    }
}
function setDiseaseDate(){
    var hasDisease = document.getElementById('inputDiseases');
    if (hasDisease.options[hasDisease.selectedIndex].value != 'None') {
        document.getElementById('diseaseDate').hidden = false;
    } 
    else{
        document.getElementById('diseaseDate').hidden = true;
    }
}

function formReset(){
    document.getElementById('diseaseDate').hidden = true;
    document.getElementById('conditionsDate').hidden = true;
}
function addInfo() {
    var email = document.getElementById('inputEmail').text;
    var phnum = document.getElementById('inputPhNumber').text;
    var addr = document.getElementById('inputAddress').text;
    var addr2 = document.getElementById('inputAddress2').text;
    var city = document.getElementById('inputCity').text;
    var StateEle = document.getElementById('inputState');
    var state = StateEle.options[StateEle.selectedIndex].text;
    var zip = document.getElementById('inputZip').text;
    var bgroup = document.getElementById('inputBloodGroup').text;
    var GenderEle = document.getElementById('inputGender');
    var gender = GenderEle.options[GenderEle.selectedIndex].text;
    var hasCondition = document.getElementById('inputConditions');
    var conditionDuration = hasCondition.options[hasDisease.selectedIndex].value;
    var conditionStart = 0;
    if(conditionDuration != '0'){
        conditionStart = document.getElementById('inputConditionsDate').text.getTime();
    }
    var hasDisease = document.getElementById('inputDiseases');
    var diseaseDuration = hasDisease.options[hasDisease.selectedIndex].value;
    var diseaseStart = 0;
    if (diseaseDuration != '0') {
        diseaseStart = document.getElementById('inputDiseasesDate').text.getTime();
    }
    var conditionEnd = Number(conditionDuration) + conditionStart;
    var diseaseEnd = Number(diseaseDuration) + diseaseStart;
}