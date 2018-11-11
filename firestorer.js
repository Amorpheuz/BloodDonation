firebase.initializeApp({
    apiKey: 'AIzaSyDUxHo9ItDrKydYpKNDnRPVcpyFxfyOwmM',
    authDomain: 'blooddonation-93ff8.firebaseapp.com',
    projectId: 'blooddonation-93ff8'
});
firebase.firestore().enablePersistence()
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
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});