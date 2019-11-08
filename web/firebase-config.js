(function () {
// Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDejLbX-mOLox9QNa_E3xUqzOD1GeM6fTA",
        authDomain: "iotpumpkin.firebaseapp.com",
        databaseURL: "https://iotpumpkin.firebaseio.com",
        projectId: "iotpumpkin",
        storageBucket: "iotpumpkin.appspot.com",
        messagingSenderId: "940062122921",
        appId: "1:940062122921:web:470eabf2d7102802fedab8",
        measurementId: "G-CX6VNCB168"
    };

    firebase.initializeApp(firebaseConfig);
    const Alert = firebase.database().ref('/status/');
    Alert.on('value', function(snapshot) {
        var state = snapshot.val();
        console.log(state);
        if( state === "ALERT" ){
            $("#alert").show();
            $("#idle").hide();
        } else {
            $("#alert").hide();
            $("#idle").show();
        }
    });
}());