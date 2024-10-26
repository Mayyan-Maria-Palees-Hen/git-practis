'use strict'


// הצגת הקוטר הראשוני של הכדורים
document.querySelector('.ball').textContent = '100'
document.querySelector('.ball2').textContent = '100'

var currentSize1 = 100 // גובה התחלתי של הכדור הראשון
var currentSize2 = 100 // גובה התחלתי של הכדור השני

function onBallClick(ball) {
    // יצירת מספר אקראי בין 20 ל-60
    var increment = Math.floor(Math.random() * (60 - 20 + 1)) + 20

    // עדכון גובה הכדור בהתאם לכדור שנלחץ
    if (ball.classList.contains('ball')) {
        currentSize1 += increment

        // מגבלה על גודל הכדור
        if (currentSize1 > 400) {
            currentSize1 = 100 // reset to 100px
        }

        // עדכון רוחב וגובה הכדור
        ball.style.width = currentSize1 + 'px'
        ball.style.height = currentSize1 + 'px'
        ball.textContent = currentSize1; // עדכון הטקסט

    } else if (ball.classList.contains('ball2')) {
        currentSize2 += increment;

        // מגבלה על גודל הכדור
        if (currentSize2 > 400) {
            currentSize2 = 100; // reset to 100px
        }

        // עדכון רוחב וגובה הכדור
        ball.style.width = currentSize2 + 'px'
        ball.style.height = currentSize2 + 'px'
        ball.textContent = currentSize2 // עדכון הטקסט
    }

    // שינוי צבע הכדור לצבע אקראי
    ball.style.backgroundColor = getRandomColor()
}