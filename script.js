let projectData=[
    {
     title: "Omadá - Front-End for A Remote working platform",
     text:"Omadá is a platform created to streamline remote work, emphasizing an intuitive and seamless user experience. Developed by me and my team members during a hackathon, Omadá highlights my front-end development skills with features like real-time messaging, project management tools, and integrated video conferencing—all crafted into a sleek, user-friendly interface.",
     pLink:"https://vaidiksule.github.io/hackwave/index.html#",
     gitLink:"https://github.com/Akshatthakur22/hackwave",
    },

    {
     title: "stur: Front-End for An OTT Platform",
     text:"Stur is a cutting-edge front-end solution for OTT platforms, designed to deliver an exceptional user experience. Developed with meticulous attention to detail, Stur highlights my skills in HTML and CSS, providing a seamless and visually appealing interface. From intuitive navigation to responsive design, Stur ensures that users can effortlessly browse and enjoy their favorite content. Experience the perfect blend of functionality and aesthetics with Stur, where top-tier front-end development meets the demands of modern OTT platforms.",
     pLink:"https://veeradyani222.github.io/stur.veer/",
     gitLink:"https://github.com/veeradyani222/stur.veer",
    },
    {
        title: "quiz.v",
     text:"Quiz.V is a sophisticated online quiz platform designed to provide an engaging and interactive user experience. Developed entirely by me, Quiz.V showcases my expertise in HTML, CSS, and JavaScript. The platform features a wide range of quizzes on various topics, instant scoring, and decision-based quizzes that adapt to user responses.Experience the future of online quizzes with Quiz.V, where advanced front-end development and dynamic interactivity come together to create a seamless and enjoyable user experience.",
     pLink:" https://veeradyani222.github.io/quiz.vv/",
     gitLink:"https://github.com/veeradyani222/quiz.vvt",

    },
    {
        title: "My Portfolio",
        text:"My portfolio is a reflection of my journey as a developer, built using HTML, CSS, and JavaScript. It highlights my skills, projects, and achievements while providing a visually appealing and user-friendly interface. Each section is crafted to showcase my expertise and creativity, making it easy for visitors to explore my work.",
        pLink:"#",
        gitLink:"https://github.com/veeradyani222/Portfolio.veer",


    }
]
const projectHead = document.querySelector(".projectHead");
const projectText = document.querySelector(".projectText");
const pLink= document.querySelector(".pLink");
const gitLink= document.querySelector(".gitLink");
const nextProject= document.querySelector(".nextProject");
const prevProject= document.querySelector(".prevProject");
console.log(projectHead)

let i=0;
let a= projectData.length;

const loadData=()=>{
    projectHead.innerHTML=  projectData[i].title;
    projectText.innerHTML=projectData[i].text;
    gitLink.innerHTML= `<a href="${projectData[i].gitLink}" target="_blank" > View The Code </a>`
    pLink.innerHTML = `<a href="${projectData[i].pLink}" target="_blank"> View The Project</a>`;
}

nextProject.addEventListener("click", ()=>{
    if(i<=projectData.length-1){
        i++;
        loadData();

    }
});

prevProject.addEventListener("click", ()=>{
    
        i--;
        loadData();

    
})

loadData()








