// הוספת אירוע לכל כפתור "Book" כך שלחיצה עליו תעביר לדף ההזמנה עם פרטי הטיסה
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const flightNo = this.getAttribute('data-flight');
        alert(`Booking flight number: ${flightNo}`);
        
        // העברה לדף ההזמנה (הדף 'booking_form.html') עם פרטי הטיסה
        window.location.href = `booking_form.html?flight=${flightNo}`;
    });
});
