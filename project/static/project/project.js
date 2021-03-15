let project1 = document.getElementById('project-1');
let projectsDescription1 = document.getElementById('projects-description-1');

let project2 = document.getElementById('project-2');
let projectsDescription2 = document.getElementById('projects-description-2');

let project3 = document.getElementById('project-3');
let projectsDescription3 = document.getElementById('projects-description-3');

project1.addEventListener('mouseover',(event) => {
    projectsDescription1.style.display = 'flex';
    projectsDescription2.style.display = 'none';
    projectsDescription3.style.display = 'none';
});

project2.addEventListener('mouseover',(event) => {
    projectsDescription1.style.display = 'none';
    projectsDescription2.style.display = 'flex';
    projectsDescription3.style.display = 'none';
});

project3.addEventListener('mouseover',(event) => {
    projectsDescription1.style.display = 'none';
    projectsDescription2.style.display = 'none';
    projectsDescription3.style.display = 'flex';
});