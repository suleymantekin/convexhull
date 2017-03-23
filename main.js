window.onload = function(){
	var canvas = document.getElementById("canvas"),
		  context = canvas.getContext("2d"),
		  width = canvas.width = 400,
      height = canvas.height = 400;


  // change the points to coordinates
  function coordinate(x, y) {
    this.x = x;
    this.y = y;
  }

// array that will hold entered points
var points = new Array();

 // draw the points, and push them to points array as coordinates
 document.getElementById("canvas").onclick = function(e){ 

        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop; 

       context.beginPath();
       context.fillRect(x-5, y-5, 5,5);
       context.stroke();

        points.push(new coordinate(x-5, y-5));
        

   }; 
  

document.getElementById("drawConvex").onclick = function (){
  
   context.clearRect(0, 0, canvas.width, canvas.height);

     for(var i= 0; i < points.length; i += 1){
       p1 = points[i];
       context.beginPath();
       context.fillRect(p1.x, p1.y, 5,5);
       context.stroke();
   }



// Sorts the points by x-coordinate
points.sort(function (p1,p2) {return p1.x - p2.x});
   

  // check if points make a counter-clockwise turn 
  function cross(o, a, b) {
      return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x)
    }
   
  // Lower array is for lowerhull points
  var lower = [];

  // finds lower hull points and push them to lower array
   for (var i = 0; i < points.length; i++) {
      while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
         lower.pop();
      }

      lower.push(points[i]);
   }

  // print the lower hull points to console
  console.log("Lower :",lower);

  // Upper array is for upperhull points
  var upper = [];

  // finds upper hull points and push them to upper array
   for (var i = points.length - 1; i >= 0; i--) {
      while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
         upper.pop();
      }

      upper.push(points[i]);
   }

  // print the upper hull points to console
  console.log("Upper :",upper);
   
   
  //hull array for concatinated lowerhull and upperhull points
  var hull = lower.concat(upper);
  
  // print the hull points to console 
  console.log("Hull :",hull);

  // draw the convex hull of the points
  for(var i= 1; i < hull.length; i += 1){
       p1 = hull[i-1];
       p2 = hull[i];
       context.beginPath();
       context.moveTo(p1.x, p1.y);
       context.lineTo(p2.x, p2.y);
       context.stroke();
   }

};


// function that will reset the canvas
  document.getElementById("reset").onclick = function (){
       // Clear canvas
       context.clearRect(0, 0, canvas.width, canvas.height);

       // Empty the points array
       points.length = 0
  };
 
}







