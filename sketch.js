const canvasWidth = window.innerWidth, canvasHeight = window.innerHeight
let caterpillar, caterpillarCrop
let butterflies = []
let imageX = canvasWidth/4, imageY = canvasHeight/4, imageWidth =canvasWidth/2, imageHeight = canvasHeight/2
let clicked = false
let imageCounter = 0
let gameOver = false

function preload(){
   caterpillar = loadImage('/img/caterpillar.jpg')
    console.log(caterpillar)
    let butterfly0 = loadImage('/img/0.jpg')
    let butterfly1 = loadImage('/img/1.jpg')
    let butterfly2 = loadImage('/img/2.jpg')
    let butterfly3 = loadImage('/img/3.jpg')
    butterflies = [butterfly0, butterfly1, butterfly2,butterfly3]
}

function setup(){
    createCanvas(canvasWidth, canvasHeight)
   frameRate(2)
}

function draw(){

    if(gameOver){
        background(30)
        textSize(canvasWidth/30)
        fill(230)
        stroke(230)
        text('thanks for playing', imageX, imageY - canvasWidth/12 )
    }else{
        background(230)
        if(clicked){
            image(butterflies[imageCounter % (butterflies.length - 1)], imageX, imageY, imageWidth, imageHeight)
        }else {
            textSize(canvasWidth/30)
            text('click the caterpillar for a nice surprise', imageX, imageY - canvasWidth/12)
            image(caterpillar, imageX, imageY, imageWidth, imageHeight)
        }
        imageCounter++
    }


}

function mousePressed(){
    console.log(mouseX, mouseY)
    if( mouseX > imageX &&
        mouseX < imageX + imageWidth && 
        mouseY > imageY &&
        mouseY < imageY + imageHeight){
            clicked = true
            setTimeout(endGame, 3000)
        }else {
            console.log('clicked outside image')
        }
}

function endGame(){
    gameOver = true
}