'use strict'


// הצגת הקוטר הראשוני של הכדורים
document.querySelector('.ball').textContent = '100'
document.querySelector('.ball2').textContent = '100'

var currentSize1 = 100 // גובה התחלתי של הכדור הראשון
var currentSize2 = 100 // גובה התחלתי של הכדור השני

function onBallClick(ball, maxDiameter) {
    // יצירת מספר אקראי בין 20 ל-60
    var increment = Math.floor(Math.random() * (60 - 20 + 1)) + 20

    // עדכון גובה הכדור בהתאם לכדור שנלחץ
    if (ball.classList.contains('ball')) {
        currentSize1 += increment

        // מגבלה על גודל הכדור
        if (currentSize1 > maxDiameter) {
            currentSize1 = 100 // reset to 100px
        }

        // עדכון רוחב וגובה הכדור
        ball.style.width = currentSize1 + 'px'
        ball.style.height = currentSize1 + 'px'
        ball.textContent = currentSize1 // עדכון הטקסט

    } else if (ball.classList.contains('ball2')) {
        currentSize2 += increment

        // מגבלה על גודל הכדור
        if (currentSize2 > maxDiameter) {
            currentSize2 = 100 // reset to 100px
        }

        // עדכון רוחב וגובה הכדור
        ball.style.width = currentSize2 + 'px'
        ball.style.height = currentSize2 + 'px'
        ball.textContent = currentSize2 // עדכון הטקסט
    }

    // שינוי צבע הכדור לצבע אקראי
    ball.style.backgroundColor = getRandomColor()
}


function swapBalls() {
    var ball1 = document.querySelector('.ball')
    var ball2 = document.querySelector('.ball2')

    // חילוף צבעים
    var tempColor = ball1.style.backgroundColor
    ball1.style.backgroundColor = ball2.style.backgroundColor
    ball2.style.backgroundColor = tempColor

    // חילוף גדלים
    var tempSize = ball1.style.width // רוחב הכדור הראשון
    ball1.style.width = ball2.style.width // רוחב הכדור השני
    ball2.style.width = tempSize // עדכון רוחב הכדור הראשון

    // עדכון גובה הכדורים באותו אופן
    tempSize = ball1.style.height // גובה הכדור הראשון
    ball1.style.height = ball2.style.height // גובה הכדור השני
    ball2.style.height = tempSize // עדכון גובה הכדור הראשון

    // עדכון טקסט הכדורים
    ball1.textContent = parseInt(ball1.style.width) // עדכון לפי רוחב חדש,הפרסאינט ממיר את הPX למספר
    ball2.textContent = parseInt(ball2.style.width) // עדכון לפי רוחב חדש
}