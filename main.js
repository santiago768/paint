canvas=document.getElementById("myCanvas");
pen=canvas.getContext("2d");
color="red";


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="md";
    color = document.getElementById("color").Value;
    width =document.getElementById("width_of_line").Value;
    radius = document.getElementById("radius").Value;
    mouseevent = "mousedown";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseevent="ml";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="mu";
}
canvas.addEventListener("mousemove",my_move);
function my_move(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouseevent=="md"){
        console.log("current position of x and y coordinates = ")
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        pen.beginPath();
        pen.strokeStyle=color;
        pen.lineWidth=width_of_line;
        pen.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0, 2 *Math.PI);
        pen.moveTo(lastX,lastY);
        pen.lineTo(currentX,currentY);
        pen.stroke();
    }
    lastX=currentX;
    lastY=currentY;
}