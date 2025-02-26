document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById("currentDate");

    const myDate = new Date();
    const year = myDate.getFullYear();
    const day = myDate.getDay();
    const month = myDate.getMonth();
    const daym = myDate.getDate().toString().padStart(2, '0');

    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    dateElement.textContent = `${dayArray[day]}, ${monthArray[month]} ${daym}, ${year}`;
});
