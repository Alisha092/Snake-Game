document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const startBtn = document.getElementById('start');
    const scoreSpan = document.getElementById('score');
    let gameOver = false;
    let isWinner = false;
    let score = 0;
    let direction = 'right'; // Initial direction
    let snake = [27]; // Initial position of the snake on the grid

    const map = [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
    ];

    function createMap(map) {
        for (let i = 0; i < map.length; i++) {
            const cell = document.createElement('div');
            if (i === 27) {
                cell.classList.add('snake');
            } else {
                cell.classList.add('cell');
            }
            canvas.appendChild(cell);
        }
    };

    function updateGame() {
        // Update snake's position based on direction
        // Check for game over conditions
        // Move the snake and check for food collision
        // Render the updated state
    }

    function keyDownHandler(event) {
        switch (event.key) {
            case "ArrowUp":
                direction = 'up';
                break;
            case "ArrowDown":
                direction = 'down';
                break;
            case "ArrowLeft":
                direction = 'left';
                break;
            case "ArrowRight":
                direction = 'right';
                break;
        }
    }

    document.addEventListener('keydown', keyDownHandler);

    function gameStart() {
        createMap(map);
        setInterval(updateGame, 100); // Call updateGame every 100ms
    }

    startBtn.addEventListener('click', gameStart);
});