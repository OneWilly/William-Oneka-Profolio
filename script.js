// Dynamically load projects from data.json and display them in the Projects section
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.querySelector('.projects-container');
            if (projectsContainer && data.projects) {
                data.projects.forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.classList.add('card');
                    projectCard.innerHTML = `
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank">View Project</a>
                    `;
                    projectsContainer.appendChild(projectCard);
                });
            }
        })
        .catch(error => console.error('Error loading projects:', error));
});

// Smooth scroll for navigation (if you have nav links with href="#section")
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Social button handlers
document.querySelector('.github-btn')?.addEventListener('click', () => {
    window.open('https://github.com/onewilly', '_blank');
});
document.querySelector('.linkedin-btn')?.addEventListener('click', () => {
    window.open('https://linkedin.com/in/WilliamOneka', '_blank');
});