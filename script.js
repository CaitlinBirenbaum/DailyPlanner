var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();

function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}
function pastPresentFuture() {
  hour = time.hours();
  $(".time-block").each(function () {
      var thisHour = parseInt($(this).attr("id"));

      if (thisHour > hour) {
          $(this).addClass("future")
      }
      else if (thisHour === hour) {
          $(this).addClass("present");
      }
      else {
          $(this).addClass("past");
      }
  })
}

pastPresentFuture();


//save to local storage
saveBtn.on('click', function (event) {
  event.preventDefault();
  var text = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
  var parent = $(this).parent().attr('id');
  localStorage.setItem(parent, JSON.stringify(text));

})

$('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
$('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));
$('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
$('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
$('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
$('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
$('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
$('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
$('#17 textarea').val(localStorage.getItem('17')).replace(/['"]+/g, '');
