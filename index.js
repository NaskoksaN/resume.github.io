
const certifications = [
    { name: "C# Programming Basics", url: "https://softuni.bg/certificates/details/143669/35c7c325" },
    { name: "C# Fundamentals", url: "https://softuni.bg/certificates/details/166578/6dcdbe2a" },
    { name: "C# Advanced", url: "https://softuni.bg/certificates/details/173536/19144603" },
    { name: "C# Object-Oriented Programming (OOP)", url: "https://softuni.bg/certificates/details/181076/bf712d9b" },
    { name: "MS SQL", url: "https://softuni.bg/certificates/details/185659/97d75cc0" },
    { name: "Entity Framework Core", url: "https://softuni.bg/certificates/details/194086/73aff59c" },
    { name: "ASP.NET Fundamentals", url: "https://softuni.bg/certificates/details/206714/ea7a4803" },
    { name: "ASP.NET Advanced", url: "https://softuni.bg/certificates/details/214172/c1f94a91" },
    { name: "HTML & CSS", url: "https://softuni.bg/certificates/details/218399/43b08988" },
    { name: "JavaScript Front-End", url: "https://softuni.bg/certificates/details/223866/e079d5fd" }
];
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

function showContactInfo() {
    const contactList = document.getElementById('contact-list');
    const curiousButton = document.getElementById('curious-btn');
    contactList.style.display = 'block';
    curiousButton.style.display = 'none';
}

function toggleList(listId, buttonText) {
    const list = document.getElementById(listId);
    const button = document.getElementById('certifications-btn');
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
        populateList(listId);
        button.textContent = 'Hide Modules';
    } else {
        list.style.display = 'none';
        button.textContent = buttonText;
    }
}

function populateList(listId) {
    const list = document.getElementById(listId);
    if (listId === 'certification-list') {
        list.innerHTML = '';
        certifications.forEach(cert => {
            const li = document.createElement('li');
            const strong = document.createElement('strong');
            strong.textContent = cert.name;
            const link = document.createElement('a');
            link.href = cert.url;
            link.target = '_blank';
            link.textContent = 'Certificate & Exam Result';
            li.appendChild(strong);
            li.appendChild(document.createTextNode(' – '));
            li.appendChild(link);
            list.appendChild(li);
        });
    }
}
