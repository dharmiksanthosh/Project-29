function isTouching(lstone,num){
  var distance = dist(lstone.body.position.x,lstone.body.position.y,mangoes[num].body.position.x,mangoes[num].body.position.y)
	
	if 	(distance <=lstone.radius+mangoes[num].radius/2)
		{
		console.log(true);
		Matter.Body.setStatic(mangoes[num].body,false);
  } 
  }