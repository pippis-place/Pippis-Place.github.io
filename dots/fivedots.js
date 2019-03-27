console.log("five dot called");




class FiveDot{
constructor(xC, yC, s, c1, c2, c3, r){
    this.xC = xC;
    this.yC = yC;
    this.s = s;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.r = r;
}

drawCircle(x,y,R, col){
    ctx.beginPath();
    ctx.arc(x,y,R,0,2*Math.PI);
    ctx.fillStyle = col;
    ctx.fill();
}

update(){
this.draw()
}

draw(){
    ctx.beginPath();

    ctx.rect(this.xC - this.s/2, this.yC - this.s/2, this.s, this.s);
    ctx.fillStyle = this.c1;
    ctx.fill();
    this.drawCircle(this.xC - this.s/2, this.yC - this.s/2, this.r, this.c2);
    this.drawCircle(this.xC + this.s/2, this.yC - this.s/2, this.r, this.c2);
    this.drawCircle(this.xC - this.s/2, this.yC + this.s/2, this.r, this.c2);
    this.drawCircle(this.xC + this.s/2, this.yC + this.s/2, this.r, this.c2);
    this.drawCircle(this.xC, this.yC, this.r, this.c3);
}


}



