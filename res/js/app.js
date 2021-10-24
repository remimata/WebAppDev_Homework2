// Retrieve posts information from "JSONbin.io" 
$(function () {
  function getPosts() {
      return $.get({
          url: "https://api.jsonbin.io/b/616bf937aa02be1d445a969d/6",
          success: function(response) {
              return response;
          },
          error: function(e) {
              alert(`error retrieving posts: ${JSON.stringify(e)}`);
          },
      });
  }

  getPosts()
    .then((res) => {
      for (let post of res) {
        //Dynamically fills the posts section
          $(".container").append(`
          <div class="post">
              <div class="post-header">
                  <img src="${post.author.photo_profile}">
                  <small>${post.create_date}</small>
              </div>
              <img src="${post.image}" class="image">
              <p>${post.description}</p>
              <input type="image" src="res/images/likebutton.png" alt="like_button">
          </div>
          `);
          }
      })

      .catch(function(e) {
          alert(e);
      });

      $("#logo_profile").click(function(){
          let userDisplay = $("#userDisplay");
          if (userDisplay.is(":visible") == false){
              userDisplay.show();
          }
          else {
              userDisplay.hide();
          }
          });
  });