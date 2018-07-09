// Initialize Variables
var trainName = "";
var destination = "";
var initialTime = "";
var runFrequency = 0;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDUSscaxURnRLcYCMYA38KklKcL8icp9qs",
    authDomain: "brucimus-testing-1.firebaseapp.com",
    databaseURL: "https://brucimus-testing-1.firebaseio.com",
    projectId: "brucimus-testing-1",
    storageBucket: "brucimus-testing-1.appspot.com",
    messagingSenderId: "978947948224"
};

firebase.initializeApp(config);
database = firebase.database();

// Capture Button Click
$("#formSubmit").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    trainName = $("#inputTrainName").val().trim();
    destination = $("#inputDestination").val().trim();
    initialTime = $("#inputInitTime").val().trim();
    runFrequency = $("#inputFrequency").val().trim();

    // Code for handling the push
    database.ref().push({
        name: trainName,
        destination: destination,
        initialTime: initialTime,
        runFrequency: runFrequency
    });
});