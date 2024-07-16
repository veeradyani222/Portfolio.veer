const about = document.getElementById("about");
const skills=document.getElementById("skills");
const projects=document.getElementById("projects");
const experience=document.getElementById("experience");
const connectNav=document.getElementById("connect");
const resume=document.getElementById("resume");
// above are the DOM for the nav bar elements
const aboutSec=document.querySelector(".aboutSec");
const skillsSec=document.querySelector(".skillsSec");
const projectsSec=document.querySelector(".projectsSec");
const expSec=document.querySelector(".expSec");
const connectBody=document.querySelector(".connect");
const resumeDownload=document.querySelector(".resume");
// above are the DOM for elements in the body



about.addEventListener("click",()=>{
    aboutSec.scrollIntoView({behavior:"smooth"});
})

skills.addEventListener("click",()=>{
    skillsSec.scrollIntoView({behavior:"smooth"});
})

projects.addEventListener("click",()=>{
    projectsSec.scrollIntoView({behavior:"smooth"});
})

experience.addEventListener("click",()=>{
    expSec.scrollIntoView({behavior:"smooth"});
})

connectNav.addEventListener("click",()=>{
    connectBody.scrollIntoView({behavior:"smooth"});
})

resume.addEventListener("click",()=>{
    resumeDownload.scrollIntoView({behavior:"smooth"});
})

