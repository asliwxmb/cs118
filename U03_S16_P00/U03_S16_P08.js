/**
 * https://studio.code.org/s/cspunit3/stage/16/puzzle/7
 * U03_S16_P08.js
 */
onEvent("submitBtn", "click", function(event) {
  var userName = getText("name_input");
  var userAge = getText("age_input");
  console.log("submitBtn clicked!");
  console.log(userName);
  console.log(userAge);
});
onEvent("output_area", "change", function(event) {
  console.log("output_area entered text: " + getText("output_area"));
});
onEvent("age_input", "change", function(event) {
  var myAge= getText("age_input");
  setText("output_area",myAge);
  
});
/** 
 * hmm how do you get the variable from one scope to another.
 */
onEvent("name_input", "change", function(event) {
  var myName = getText("name_input");
   var myAge= getText("age_input");
  setText("output_area","hello "+myName+" you are "+myAge);
});
