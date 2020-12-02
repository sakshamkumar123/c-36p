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

  dog=createSprite(720,200,10,10)
  dog.addImage(happyDog)
  dog.scale = 0.2

  feed=createButton("Feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addFood=createButton("add food")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
}


function draw() { 
  background (46, 139, 87) 

  fedTime=database.ref('FeedTime')
  fedTime.on("value",function(data){
    Feedtime=data.val()
  })

  foodObj.display()   

  drawSprites();
  fill("black")
  textSize(30)

  if (hour()>12 && hour()<23){
  pm = hour()-12
  text("last fed: "+pm + " PM",600,75)
  }

 else{

    text("last fed: "+FeedTime + " PM",600,75)
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


