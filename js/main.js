var stepNum=1;
$(document).on("mobileinit", function() {});
$(document).on("ready", function(ev) {
   $("#startTut").on("click", function(ev) {
       ev.preventDefault();
       if (localStorage.getItem("step")) {
           stepNum = JSON.parse(localStorage.getItem("step"))
       }
       var returnPage = "#sun" + stepNum.toString();
       $.mobile.pageContainer.pagecontainer("change", returnPage);
   });
   $(".nextP").on("click", function(ev) {
       stepNum += 1;
       localStorage.setItem("step", JSON.stringify(stepNum));
   });
   $(".backP").on("click", function(ev) {
       stepNum -= 1;
       localStorage.setItem("step", JSON.stringify(stepNum));
   });
});
