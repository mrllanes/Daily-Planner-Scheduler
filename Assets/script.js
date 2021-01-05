// A $( document ).ready() block.
$(document).ready(function() {
    console.log("document ready!");


// Date and time display
$("#currentDay").text(dayjs().format('MM-DD-YYYY HH:mm:ss'));

// Save Button code to store information entered
$(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, description);
});

// Code to determine if the Hour block is "current" or "past" or "future" and formatting accordingly
function updatedHour () {
    var currentHour = dayjs().hour();
    // console.log(typeof currentHour);
    $('.time-block').each(function() {
        var blockHour = $(this).attr("id");
        console.log(blockHour);
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

updatedHour ();


// Displaying the local Storage (to keep it on the screen)
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


});