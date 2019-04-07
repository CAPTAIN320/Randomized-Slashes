function generate(){
  
  var length = 29
  var height = 100
  for (var line=1; line<height; line++) {
    for(var i=1;i<length;i++) {
      var output = (Math.floor((Math.random()*2)%2)) ? "╱" : "╲";
      document.write(output);
   
    }
  document.writeln("<br>");
 }
}
