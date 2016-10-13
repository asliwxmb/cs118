/**
 * https://studio.code.org/s/cspunit3/stage/16/puzzle/7
 * U03_S16_P07.js
 */
onEvent("submitBtn", "click", function(event) {
  var userName = getText("name_input");
  var userAge = getText("age_input");
  console.log("submitBtn clicked!");
  console.log(userName);
  console.log(userAge);
});
