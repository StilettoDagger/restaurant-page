export default function renderContact() {
    const content = document.getElementById("content");
    const contactSection = document.createElement("section");
    contactSection.id = "contact";
    contactSection.className = "contact-section";
    
    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Reserve a Table";
    contactSection.appendChild(contactHeader);
    const reservationForm = document.createElement("form");
    reservationForm.className = "reservation-form";
    reservationForm.noValidate = true;
    reservationForm.innerHTML = `
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <p class="error invisible text-red-500 text-sm">Please enter a valid name.</p>
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <p class="error invisible text-red-500 text-sm">Please enter a valid email.</p>
    </div>
    <div>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date" required>
        <p class="error invisible text-red-500 text-sm">Please enter a valid date.</p>
    </div>
    <div> 
        <label for="time">Time:</label>
        <input type="time" id="time" name="time" required>
        <p class="error invisible text-red-500 text-sm">Please select a valid time.</p>
    </div>
    <button type="submit">Reserve</button>
    `;
    contactSection.appendChild(reservationForm);

    content.appendChild(contactSection);

    const inputFields = reservationForm.querySelectorAll("input");
    inputFields.forEach(input => {
        input.addEventListener("change", () => {
            if (input.validity.valid) {
                input.nextElementSibling.classList.add("invisible");
            } else {
                input.nextElementSibling.classList.remove("invisible");
            }
        });
        input.addEventListener("input", () => {
            if (input.validity.valid) {
                input.nextElementSibling.classList.add("invisible");
            }
        });
    });

    reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (reservationForm.checkValidity()) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            alert(`Reservation confirmed for ${name} on ${date} at ${time}. Confirmation sent to ${email}.`);
            reservationForm.reset();
        }
        else {
            const invalidFields = reservationForm.querySelectorAll(":invalid");
            invalidFields.forEach(field => {
                field.nextElementSibling.classList.remove("invisible");
            });
        }       
    });
}