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
    
}