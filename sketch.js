//Create variables here
var dog, happyDog, database, foodS, foodStock
var feed,addFood,Feedtime,LastFed,foodObj,pm

function preload()
{
  dog = loadImage("do.png")
  happyDog= loadImage("dog.png")

  
	//load images here
}

function setup() {
  database=firebase.database();
  createCanvas(800, 500);


  foodObj=new Food()

  dog=createSprite(710,190,10,10)
  dog.addImage(happyDog)
  dog.scale = 0.3

  feed=createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood=createButton("add food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
}


function draw() { 
  background (46, 139, 87) 

  feedTime=database.ref('FeedTime')
  feedTime.on("value",function(data){
   LastFed=data.val()
  })

  foodObj.display()   

  drawSprites();
  fill("black")
  textSize(30)

  text("press Feed the dog  to feed the dog ",100,450)

  if (LastFed>12 &&LastFed<23){
  pm =LastFed-12
  text("last fed: "+pm + " PM",100,75)
  }

 else{

    text("last fed: "+LastFed + " AM",100,75)
    }
  
}

function feedDog(){
  if(foodStock!=0){
  foodStock=foodStock-1
  console.log(foodStock)
  
  database.ref('/').update({
    food:foodStock,
    FeedTime:hour()
  })
}
  
}
function addFoods(){
  foodStock++
  console.log("this"+foodStock)
 database.ref('/').update({
 food:foodStock
 })

}


