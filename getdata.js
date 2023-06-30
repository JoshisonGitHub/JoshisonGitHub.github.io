// loadJSON method to open the JSON file.
function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(JSON.parse(xhr.responseText));
        }
        else {
          error(xhr);
        }
      }
    };
    xhr.open('GET', path, true);
    xhr.send();
  }
  
  loadJSON("https://jsonplaceholder.typicode.com/posts", myData,'jsonp');
  
  function myData(Data)
  {
  
    // Output only the details on the first post
    console.log("test");
    console.log(Data[0]);
    console.log(myData);
    // output the details of first three posts
    console.log("First three posts");
    for(var i=0; i<3; i=i+1)
    {
      console.log(Data[i]);
    } 
    // output the id field of first five elements. 
    console.log("First five ID");
    for(var i=0; i<5; i=i+1)
    {
      console.log(Data[i].id);
    }
  }