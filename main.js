'use strict'

document.querySelector('.ball').onclick = onBallClick;

// הצגת הקוטר הראשוני של הכדור
document.querySelector('.ball').textContent = '100'

function onBallClick() {
    var ball = document.querySelector('.ball')
    
    // קבלת רוחב הכדור הנוכחי בעזרת getComputedStyle
    var currentSize = parseInt(getComputedStyle(ball).width)
    
    var newSize = currentSize + 50
    ball.style.width = newSize + 'px'
    ball.style.height = newSize + 'px'
    ball.textContent = newSize // עדכון הטקסט
}