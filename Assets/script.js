// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");

    var utc = require('dayjs/plugin/utc') // dependent on utc plugin
    var timezone = require('dayjs/plugin/timezone')
    dayjs.extend(utc)
    dayjs.extend(timezone)
    
    dayjs.tz("2014-06-01 12:00", "America/New_York")
    
    dayjs("2014-06-01 12:00").tz("America/New_York")
    
    dayjs.tz.guess()
    
    dayjs.tz.setDefault("America/New_York")


$("#currentDay").text(dayjs.tz.guess());


$(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, description);

});








});