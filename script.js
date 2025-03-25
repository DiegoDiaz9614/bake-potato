document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    document.getElementById("confirmation").classList.remove("hidden");

    document.getElementById("conf-date").textContent = date;
    document.getElementById("conf-time").textContent = time;

    document.getElementById("appointment-form").reset();
});
