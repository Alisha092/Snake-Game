document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const startBtn = document.getElementById('start');
    const scoreSpan = document.getElementById('score');
    let gameOver = false;
    let isWinner = false;
    let score = 0;

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

    function keyDownHandler(event) {
        console.log(event);
        gameOver = true;
    }

    function gameStart() {
        createMap(map);
        while (!gameOver && !isWinner) {
            document.addEventListener('keydown', keyDownHandler);
        }
    }

    startBtn.addEventListener('click', gameStart);
});