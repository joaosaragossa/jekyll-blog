window.onload = function()
{
  // Header height resize
  

  setInterval(function()
  {
    var header = document.getElementById('page-header').style.height = window.innerHeight + "px";
  },0);

  // Post list items height resize

  var posts = document.getElementById('post-list').getElementsByTagName('li');

  setInterval(function()
  {
    for (var i = 0; i < posts.length; i++) 
    {
      posts[i].style.height = posts[i].clientWidth + "px";
    }
  },0);
}