
var currentDay = document.querySelector("#currentDay");
var currentTime = moment().format('MMMM Do YYYY, h:mm A');
currentDay = $("#currentDay");
$("#currentDay").append(currentTime);

var currentHour = moment().hour()

for (var i = 0; i <18; i++) {
    if (i < currentHour) {
        $("#" + i).addClass("past")
    }
    else if (i === currentHour) {
        $("#" + i).addClass("present")
    }
    else {
        $("#" + i).addClass ("future")
    }
}

$(".saveBtn").on("click", function() {
    var time = $(this).attr("data-time")
    var descriptionTask = $("#" + time).val();
    localStorage.setItem(time, descriptionTask)
})

function placeText() {
    for (var i = 0; i <18; i++) {
        var saved = localStorage.getItem(i + "")
        if (saved !== null) {
            $("#" + i + "").val(saved)
            console.log(saved)
        }
    }
}

placeText()