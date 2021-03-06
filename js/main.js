// Social network code
import { socialNetworks, URLs, menuItems, targets, skillsName, skills, iconSkill, SkillThemes, aboutSkillText } from './items';

document.addEventListener("DOMContentLoaded", function () {
    //

    for (let i = 0; i < socialNetworks.length; i++) {
        const element = socialNetworks[i];
        const url = URLs[i];
        element.addEventListener('click', () => {
            window.open(url, '_blank');
        });
    }
});

// smoothScroll code

const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

const smoothScroll = (targetId, duration) => {
    let target = document.querySelector(targetId);
    let startPosition = window.pageYOffset;
    let distance = target.getBoundingClientRect().top; // Es la distancia de la esquina superior de la ventana al target
    let startTime = null;


    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;


        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

// to Sections

const toSections = () => {
    //
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        const target = targets[i];

        menuItem.addEventListener('click', () => {
            smoothScroll(target, 2000);
        });
    }
}

toSections();

//TODO: About-Skills


// check and uncheck radio button hide in the skills icons
const checkUncheckRadio = () => {
    let booRadio;
    for (let i = 0; i < skills.length; i++) {
        const element = skills[i];

        element.addEventListener('click', () => {

            if (booRadio == element) {
                element.checked = false;
                booRadio = null;
            } else {
                booRadio = element;
            }


        });
    }
}

checkUncheckRadio();


const showAboutSkills = () => {
    const aboutSkill = document.querySelector('#about-skill');
    const title = aboutSkill.firstElementChild.firstElementChild;
    const icon = title.nextElementSibling;
    const text = icon.nextElementSibling;

    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];

        skill.addEventListener('click', () => {

            if (skill.checked) {
                aboutSkill.style.display = 'block';
                smoothScroll('#about-skill', 2000);
                aboutSkill.style.backgroundColor = SkillThemes[i];
                title.innerHTML = skillsName[i];
                icon.innerHTML = `<i class = "${iconSkill[i][0]}"></i>`;
                icon.className = iconSkill[i][1] + " card-about-icon";
                text.innerHTML = `<p>${aboutSkillText[i]}</p>`
            } else {
                aboutSkill.style.display = 'none';
            }
        });

    }
}

showAboutSkills();



const backToSkills = () => {
    let backToSkillArrow = document.querySelector('#back-to-skills');
    backToSkillArrow.addEventListener('click', () => {
        smoothScroll('#skills', 2000)
    });
}

backToSkills();

let tsaBtn = document.querySelector('#tsa-rm');
tsaBtn.addEventListener('click', () => {
    Swal.fire({
        title: 'The software artisans',
        text: `Under this period on TSA I've developed web solutions used differents tools and I've trained to the new people in TSA. I'm using languages like php, java, 
        javascript, frameworks like reactjs, angular, laravel, about backend tools I've used NodeJS, Socket.io, JWT, Express and the databases are mysql, mongodb. All of sevrer run in docker.`,
        imageUrl: './img/tsa.png',
        imageAlt: 'Custom image',
      })
});
