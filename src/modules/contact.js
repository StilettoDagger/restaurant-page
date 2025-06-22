export default function renderContact() {
    const content = document.getElementById("content");
    const contactSection = document.createElement("section");
    contactSection.id = "contact";
    contactSection.className = "contact-section";
    
    const reservationDiv = document.createElement("div");
    reservationDiv.id = "reservation-info";
    const reservationHeader = document.createElement("h2");
    reservationHeader.textContent = "Reserve a Table";
    reservationDiv.appendChild(reservationHeader);
    const reservationForm = document.createElement("form");
    reservationForm.id = "reservation-form";
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
    reservationDiv.appendChild(reservationForm);
    contactSection.appendChild(reservationDiv);

    const contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";
    contactInfo.innerHTML = `
    <h2>Contact Us</h2>
    <form id="contact-form" noValidate>
        <div>
            <p class="mb-8 text-center">For any inquiries, please fill out the form below:</p>
        </div>
        <div>
            <label for="contact-email">Email:</label>
            <input type="email" id="contact-email" name="contact-email" required>
            <p class="error invisible text-red-500 text-sm">Please enter a valid email.</p>
        </div>
        <div>
            <label for="contact-message">Message:</label>
            <textarea id="contact-message" name="contact-message" rows="4" required></textarea>
            <p class="error invisible text-red-500 text-sm">Please enter a message.</p>
        </div>
        <button type="submit">Send Message</button>
    </form>
    `;

    contactSection.appendChild(contactInfo);

    content.appendChild(contactSection);

    const reservationInputFields = reservationForm.querySelectorAll("input");
    reservationInputFields.forEach(input => {
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

    const contactForm = contactInfo.querySelector("#contact-form");

    contactForm.querySelectorAll("input, textarea").forEach(input => {
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
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (contactForm.checkValidity()) {
            const contactEmail = document.getElementById("contact-email").value;
            const contactMessage = document.getElementById("contact-message").value;
            alert(`Message sent successfully! We will get back to you at ${contactEmail}.`);
            contactForm.reset();
        } else {
            const invalidFields = contactForm.querySelectorAll(":invalid");
            invalidFields.forEach(field => {
                field.nextElementSibling.classList.remove("invisible");
            });
        }
    }
    );
}