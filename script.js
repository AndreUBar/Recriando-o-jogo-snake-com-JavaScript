let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', upadate);

function upadate(event) {
    if (event.Keycode == 37 && direction != "right") direction = "left";
    if (event.Keycode == 38 && direction != "down") direction = "up";
    if (event.Keycode == 39 && direction != "left") direction = "right";
    if (event.Keycode == 40 && direction != "up") direction = "down";
}

function iniciarjogo() {

    criarBG();
    criarSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop();

    let newhead = {
        x: snakeX,
        y: snakeY

    }
    snake.unshifit(newhead);
}

let jogo = setInterval(iniciarjogo, 100);

