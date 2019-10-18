// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
        console.log("You clicked me!")
    
        var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = id;
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed to devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".burger-creator").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#dreamBurger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  