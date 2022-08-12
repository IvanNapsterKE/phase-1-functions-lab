function distanceFromHqInBlocks(dist){
    if (dist > 42) {
      return (dist - 42); }

      else {return (42 - dist)}
    }

   
function distanceFromHqInFeet(dist){
  if (dist > 42) {
    return (dist - 42)*264; }

    else {return (42 - dist)*264}
  }
    
function distanceTravelledInFeet(x,y){

  if (x>y) {

      return (x-y)*264;
  
  }else {   
      return(y-x)*264;
  }

}
   
function calculatesFarePrice(start, destination){
  let dist= distanceTravelledInFeet(start,destination)


  if (dist <= 400) {

      return 0;
  }

  else if (dist > 400 && dist <=2000) {

  return (dist - 400) * 0.02;
  
  }else if (dist > 2000 && dist < 2500) {
  return 25; 
}
  else { return "cannot travel that far";
  
}
}
     