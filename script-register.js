class Donor {
    constructor(name, email, phone, location, date, time) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.date = date;
        this.time = time;
    }

    getDonorInfo() {
        return `
            <p><strong>Nome:</strong> ${this.name}</p>
            <p><strong>E-mail:</strong> ${this.email}</p>
            <p><strong>Telefone:</strong> ${this.phone}</p>
            <p><strong>Local de Doação:</strong> ${this.location}</p>
            <p><strong>Data:</strong> ${this.date}</p>
            <p><strong>Hora:</strong> ${this.time}</p>
        `;
    }
}

document.getElementById('donor-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const donor = new Donor(name, email, phone, location, date, time);

    document.getElementById('info-display').innerHTML = donor.getDonorInfo();

    // Clear form fields
    document.getElementById('donor-form').reset();
});
