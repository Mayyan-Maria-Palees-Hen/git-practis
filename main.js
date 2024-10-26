'use strict'

document.querySelector('.ball').onclick = onBallClick

// הצגת הקוטר הראשוני של הכדור
document.querySelector('.ball').textContent = '100'

var currentSize = 100 // מתחילים עם גובה התחלתי של 100px

function onBallClick() {
    var ball = document.querySelector('.ball')
    currentSize += 50

    if (currentSize > 400) {
        currentSize = 100 // reset to 100px
        console.log('Resetting size to:', currentSize)
    }

    ball.style.width = currentSize+ 'px'
    ball.style.height = currentSize + 'px'
    ball.textContent = currentSize // עדכון הטקסט
}