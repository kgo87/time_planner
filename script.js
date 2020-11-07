// fetch date html tag
var dayDisplayEl = $('#currentDay');

// when the page loads, check if there are any events saved by the user
var eventsArray;
var savedUserInput = JSON.parse(localStorage.getItem("event_content"));
if (savedUserInput=== null) {
    eventsArray = new Array(9);
}
else {
    eventsArray = savedUserInput;
    renderSavedEvents();
}


// if there are events saved by the user, display them
function renderSavedEvents(){
    for (var i=0; i<eventsArray.length;i++){
        var currentTextArea = $("#"+(i+9));
        console.log(currentTextArea);
        currentTextArea.val(eventsArray[i]);

    }
}

// handle displaying the day
function displayDay(){
    var today = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(today);
}



// handle color of the row based checking if each time row is present, past or future
function timeColoring(){
    var i = 9;
    current_time = moment().format('H');
    var time_int = parseInt(current_time);
    console.log(time_int);


    for (i=9;i<18;i++){
        eventElementId = "#hour"+i;
        console.log(i===time_int);
        if(time_int === i){
            $(eventElementId).addClass("present");
        }
        else if (time_int>i) {
            $(eventElementId).addClass("past");
        }
        else {
            $(eventElementId).addClass("future");
        }

    }
}

displayDay();
timeColoring();



// Save the input, when user clicks Save button
$("tbody tr td button").on("click", function(event) {


    event.preventDefault();
    var id = $("button").closest("tbody").prop("id");

    var newContent = $(this).closest("tr").find(".textarea").val();
    $(this).closest("tr").find(".textarea").val(newContent);

    // var user_input = $(this).closest("tr").find(".textarea").val(newContent);
    // localStorage.setItem('user_input', newContent);
    // localStorage.getItem('user_input');

    var textAreaID = $(this).closest("tr").find("textarea").prop("id");
    console.log({textAreaID});
    var index = parseInt(textAreaID) - 9;
    eventsArray[index] = newContent;
    console.log(eventsArray);

    localStorage.setItem("event_content", JSON.stringify(eventsArray));



  });






















