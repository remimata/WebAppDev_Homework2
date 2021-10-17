$(function () {
    function getPosts() {
      return $.get({
        url: "https://api.jsonbin.io/b/616bf937aa02be1d445a969d/5",
        success: function (response) {
          return response;
        },
        error: function (e) {
          alert(`error retrieving posts: ${JSON.stringify(e)}`);
        },
      });
    }

    getPosts()
      .then((res) => {
        for (let post of res) {
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
      .catch(function (e) {
        alert(e);
      });
  });