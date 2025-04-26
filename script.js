// Dynamically load projects from data.json and display them in the Projects section
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Render Projects
            const projectsContainer = document.querySelector('.projects-container');
            if (projectsContainer && data.projects) {
                data.projects.forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.classList.add('card');
                    projectCard.innerHTML = `
                        ${project.image ? `<img src="${project.image}" alt="${project.title} screenshot" style="width:100%;border-radius:0.5rem 0.5rem 0 0;margin-bottom:1rem;">` : ''}
                        <h3>${project.title || ''}</h3>
                        <p>${project.description || ''}</p>
                        ${project.link ? `<a href="${project.link}" target="_blank" class="project-link">View Project</a>` : ''}
                    `;
                    // Technologies badges
                    if (project.technologies) {
                        const techList = document.createElement('div');
                        techList.className = 'project-tech';
                        project.technologies.forEach(tech => {
                            const badge = document.createElement('span');
                            badge.className = 'tech-badge';
                            badge.textContent = tech;
                            techList.appendChild(badge);
                        });
                        projectCard.appendChild(techList);
                    }
                    projectsContainer.appendChild(projectCard);
                });
            }

            // Render Skills
            const skillsContainer = document.querySelector('.skills-container');
            if (skillsContainer && data.skills) {
                data.skills.forEach(skill => {
                    const skillDiv = document.createElement('div');
                    skillDiv.className = 'skill-card';
                    skillDiv.innerHTML = `
                        ${skill.image ? `<img src="${skill.image}" alt="${skill.name} icon" class="skill-icon" />` : ''}
                        <span class="skill-name">${skill.name || ''}</span>
                        <span class="skill-level">${skill.level || ''}</span>
                    `;
                    skillsContainer.appendChild(skillDiv);
                });
            }
        })
        .catch(error => console.error('Error loading data:', error));
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