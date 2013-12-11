
var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log("result: ", result);
}

var displayError = function(err) {
    console.error("Error: ", err);
}
var host = "10.1.10.83",
    username = "3cd1e133346af48f3135fc2b18d01407",
    api;

var green = lightState.create().transition(1).on().rgb(0,255,75).brightness(20),
    red = lightState.create().transition(1).on().rgb(255,0,0),
    white = lightState.create().transition(1).on().rgb(145,145,145),
    lightAlert = lightState.create().on().alert();

var group1Color = green,
    group3Color = red,
    count = 0,
    discoInterval;

var altColor = function(color){
  console.log("color", color);
  if(color === green){
      color = red;
  } else if(color === red) {
    color = green;
  }
  return color;
};

console.log(group1Color);
console.log(group3Color);


api = new HueApi(host, username);

var setLightColors = function(){
  api.setGroupLightState(1, group1Color)
  .done();

  api.setGroupLightState(3, group3Color)
  .done();

  console.log("setLightColors");
  group1Color = altColor(group1Color);
  console.log("group1Color", group1Color);
  group3Color = altColor(group3Color);
  console.log("group3Color", group3Color);

  count++;
  if(count === 10){
    console.log("clearInterval")
    clearInterval(discoInterval);
    api.setGroupLightState(1, white)
    .done();

    api.setGroupLightState(3, white)
    .done();
  }
  console.log("count", count);


};


var startDisco = function(){
  console.log("start disco");
  setLightColors();
  discoInterval = setInterval(setLightColors, 3000);
};


startDisco();



