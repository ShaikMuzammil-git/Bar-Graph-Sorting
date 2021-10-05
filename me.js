/* for generating array*/

var generatedArray = [];

function generatebars(){

  document.getElementById("sortAscending").style.display = "block";
  document.getElementById("sortDescending").style.display = "block";
  document.getElementById("sortAllAtOnce").style.display = "block";

  
  var tempArr = [];
  for(let i=0; i<5;i++){
      let x = Math.floor(Math.random() * 100) + 1;
      tempArr.push(x);  
    }
    generatedArray=[...tempArr]
    document.getElementById("displayGeneratedArr").innerHTML=tempArr;

  var a= "bar"; 
    for ( let i=1; i<6 ; i++){
    var ab = a + i;
     ab = document.getElementById(ab);
    ab.style.height = generatedArray[i-1]+ "%" ;
      }


     var x= "innerBar"; 
    for ( var z=1; z<6 ; z++){
var xy = x + z;
  xy = document.getElementById(xy);
xy.style.animationName = "";
    }

    setTimeout(() =>{
     var x= "innerBar"; 
    for ( var z=1; z<6 ; z++){
    var xy = x + z;
     xy = document.getElementById(xy);
      xy.style.animationName = "up";
       }     
     },10);


    var x= "innerBarText"; 
        for ( var z=1; z<6 ; z++){
        var xy = x + z;
      xy = document.getElementById(xy);
      xy.innerHTML = generatedArray[z-1];
      }

    /* to reset the executing right graph when called for sort already in past  */
    var x= "innerBar1"; 
    for ( var z=1; z<6 ; z++){
      var xy = x + z;
      xy = document.getElementById(xy);
      xy.style.animationName = "";
     }

    var x= "innerBarText1"; 
    for ( var z=1; z<6 ; z++){
    var xy = x + z;
    xy = document.getElementById(xy);
    xy.innerHTML = "";
    }


}



/* swap function - partB of select sort */
var sortedArray=[];
function swap(a, b, arr) {
let tmp = arr[a];
arr[a] = arr[b];
arr[b] = tmp;
}

/* for sorting in ascending order*/
function selectionSort1(array) {
for (let i = 0; i < array.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < array.length; j++) {
    if (array[min] > array[j]) min = j;
  }
  swap(i, min, array);
}
sortedArray = [...array];
return array;
}

/*OR  OR  OR  OR  OR*/

/* for sorting in descending order*/
function selectionSort2(array) {
for (let i = 0; i < array.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < array.length; j++) {
    if (array[min] < array[j]) min = j;
  }
  swap(i, min, array);
}
sortedArray = [...array];
return array;
}


function sortAscending(){
  document.getElementById("generateArrayButton").style.display="none";
  document.getElementById("sortAscending").style.display="none";
  document.getElementById("sortDescending").style.display="none";
  document.getElementById("sortAllAtOnce").style.display="none";
  document.getElementById("dummySortAscending0").style.display="block";

    //document.getElementById("displaySortedArr").style.backgroundColor="black";    // to know wheteher click is working or not
  //document.getElementById("displaySortedArr").style.color="white";
       
  var toBesortedArray = [...generatedArray];    // doing this coz i want sorted array to available outside this function also  - ITS IMPORTANT
  selectionSort1(toBesortedArray);  // could have given selectionSort1(generatedArray);    but why ? explained in above comment      


        var a= "bar1"; 
              for ( let i=1; i<6 ; i++){
                    var ab = a + i;
                    ab = document.getElementById(ab);
                    ab.style.height = sortedArray[i-1]+ "%" ;
                  }
        document.getElementById("displaySortedArr").innerHTML=sortedArray;

  /*decreasing height of left graph innerbars in ascending order */
  console.log(generatedArray);
  console.log(sortedArray);
  
        var x =[];
        var y = [];
        for ( var i=1 ; i<=sortedArray.length; i++){
             x = sortedArray[i-1];
                for(var j=1 ; j<=generatedArray.length ; j++){
                       y=generatedArray[j-1];
                      if(x == y){
                      // console.log ( x , y);
                      // console.log(i , j );
                      taskLeftInnerbarDown(i,j);
                             function taskLeftInnerbarDown(i,j){
                              setTimeout(function(){ 	
                                var a= "innerBar";
                                  var aj = a + j;
                                  aj = document.getElementById(aj);
                                  console.log(x,y);
                                  console.log(i,j);
                                  aj.style.animationName = "down";
                                  if(i==5){
                                    setTimeout(() => {
                                      document.getElementById("clear").style.display = "block";
                                    }, 1000);
                                  }
                                  
                                }, 1000 * i);        
                      } 
                      }  
                                
            }  
        } 
        /*increasing height of the right graph innerbars in ascending order */ 
      // console.log(sortedArray);
      var x =[];
      for ( var i=1 ; i <= sortedArray.length; i++){
      x = sortedArray[i-1];  
      taskRightInnerbarUp(i);
      function taskRightInnerbarUp(i){
          setTimeout(function(){ 	
 
  
          var a= "innerBar1";
          var ai = a + i;
          ai = document.getElementById(ai);
          ai.style.animationName = "up";
            
          var m = "innerBarText1"; 
          var mi = m + i;
          mi = document.getElementById(mi);
          mi.innerHTML = sortedArray[i-1];
          

        
          }, 1000 * i);        
          } 
      }   
  
  }
  
function sortDescending(){
  document.getElementById("generateArrayButton").style.display="none";
  document.getElementById("sortAscending").style.display="none";
  document.getElementById("sortDescending").style.display="none";
  document.getElementById("sortAllAtOnce").style.display="none";
  document.getElementById("dummySortDescending0").style.display="block";

   
//document.getElementById("displaySortedArr").style.backgroundColor="black";    // to know wheteher click is working or not
  //document.getElementById("displaySortedArr").style.color="white";
       
  var toBesortedArray = [...generatedArray];    // doing this coz i want sorted array to available outside this function also  - ITS IMPORTANT
  selectionSort2(toBesortedArray);  // could have given selectionSort1(generatedArray);    but why ? explained in above comment      


        var a= "bar1"; 
              for ( let i=1; i<6 ; i++){
                    var ab = a + i;
                    ab = document.getElementById(ab);
                    ab.style.height = sortedArray[i-1]+ "%" ;
                  }
        document.getElementById("displaySortedArr").innerHTML=sortedArray;

  /*decreasing height of left graph innerbars in ascending order */
  // console.log(sortedArray);
  // console.log(generatedArray);
        var x =[];
        var y = [];
        for ( var i=1 ; i<=sortedArray.length; i++){
             x = sortedArray[i-1];
                for(var j=1 ; j<=generatedArray.length ; j++){
                       y=generatedArray[j-1];
                      if(x == y){
                      // console.log ( x , y);
                      // console.log(i , j );
                      taskLeftInnerbarDown(i,j);
                             function taskLeftInnerbarDown(i,j){
                              setTimeout(function(){ 	
                                var a= "innerBar";
                                  var aj = a + j;
                                  aj = document.getElementById(aj);
                                  console.log(aj);
                                  aj.style.animationName = "down";
                                  if(i==5){
                                    setTimeout(() => {
                                      document.getElementById("clear").style.display = "block";
                                    }, 1000);
                                  }
                                  
                                }, 1000 * i);        
                      } 
                      }  
                                
            }  
        } 
        /*increasing height of the right graph innerbars in ascending order */ 
      // console.log(sortedArray);
      var x =[];
      for ( var i=1 ; i <= sortedArray.length; i++){
      x = sortedArray[i-1];  
      taskRightInnerbarUp(i);
      function taskRightInnerbarUp(i){
          setTimeout(function(){ 	
 
  
          var a= "innerBar1";
          var ai = a + i;
          ai = document.getElementById(ai);
          ai.style.animationName = "up";
            
          var m = "innerBarText1"; 
          var mi = m + i;
          mi = document.getElementById(mi);
          mi.innerHTML = sortedArray[i-1];
          

        
          }, 1000 * i);        
          } 
      }   
  
  
  
}


function sortAllAtOnce(){  
  document.getElementById("generateArrayButton").style.display="none";
  document.getElementById("sortAscending").style.display="none";
  document.getElementById("sortDescending").style.display="none";
  document.getElementById("sortAllAtOnce").style.display="none";

  document.getElementById("dummySortAscending").style.display="block";
  document.getElementById("dummySortDescending").style.display="block";
  document.getElementById("dummySortAllAtOnce").style.display="block";
  document.getElementById("dummySortAscending").style.animationName="blink";
  document.getElementById("dummySortDescending").style.animationName="blink";
}


function dummySortAscending(){ 
  document.getElementById("dummySortDescending").style.display="none";
  document.getElementById("dummySortAscending").style.animationName="";
  document.getElementById("dummySortDescending").style.animationName="";


  selectionSort1(generatedArray);
  var x= "innerBar"; 
  for ( var z=1; z<6 ; z++){
 var xy = x + z;
 xy = document.getElementById(xy);
 xy.style.animationName = "down";
   }


   var a= "bar1"; 
   for ( let i=1; i<6 ; i++){
   var ab = a + i;
    ab = document.getElementById(ab);
   ab.style.height = sortedArray[i-1]+ "%" ;
   }



 var x= "innerBar1"; 
 for ( var z=1; z<6 ; z++){
 var xy = x + z;
  xy = document.getElementById(xy);
   xy.style.animationName = "";
 }

 setTimeout(() =>{
   var x= "innerBar1"; 
   for ( var z=1; z<6 ; z++){
   var xy = x + z;
    xy = document.getElementById(xy);
  xy.style.animationName = "up";
     }     
   },10);

 var x= "innerBarText1"; 
   for ( var z=1; z<6 ; z++){
     var xy = x + z;
  xy = document.getElementById(xy);
   xy.innerHTML = sortedArray[z-1];
     }
     setTimeout(() => {  
       document.getElementById("clear").style.display = "block";
     }, 1000);
}

function dummySortDescending(){ 
  document.getElementById("dummySortAscending").style.display="none";
  document.getElementById("dummySortAscending").style.animationName="";
  document.getElementById("dummySortDescending").style.animationName="";
  selectionSort2(generatedArray);
  var x= "innerBar"; 
  for ( var z=1; z<6 ; z++){
 var xy = x + z;
 xy = document.getElementById(xy);
 xy.style.animationName = "down";
   }


   var a= "bar1"; 
   for ( let i=1; i<6 ; i++){
   var ab = a + i;
    ab = document.getElementById(ab);
   ab.style.height = sortedArray[i-1]+ "%" ;
   }



 var x= "innerBar1"; 
 for ( var z=1; z<6 ; z++){
 var xy = x + z;
  xy = document.getElementById(xy);
   xy.style.animationName = "";
 }

 setTimeout(() =>{
   var x= "innerBar1"; 
   for ( var z=1; z<6 ; z++){
   var xy = x + z;
    xy = document.getElementById(xy);
  xy.style.animationName = "up";
     }     
   },10);

 var x= "innerBarText1"; 
   for ( var z=1; z<6 ; z++){
     var xy = x + z;
  xy = document.getElementById(xy);
   xy.innerHTML = sortedArray[z-1];
     }
     setTimeout(() => {
       document.getElementById("clear").style.display = "block";
     }, 1000);
}



/* clear*/ 
function ds(){
  document.getElementById("dummySortAscending").style.display="none";
  document.getElementById("dummySortDescending").style.display="none";
  document.getElementById("dummySortAllAtOnce").style.display="none";
  document.getElementById("dummySortAscending0").style.display="none";
  document.getElementById("dummySortDescending0").style.display="none";
  document.getElementById("dummySortAllAtOnce").style.display="none";

   document.getElementById("generateArrayButton").style.display = "block";
   document.getElementById("clear").style.display = "none";
  
   var a= "bar"; 
    for ( let i=1; i<6 ; i++){
  var ab = a + i;
    ab = document.getElementById(ab);
    ab.style.height = 0+ "%" ;
    }

  var a= "bar1"; 
  for ( let i=1; i<6 ; i++){
  var ab = a + i;
  ab = document.getElementById(ab);
  ab.style.height = 0+ "%" ;
  }


  var x= "innerBar"; 
  for ( var z=1; z<6 ; z++){
  var xy = x + z;
  xy = document.getElementById(xy);
  xy.style.animationName = "down";
  }

  var x= "innerBar1"; 
  for ( var z=1; z<6 ; z++){
  var xy = x + z;
  xy = document.getElementById(xy);
  xy.style.animationName = "down";
}


var x= "innerBarText"; 
for ( var z=1; z<6 ; z++){
var xy = x + z;
  xy = document.getElementById(xy);
xy.innerHTML = "";
}
var x= "innerBarText1"; 
for ( var z=1; z<6 ; z++){
var xy = x + z;
  xy = document.getElementById(xy);
xy.innerHTML = "";
}
              
}
    
            




