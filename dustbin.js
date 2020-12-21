class Dustbin 
{
   constructor(x,y,r)
   {
     var options = {
         isStatic:false,
         restitution:0.3,
         density:1.3,
         friction:0.5
     }
     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;


    }


display()
{ 
    push() 
    translate(this.left.position.x,this.left.position.y) 
    rectMode(CENTER) 
    fill(255) 
    //rect(0,0,20,100) 
    pop()
}
}