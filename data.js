document.getElementById("listOfClasses").innerHTML = "hello";
var classes = ['class1', 'class2','class3', 'class4',
              'class5', 'class6','class7', 'class8'];
classes.forEach(function(string){
    document.getElementById("listOfClasses").innerHTML += " " +string;
});


                
