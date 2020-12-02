class Food{
    constructor(){
       this.food = loadImage("Milk.png")
      foodStock=1
       console.log(foodStock)
       this.lastFed

    }
    getFoodStock(){
         return foodStock;
    }
    updateFoodStock(foodStock){
        foodStock=foodStock;
    }
    deductFoodStock(){
        if(foodStock>0){
             foodStock=foodStock-1;
             } 
      
    }
    display(){
        var x =80,y=100;
        imageMode(CENTER)


        if (foodStock!=0){
            for(var i =0;i<foodStock;i++){
                if (i%10==0){
                   x=80
                   y=y+50; 
                }
                image(this.food,x,y,70,70);
                x=x+30
                
            }
        }
    }
}