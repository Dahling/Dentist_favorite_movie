//Back-End Logic:


function Movie (movie, year, score) {//this creates a movie constructor
  this.movie = movie;//these are the objects
  this.year = year;//these are the objects
  this.score = score;//these are the objects
}


$(function(){//this is the beginning of the function
  var moviesArray = [];//this creates an empty array

  function resetFields() {
   +    $("input#input-movie").val("");
   +    $("input#input-year").val("");
   +    $("input#input-score").val("");
 }
  //Front-End Logic:


  $("form").submit(function(event) {//this submits the form
     event.preventDefault();

     var inputtedMovie = $("input#input-movie").val();//this says there is variable named inputted-movie and it equals to the value that the user places inside the inputted-movie field
     var inputtedYear = $("input#input-year").val();//this says there is variable named inputted-year and it equals to the value that the user places inside the inputted-year field
     var inputtedScore = parseInt($("input#input-score").val());//this says there is variable named inputted-movie and it equals to the value that the user places inside the input movie field
console.log(inputtedMovie);
console.log(inputtedYear);
console.log(inputtedScore);
     var newMovie = new Movie(inputtedMovie, inputtedYear, inputtedScore);

     moviesArray.push(newMovie);

     $("#table").append("<tr>" +
     "<td>" + inputtedMovie +
     "<td>" + inputtedYear +
     "<td>" + inputtedScore +
     "</tr>");
  });


 resetFields();
});
