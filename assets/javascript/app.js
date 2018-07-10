// Initialize Variables
var trainName = "";
var destination = "";
var initialTime = "";
var runFrequency = 0;
var trainList = [];

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

// clear form function
function clearForm() {
    $("#inputTrainName").val("");
    $("#inputDestination").val("");
    $("#inputInitTime").val("");
    $("#inputFrequency").val("");
}

function clearTable() {
    $("#listBody").empty();
}

// Capture Button Click
$("#formSubmit").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    trainName = $("#inputTrainName").val().trim();
    destination = $("#inputDestination").val().trim();
    initialTime = moment($("#inputInitTime").val().trim(),['h:m A']).format('HH:mm');
    runFrequency = $("#inputFrequency").val().trim();
    // debugger;

    // Code for handling the push
    database.ref().push({
        name: trainName,
        destination: destination,
        initialTime: initialTime,
        runFrequency: runFrequency
    });

    clearForm();
});

database.ref().on('child_added', function(snapshot) {
    trainList.push(snapshot.val());
    fillTrainSched(trainList);
});

function fillTrainSched(train) {
    clearTable();
    console.log(train);

    for (var i = 0; i < train.length; i++) {
        var trainRow = $("<tr>");
        var trainListName = $("<td>");
        var trainListDest = $("<td>");
        var trainListRunFreq = $("<td>");
        var trainListNextArrival = $("<td>");
        var trainListMinAway = $("<td>");

        trainListName.text(train[i].name);
        trainListDest.text(train[i].destination);
        trainListRunFreq.text(train[i].runFrequency);
        trainListNextArrival.text("temp");
        trainListMinAway.text("temp");

        trainRow.append(trainListName);
        trainRow.append(trainListDest);
        trainRow.append(trainListRunFreq);
        trainRow.append(trainListNextArrival);
        trainRow.append(trainListMinAway);

        $("#listBody").append(trainRow);

    }
}
