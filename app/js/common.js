var tickets = {
  s: 1,
  g: 1,
  p: 1,
  v: 1
};

$(function() {
  progress();
  ticketCounter();
  timer();

  $('.scroll_to').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });

  // Custom JS
});

function progress() {
  var pers = 0;
  var interval = setInterval(function() {
    let t = pers++ + "%";
    $(".pers").text(t);
    $(".pl_l").css("width", t);
    if (pers == 55) $('.pr span').css('color', '#fff');
    if (pers > 60) clearInterval(interval);
  }, 10);
}

function ticketCounter() {
  $(".act").click(function() {
    var type = $(this).attr("data-type");
    var action = $(this).attr("data-action");

    switch (action) {
      case "p": {
        tickets[type] = tickets[type] + 1;
        break;
      }
      case "m": {
        tickets[type] = tickets[type] > 1 ? tickets[type] - 1 : 1;
        break;
      }
      default:
        break;
    }

    $('.co[data-type="' + type + '"]').text(tickets[type]);

    $('.link[data-type="' + type + '"]').attr(
      "href",
      "go to js/common.js ---" + tickets[type] + "----"
    );
  });
}

function timer() {
  var _milisec = 10;
  var _second = _milisec * 100;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;

  var prevSec, prevMin, prevHour;

  function showRemaining() {
    var now = new Date();

    var distance = timerEnd - now;

    if (distance < 0) {
      $(".hour").text("00");
      $(".min").text("00");
      $(".sec").text("00");
      $(".mili").text("00");
      clearInterval(interval);
      return;
    }

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    var miliseconds = Math.floor((distance % _second) / _milisec);

    if (miliseconds < 10) miliseconds = "0" + miliseconds;
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;
    
    prevHour != hours && $(".hour").text(hours);
    prevMin != minutes && $(".min").text(minutes);
    prevSec != seconds && $(".sec").text(seconds);
    $(".mili").text(miliseconds);

    prevHour = hours;
    prevMin = minutes;
    prevSec = seconds;

  }
  interval = setInterval(showRemaining, 10);
}
