// דוגמה לפונקציה לאימות טפסים בהזמנת טיסה.
function validateForm() {
    let form = document.getElementById('searchForm');
    let origin = form.origin.value.trim();
    let destination = form.destination.value.trim();

    if (origin === '' || destination === '') {
        alert('Please fill in both origin and destination fields.');
        return false;
    }
    return true;
}

document.getElementById('searchForm').onsubmit = function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
};
