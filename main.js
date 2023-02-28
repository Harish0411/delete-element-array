// Delete element from array
let array = [56,34,43,12,78,90];
let position = Number(prompt("Enter position"));
let newArray =[];
let m=0;

for(i=0; i<array.length; i++){
     if(array[i] !== array[position]){
	     newArray[m] = array[i];
		 m++;
	  }
 }
 console.log(array);
 console.log(newArray);