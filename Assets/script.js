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








});