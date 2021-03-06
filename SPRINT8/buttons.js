class BUTTON{ //this is the class for the buttons that change the colour of the drawings
    constructor(x, y, w, h, col, col1, textColour){
        this.x = x; // this is the x value for the rectangle that is the button
        this.y = y; // this is the y value
        this.w = w; // this is the width to set how wide the button will be
        this.h = h; // this is the height that will set how tall the button will be
        this.col = col; // this is the button colour
        this.col1= col1; // this is the border colour for the button
        this.textColour = textColour;
        this.inbounds = false;
        this.col1original = col1; // as the border colour changes when the mouse hovers over the button this is storing the original variable 
        this.mouseDown = false; // this boolean variable stores whether or not the mouse is down
        this.target = draw; // the target is the rectangle class so this is what sends variables to the rectangle function when drawing the shapes
        this.element = canvas;// this adds listeners in the canvas which is the main box on the screen
        this.element.addEventListener('mousedown', this.mDown.bind(this)); // this adds a mouse down listener to make the screen interactive
        this.element.addEventListener('mousemove', this.mMove.bind(this)); // this adds a mouse moving listener
        this.element.addEventListener("mouseup", this.mUp.bind(this)); // this adds a mouse up listener when the mouse is up
    }
    
    rectangle(){
        // this is the rectangle function to create the rectangular colour buttons
        ctx.rect(this.x, this.y, this.w, this.h); // this creates the rectangle
        ctx.fillStyle=this.col; // the defines the colour of the rectangle using the colour defined in the main
        ctx.fill(); // this fills the rectangle button with colour, this is the colour the shapes on the screen will be when this button is selected
        ctx.strokeStyle=this.col1; // this is the colour of border of the button determined in the main
        ctx.lineWidth = 6; // this is the width of the border
        ctx.stroke(); // this creates the border
    }

    draw(){
        ctx.beginPath(); // this starts the drawing of the buttons
        this.rectangle(); // this calls the rectangle function to create the buttons
    }

    mDown(e){
        this.mouseDown = true; // when the mouse down event happens the mouseDown variable changes from false to true
        if (this.inbounds == true){
            // if the mouse is clicked in the bounds of the button the button is selected
            BUTTON.selected=this; // the button is selected
            this.target.Colour(this.col, this.col1original); // sends the button colour (the colour selected) is sent to the target class to change the 
            //colour of the drawings and border colour is sent to change the text colour (if the 'Select a shape!' is on the screen) to show what colour is selected
        }
    }
    
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY; //variable stores the values of the mouse when ever it moves 
        if (this.x < this.xMouse && (this.x+this.w) > this.xMouse && this.yMouse > this.y && this.yMouse < (this.y+this.h)){
            // this if statement determines if the mouse values are within the bounds of the button to see if the mouse is hovering over the button
            this.col1 = "white"; // if the mouse is over the button the border colour of the button changes to black to show the user their mouse is over a button 
            this.target.textColour(this.col1original); // this sends the 
            this.inbounds = true;
        }
        else{ 
            this.inbounds = false;
            this.col1 = this.col1original;
        }
    }
    
    mUp(e){
        this.mouseDown = false; //when the mouse up event happens the mouseUp variable changes from true to false
    }

    text(){
        ctx.fillStyle = this.textColour;
        var myFont= "bold italic 14px helvetica";
        ctx.font=myFont
        ctx.fillText("Selected", this.x+5,(this.y+35));
    }

    update(){
        this.draw();
        if(BUTTON.selected==this){
            this.text();
        }
        ctx.save();
    }

}
BUTTON.selected = " ";
