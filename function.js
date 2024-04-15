$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#subscribeCheckbox").change(function() {
    var isChecked = $(this).prop("checked");

    if (isChecked) {
      $("#subscribeCheckboxLabel").text("You are subscribed to receive occasional emails with offers.");
    } else {
      $("#subscribeCheckboxLabel").text("You are unsubscribed from receiving emails with offers.");
    }
  });


  // Play video
  $("#videoplayer").mousedown(function(e) {
    e.stopPropagation(); // stop the event from propagating

    toggleVideoPlayback();
  });

  // Function to toggle video playback
  function toggleVideoPlayback() {
    if ($("#thevideo")[0].paused) {
      $("#thevideo")[0].play();
      $("#videoplayer img").attr("src", "pics/pause.jpg").attr("alt", "Pause button.");
    } else {
      $("#thevideo")[0].pause();
      $("#videoplayer img").attr("src", "pics/play.png").attr("alt", "Play button.");
    }
  }

  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
      $("#name").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });

// Close the alert after a delay (e.g., 5 seconds)
  setTimeout(function() {
    $("body > div[role='alert']").remove();
  }, 5000);

  // Play/pause video with spacebar
  $(document).keydown(function(e) {
    if (e.keyCode === 32) {
      e.preventDefault(); // prevent scrolling when spacebar is pressed

      // Check if the focused element is the video player or its child
      var isVideoPlayer = $("#videoplayer").is(":focus") || $("#videoplayer").has(":focus").length > 0;


      if (isVideoPlayer) {
        if ($("#thevideo")[0].paused) {
          $("#thevideo")[0].play();
          $("#videoplayer img").attr("src", "pics/pause.jpg").attr("alt", "Pause button.");
        } else {
          $("#thevideo")[0].pause();
          $("#videoplayer img").attr("src", "pics/play.png").attr("alt", "Play button.");
        }
      }
    }
  });

  // Toggle the receive spam checkbox with spacebar
  $("#subscribeCheckbox").keydown(function(e) {
    if (e.keyCode === 32) { // Check if the pressed key is the spacebar
      e.preventDefault(); // Prevent the default action (e.g., scrolling the page)

      var isChecked = $(this).prop("checked");
      $(this).prop("checked", !isChecked);

      if (!isChecked) {
        $("#subscribeCheckboxLabel").text("You are subscribed to receive occasional emails with offers.");
      } else {
        $("#subscribeCheckboxLabel").text("You are unsubscribed from receiving emails with offers.");
      }
    }
  });

  // Prevent automatic focus navigation on click
  $(".container").on("click", function(event) {
    event.preventDefault();
  });

});