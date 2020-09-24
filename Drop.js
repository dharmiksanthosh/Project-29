function isTouching(num){

  if (stone.body.position.x-mangoes[num].body.position.x < stone.body.width/2+mangoes[num].radius/2 &&
      mangoes[num].body.position.x-stone.body.position.x < stone.body.width/2+mangoes[num].radius/2 &&
      stone.body.position.y-mangoes[num].body.position.y < stone.body.height/2+mangoes[num].radius/2 &&
      mangoes[num].body.position.y-stone.body.position.y < stone.body.height/2+mangoes[num].radius/2){

      Matter.Body.setStatic(mangoes[num].body, false);
} 
}