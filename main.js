'use strict'

document.querySelector('.ball').onclick = onBallClick

// הצגת הקוטר הראשוני של הכדור
document.querySelector('.ball').textContent = '100'

var currentSize = 100 // מתחילים עם גובה התחלתי של 100px

function onBallClick() {
    var ball = document.querySelector('.ball')

     // יצירת מספר אקראי בין 20 ל-60
     var increment = Math.floor(Math.random() * (60 - 20 + 1)) + 20
     currentSize += increment
    //  console.log('increment', increment)

    if (currentSize > 400) {
        currentSize = 100 // reset to 100px
        console.log('Resetting size to:', currentSize)
    }

    ball.style.width = currentSize+ 'px'
    ball.style.height = currentSize + 'px'
    ball.textContent = currentSize // עדכון הטקסט


    // שינוי צבע הכדור לצבע אקראי
    ball.style.backgroundColor = getRandomColor()
}