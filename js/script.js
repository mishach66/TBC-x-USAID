// ------- COURSES GRID ---------
const courseObjArray = [
  {
    title: "iOS Development",
    status: "რეგისტრაცია დასრულებულია",
    detailurl: "https://www.tbcacademy.ge/usaid/ios-development",
  },
  {
    title: "React",
    status: "რეგისტრაცია დასრულებულია",
    detailurl: "https://www.tbcacademy.ge/usaid/react",
  },
  {
    title: "Intro to Python",
    status: "რეგისტრაცია დასრულებულია",
    detailurl: "https://www.tbcacademy.ge/usaid/python-basic",
  },
  {
    title: "Advanced Python",
    status: "რეგისტრაცია დასრულებულია",
    detailurl: "https://www.tbcacademy.ge/usaid/python-advance",
  },
  {
    title: "Advanced Cybersecurity Course",
    status: "რეგისტრაცია დასრულებულია",
    detailurl: "https://www.tbcacademy.ge/usaid/information-security-advance",
  },
  {
    title: "ToT - Training of Trainers",
    status: "რეგისტრაცია დასრულებულია",
    detailurl: "https://www.tbcacademy.ge/usaid/training-of-trainers",
  },
  {
    title: "Blockchain",
    status: "რეგისტრაცია დასრულებულია",
    detailurl: "https://www.tbcacademy.ge/usaid/blockchain",
  },
  {
    title: "DevOps",
    status: "რეგისტრაცია დასრულებულია",
    detailurl: "https://www.tbcacademy.ge/usaid/devops",
  },
  {
    title: "Information Security Governance",
    status: "რეგისტრაცია დასრულებულია",
    detailurl: "https://www.tbcacademy.ge/usaid/information-security-basic",
  },
]


const courseArray = courseObjArray.reverse()

const dynamic = document.querySelector('.cardscontainer');  
for (let i = 0; i < courseArray.length; i++) {
  const fetch = document.querySelector('.cardscontainer').innerHTML;  
  dynamic.innerHTML = `<div id="cards${i}" class="boxes">
      <div class="box-content">
        <h2>${courseArray[i].title}</h2>
        <h2>${courseArray[i].status}</h2>

        <div class="coursedetails">
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__00000000-0000-0000-0000-000000000003 svg [data-color=""] {fill: #00AEEF;}</style></defs>
          <g>
              <path fill="#ffffff" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
          </g>
        </svg>
        <a href='${courseArray[i].detailurl}'>კურსის დეტალები</a>
        </div>

      </div>
      
    </div>` + fetch; 
    
    const bgimg = document.getElementById(`cards${i}`);
    bgimg.style.backgroundImage = `url('./images/coursescards/${courseArray[i].title}.webp')`;
}


//------- MANUAL & AUTOMATIC SLIDESHOW ----------
let slideIndex = 1;
let timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 3000);
}


//------- QUESTIONS ACCORDION ----------
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accactive");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
