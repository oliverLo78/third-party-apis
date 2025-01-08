// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
var currentDay;
var currentHour = true;

// THEN the current day is displayed at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("MMMM DD, YYYY"));
var currentTime = moment().format('H');

// WHEN I scroll down: I see an hours textinput and saveBtn to save 
var textareaEl = $('textarea');
var saveBtnEl = $('saveBtn');
// THEN I am presented with timeblocks for standard business hours
var timeblockEl = $('textarea');

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
$(".saveBtn").on("click", function() {
    // hunt for the values of id and textarea store it.   
    let text = $(this).siblings('.textarea').val();
    let hour = $(this).attr('id');
    console.log(hour);
    if(text != '') {
        localStorage.setItem(hour, text);

    }
});

// WHEN I refresh the page
// THEN the saved events persist
// grabbing the value text from each textarea's hour and putting in local storage 
$('.textarea-1').val(localStorage.getItem('9'));
$('.textarea-2').val(localStorage.getItem('10'));
$('.textarea-3').val(localStorage.getItem('11'));
$('.textarea-4').val(localStorage.getItem('12'));
$('.textarea-5').val(localStorage.getItem('13'));
$('.textarea-6').val(localStorage.getItem('14'));
$('.textarea-7').val(localStorage.getItem('15'));
$('.textarea-8').val(localStorage.getItem('16'));
$('.textarea-9').val(localStorage.getItem('17'));

// this function will use a jQuery loop to go thru each time slot and set the right color 
function timeManager() {
    let currentHour = moment().hour();

    // jQuery for loop to check each time slot
    $('time-block').each(function() {
        var timeSlot = parseInt($(this).attr('id').split('hour')[1]);
        console.log(timeSlot, currentHour);

        // if the timeSlot we are is less than current hour add past class
        if (timeSlot < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');

        } else if (timeSlot === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');

        } else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
        } 
    })
}

timeManager();
