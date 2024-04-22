$(document).ready(function() {
  // Play video
  $("#videoplayer").mousedown(function(e) {
    e.stopPropagation(); // stop the event from propagating

    toggleVideoPlayback();
  });

  // Function to toggle video playback
  function toggleVideoPlayback() {
    if ($("#thevideo")[0].paused) {
      $("#thevideo")[0].play();
      $("#thevideo img").attr("src", "pics/pause.jpg").attr("alt", "Pause button.");
    } else {
      $("#thevideo")[0].pause();
      $("#thevideo img").attr("src", "pics/play.png").attr("alt", "Play button.");
    }
  }

  // Prevent automatic focus navigation on click
  $(".container").on("click", function(event) {
    event.preventDefault();
  });

});