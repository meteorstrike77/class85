canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasaimagesarray = ["nasa_image_1.jpg","nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
randomnumber = Math.floor(Math.random()* 4);
console.log(randomnumber);


backgroundimage = nasaimagesarray[randomnumber];
roverimage = "rover.png";
roverwidth = 100;
roverheight = 90;
roverx = 10;
rovery = 10;

function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = backgroundimage;

    rover_imageTag = new Image();
    rover_imageTag.onload = uploadRover;
    rover_imageTag.src = roverimage;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imageTag, roverx, rovery, roverwidth, roverheight);
}
window.addEventListener("keydown", my_keydown) 
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    
    if(keypressed == '38') {
        up();
        console.log("up");
    }
    if(keypressed == '40') {
        down();
        console.log("down");
    }
    if(keypressed == '39') {
        right();
        console.log("right");
    }
    if(keypressed == '37') {
        left();
        console.log("left");
    }
}
function up() {
    if(rovery >=0) {
        rovery = rovery - 10;
        console.log("When up is pressed, roverx = " + roverx + "rovery = " + rovery);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if(rovery <= 500) {
        rovery = rovery + 10;
        console.log("When down is pressed, roverx = " + roverx + "rovery = " + rovery);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if(roverx >= 0) {
        roverx = roverx - 10;
        console.log("When left is pressed, rover x = " + roverx + "rovery = " + rovery);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if(roverx <= 700) {
        roverx = roverx + 10;
        console.log("When right is pressed, rover x = " + roverx + "rovery = " + rovery);
        uploadBackground();
        uploadRover();
    }
}