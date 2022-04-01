
    'use strict';

var weightSlider = document.getElementById("myWeight");
var weightOutput = document.getElementById("inputWeight");

var heightSlider = document.getElementById("myHeight");
var heightOutput = document.getElementById("inputHeight");

var kadinVal = document.querySelector('#kadin');
var erkekVal = document.querySelector('#erkek');

weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

weightSlider.oninput = function () {
weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
heightOutput.innerHTML = this.value;
}
function showValWeight(newVal) {
weightSlider.value=newVal;
};

function showValHeight(newVal) {
heightSlider.value=newVal;
};

weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
heightOutput.value = e.srcElement.value;
}
// hesapla beden
function calculateBmi() {
var weight = document.bmiForm.realweight.value;
var height = (document.bmiForm.realheight.value);


var messageOutput = document.getElementById("evaluationMessage");

messageOutput.innerHTML = ""; // mesaj divi temizle

// beden kontrol
if (height>= 150 && height <=170 && weight >= 48 && weight<=53) {
messageOutput.innerHTML = "Bedeniniz: <b>XXS</b> olarak hesaplanmıştır keyifli alışverişler dileriz.";
} 
else if(height>= 171 && height <=181 && weight >= 48 && weight<=53){
messageOutput.innerHTML = "Bedeniniz: <b>XS</b> olarak hesaplanmıştır keyifli alışverişler dileriz.";
}
else if(height>= 182 && height <=191 && weight >= 48 && weight<=53){
messageOutput.innerHTML = "Bedeniniz: <b>S</b> olarak hesaplanmıştır keyifli alışverişler dileriz.";
}
else if(height>= 150 && height <=179 && weight >= 54 && weight<=62){
messageOutput.innerHTML = "Bedeniniz: <b>XS</b> olarak hesaplanmıştır keyifli alışverişler dileriz.";
}
else if(height>= 180 && height <=191 && weight >= 54 && weight<=62){
messageOutput.innerHTML = "Bedeniniz: <b>S</b> olarak hesaplanmıştır keyifli alışverişler dileriz.";
}
else if(height>= 150 && height <=191 && weight >= 63 && weight<=70){
messageOutput.innerHTML = "Bedeniniz: <b>S</b> olarak hesaplanmıştır keyifli alışverişler dileriz.";
}
else if(height>= 150 && height <=191 && weight >= 71 && weight<=81){
messageOutput.innerHTML = "Bedeniniz: <b>M</b> olarak hesaplanmıştır keyifli alışverişler dileriz.";
}
else if(height>= 150 && height <=191 && weight >= 82 && weight<=94){
messageOutput.innerHTML = "Bedeniniz: <b>L</b> olarak hesaplanmıştır keyifli alışverişler dileriz.";
}
else if(height>= 150 && height <=190 && weight >= 95 && weight<=110){
messageOutput.innerHTML = "Bedeniniz: <b>XL</b> olarak hesaplanmıştır keyifli alışverişler dileriz.";
}
else if(height>= 150 && height <=190 && weight >= 111 && weight<=120){
messageOutput.innerHTML = "Bedeniniz: <b>XXL</b> olarak hesaplanmıştır keyifli alışverişler dileriz.";
}
else{
messageOutput.innerHTML = "Bedeniniz aralıklara uymuyor !.";
}
//  else if(weight == 52 && height<=172 && kadinVal.checked){
//  messageOutput.innerHTML = "Bedeniniz: AAAAAAA";
// }
// else if(weight == 52 && height<=172){
//   messageOutput.innerHTML = "Bedeniniz: M";
// }

}