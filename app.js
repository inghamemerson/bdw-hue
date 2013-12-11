
var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log(result);
}

var displayError = function(err) {
    console.error(err);
}
var host = "10.1.10.83",
    username = "3cd1e133346af48f3135fc2b18d01407",
    api;

state = lightState.create().on().hsl(60,0,100);

    api = new HueApi(host, username);
    api.setLightState(1, state)
    .then(displayResult)
    .fail(displayError)
    .done();

    api.setLightState(2, state)
    .then(displayResult)
    .fail(displayError)
    .done();

    api.setLightState(3, state)
    .then(displayResult)
    .fail(displayError)
    .done();

    api.setLightState(4, state)
    .then(displayResult)
    .fail(displayError)
    .done();

    api.setLightState(5, state)
    .then(displayResult)
    .fail(displayError)
    .done();

    api.setLightState(6, state)
    .then(displayResult)
    .fail(displayError)
    .done();

    api.setLightState(7, state)
    .then(displayResult)
    .fail(displayError)
    .done();