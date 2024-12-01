// מערך דינמי של טיסות
const flights = [
    { flightNo: 'W61283', origin: 'Tel Aviv', destination: 'Krakow' },
    { flightNo: 'LX8396', origin: 'Larnaca', destination: 'Zurich' }
];

// קבלת האלמנט של הטבלה
const tableBody = document.querySelector('#flights-table tbody');
const noFlightsMessage = document.getElementById('no-flights-message');

// מילוי הטבלה
function loadFlights() {
    if (flights.length === 0) {
        noFlightsMessage.style.display = 'block';
    } else {
        noFlightsMessage.style.display = 'none';
        tableBody.innerHTML = ''; // ניקוי הטבלה לפני הוספת נתונים
        flights.forEach(flight => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${flight.flightNo}</td>
                <td>${flight.origin}</td>
                <td>${flight.destination}</td>
                <td><button class="book-btn" data-flight="${flight.flightNo}">Book</button></td>
            `;
            tableBody.appendChild(row);
        });

        // הוספת אירוע לכל כפתור "Book"
        document.querySelectorAll('.book-btn').forEach(button => {
            button.addEventListener('click', function() {
                const flightNo = this.getAttribute('data-flight');
                alert(`Booking flight number: ${flightNo}`);
                window.location.href = `booking_form.html?flight=${flightNo}`;
            });
        });
    }
}

// קריאה לפונקציה להטענת הטיסות
loadFlights();

// פונקציה לסינון טיסות לפי Origin ו-Destination
function filterFlights() {
    const originFilter = document.getElementById('origin-filter').value;
    const destinationFilter = document.getElementById('destination-filter').value;

    const filteredFlights = flights.filter(flight => {
        return (originFilter === '' || flight.origin === originFilter) &&
               (destinationFilter === '' || flight.destination === destinationFilter);
    });

    tableBody.innerHTML = ''; // ניקוי הטבלה לפני הוספת נתונים
    if (filteredFlights.length === 0) {
        noFlightsMessage.style.display = 'block';
    } else {
        noFlightsMessage.style.display = 'none';
        filteredFlights.forEach(flight => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${flight.flightNo}</td>
                <td>${flight.origin}</td>
                <td>${flight.destination}</td>
                <td><button class="book-btn" data-flight="${flight.flightNo}">Book</button></td>
            `;
            tableBody.appendChild(row);
        });

        // הוספת אירוע לכל כפתור "Book"
        document.querySelectorAll('.book-btn').forEach(button => {
            button.addEventListener('click', function() {
                const flightNo = this.getAttribute('data-flight');
                alert(`Booking flight number: ${flightNo}`);
                window.location.href = `booking_form.html?flight=${flightNo}`;
            });
        });
    }
}
