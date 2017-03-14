function forLoop(array){
  var strangeArray =[...array]
  for (var i =0; i <25; i++) {
    if(i===1){
    strangeArray.push(`I am ${i} strange loop.`)  
  }else {
    strangeArray.push(`I am ${i} strange loops.`)  
  }
    
    
  }
  return strangeArray
}

function whileLoop(n){
  while(n >0){
      n--;
      console.log('inside while loop')
    
  }
  return 'done'
}
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){

do{
  array.pop()

}while(array.length >0 && maybeTrue())
return array
  
}

