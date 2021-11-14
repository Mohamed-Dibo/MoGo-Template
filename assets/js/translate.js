let arabic;
let english;
fetch("./assets/js/arabic.json")
  .then((response) => response.json())
  .then((json) => (arabic = json));
fetch("./assets/js/english.json")
  .then((response) => response.json())
  .then((json) => (english = json));

let LangBtn = document.getElementById("lang"),
    html = document.querySelector("html"),
    file = document.querySelector("#langFile"),
    navLinks = document.querySelectorAll(".link"),
    learnMoreButton = document.querySelectorAll(".learn-btn"),
    sections = document.querySelectorAll(".Indicators"),
    headerTitle = document.querySelectorAll(".header-title"),
    titleAbout = document.querySelector(".title-About h2"),
    desAbout = document.querySelector(".title-About p"),
    statusText = document.querySelectorAll(".Status .box span"),
    serviceTitle = document.querySelector(".service-title h2"),
    serviceDes = document.querySelectorAll(".service p"),
    uniqueDesignTitle = document.querySelector(".uniqueDesign-title h2"),
    titleWorkshop = document.querySelector(".title-workshop h2"),
    workshopDes = document.querySelector(".title-workshop p"),
    accordion = document.querySelectorAll(".accordion-body"),
    slider = document.querySelectorAll(".content q"),
    sliderName = document.querySelectorAll(".content .name"),
    arrowPrev = document.querySelectorAll(".carousel-control-prev-icon i"),
    arrowNext = document.querySelectorAll(".carousel-control-next-icon i"),
    titleOurWork = document.querySelector(".title-ourWork h2"),
    OurWorkDes = document.querySelector(".title-ourWork p"),
    titleOurTeam = document.querySelector(".title-ourTeam h2"),
    OurTeamDes = document.querySelector(".title-ourTeam p"),
    titleClints = document.querySelector(".title-clints h2"),
    titleBlog = document.querySelector(".blog .title-clints h2"),
    clientsDes = document.querySelectorAll(".info p"),
    blog = document.querySelectorAll(".info-blog h4"),
    blogInfo = document.querySelectorAll(".info-blog"),
    blogDes = document.querySelectorAll(".info-blog p"),
    footerDes = document.querySelector(".footer-des"),
    follow = document.querySelector(".social-icons .title"),
    blogsBox = document.querySelectorAll(".blogs-box p"),
    more = document.querySelector(".more");

LangBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (html.lang === "en") {
    LangBtn.innerHTML = "ar";
    html.lang = "ar";
    html.dir = "rtl";
    file.href = "./assets/style/bootstrap.rtl.min.css";
    // navBar
    navLinks.forEach((element, i) => {
      element.innerHTML = arabic.nav[i];
    });
    //headerTitle
    headerTitle.forEach((element) => {
      element.innerHTML = `<span class="head d-block pt-5 ">
                            مرحبا بك 
                            </span>
                            <span class="d-block pb-3">
                                في موقعي   
                            </span>
                            <span class="d-block pb-3">
                                باللغة العربية  
                            </span>`;
    });
    // learnMore btn
    learnMoreButton.forEach((element) => {
      element.innerHTML = arabic.learnMore;
    });
    let elementsCount = 0;
    // Indicators
    sections.forEach((element) => {
      if (elementsCount >= arabic.sections.length) {
        elementsCount = 0;
      }
      element.innerHTML = arabic.sections[elementsCount];
      elementsCount++;
    });

    // About des
    titleAbout.innerHTML = `  <span>ماذا نفعل</span>
                                قصة عنا`;
    desAbout.innerHTML = arabic.aboutUs;

    // status
    statusText.forEach((element) => {
      if (elementsCount >= arabic.status.length) {
        elementsCount = 0;
      }
      element.innerHTML = arabic.status[elementsCount];
      elementsCount++;
    });

    // service title
    serviceTitle.innerHTML = `<span> نحن نعمل مع </span>
         خدمات مذهلة`;
    //services boxs
    serviceDes.forEach((element) => {
      element.innerHTML = `لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
             أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد`;
    });
    // unique Design Title
    uniqueDesignTitle.innerHTML = `<span> لجميع الاجهزة </span>
      تصميم فريد `;
    // title-workshop
    titleWorkshop.innerHTML = `<span> خدمة </span>
      الذي نفعله `;
    titleOurWork.innerHTML = `<span> خدمة </span>
      الذي نفعله `;
    workshopDes.innerHTML = arabic.aboutUs;
    OurWorkDes.innerHTML = arabic.aboutUs;
    // OurTeam
    titleOurTeam.innerHTML = `<span> من نحن </span>
      أجتمع بفريقنا `;
    OurTeamDes.innerHTML = arabic.aboutUs;
    // titleClints
    titleClints.innerHTML = `<span>عملاء سعداء</span>
    ماذا يقول الناس `;
    titleBlog.innerHTML = `<span> قصصنا </span>
    أحدث مدونة`;
    clientsDes.forEach((element) => {
      element.innerHTML = arabic.clints;
    });
    // Blog
    blogInfo.forEach((element) => {
      element.style.textAlign = "right";
    });
    blog.forEach((element) => {
      element.innerHTML = arabic.blog.title;
    });
    blogDes.forEach((element) => {
      element.innerHTML = arabic.blog.des;
    });
    // accordion
    accordion.forEach((element) => {
      element.innerHTML = arabic.accordion;
    });
    // slider
    slider.forEach((element) => {
      element.innerHTML = arabic.sliderDes;
    });
    sliderName.forEach((element) => {
      element.innerHTML = ` جون دي <i class="fal fa-horizontal-rule"></i>`;
    });

    arrowPrev.forEach((element) => {
      element.classList.remove("fa-chevron-left");
      element.classList.add("fa-chevron-right");
    });
    arrowNext.forEach((element) => {
      element.classList.remove("fa-chevron-right");
      element.classList.add("fa-chevron-left");
    });
    // footer
    footerDes.innerHTML = arabic.footer.footerDes;
    follow.innerHTML = arabic.footer.Follow;
    blogsBox.forEach((element) => {
      element.innerHTML = ` لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج 
        <span>9,يناير,2016</span>`;
    });
    more.innerHTML = arabic.footer.more;
    //// english Moood
  } else {
    LangBtn.innerHTML = "en";
    html.lang = "en";
    html.dir = "ltr";
    file.href = "./assets/style/bootstrap.min.css";
    // navBar
    navLinks.forEach((element, i) => {
      element.innerHTML = english.nav[i];
    });

    let elementsCount = 0;
    //headerTitle
    headerTitle.forEach((element) => {
      element.innerHTML = ` <span class="head">Creative Template</span>
        <span class="d-block">welcome</span>
        to MoGo`;
    });
    // learnMore btn
    learnMoreButton.forEach((element) => {
      element.innerHTML = arabic.learnMore;
    });
    // Indicators
    sections.forEach((element) => {
      if (elementsCount >= english.sections.length) {
        elementsCount = 0;
      }
      element.innerHTML = english.sections[elementsCount];
      elementsCount++;
    });
    // About des
    titleAbout.innerHTML = ` <span>What we do</span>
       Story about us`;
    desAbout.innerHTML = english.aboutUs;
    // status
    statusText.forEach((element) => {
      if (elementsCount >= english.status.length) {
        elementsCount = 0;
      }
      element.innerHTML = english.status[elementsCount];
      elementsCount++;
    });

    // service title
    serviceTitle.innerHTML = `<span>we work with</span>amazing services`;
    // services boxs
    serviceDes.forEach((element) => {
      if (elementsCount >= english.service.length) {
        elementsCount = 0;
      }
      element.innerHTML = english.service[elementsCount];
      elementsCount++;
    });
    // unique Design Title
    uniqueDesignTitle.innerHTML = ` <span>For all devices</span>unique design`;
    // workshop and ourwork
    titleWorkshop.innerHTML = `<span>Service</span>
    WHAT WE DO`;
    workshopDes.innerHTML = english.workshop;
    titleOurWork.innerHTML = `<span>Service</span>
    WHAT WE DO`;
    OurWorkDes.innerHTML = english.workshop;
    // OurTeam
    titleOurTeam.innerHTML = `<span>Who we are</span>
     MEET OUR TEAM `;
    OurTeamDes.innerHTML = english.aboutUs;

    // titleClints
    titleClints.innerHTML = ` <span>Happy Clients</span>
     WHAT PEOPLE SAY `;
    clientsDes.forEach((element) => {
      element.innerHTML = english.clints;
    });
    titleBlog.innerHTML = ` <span>Our stories</span>
    LATEST BLOG`;
    // Blog
    blogInfo.forEach((element) => {
      element.style.textAlign = "left";
    });
    blog.forEach((element) => {
      element.innerHTML = english.blog.title;
    });
    blogDes.forEach((element) => {
      element.innerHTML = english.blog.des;
    });
    // accordion
    accordion.forEach((element) => {
      if (elementsCount >= english.accordion.length) {
        elementsCount = 0;
      }
      element.innerHTML = english.accordion[elementsCount];
      elementsCount++;
    });

    // slider
    slider.forEach((element) => {
      element.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`;
    });
    sliderName.forEach((element) => {
      element.innerHTML = `<i class="fal fa-horizontal-rule"></i>Jon Doe`;
    });
    arrowPrev.forEach((element) => {
      element.classList.remove("fa-chevron-right");
      element.classList.add("fa-chevron-left");
    });
    arrowNext.forEach((element) => {
      element.classList.remove("fa-chevron-left");
      element.classList.add("fa-chevron-right");
    });
    // footer
    footerDes.innerHTML = english.footer.footerDes;
    follow.innerHTML = english.footer.Follow;
    blogsBox.forEach((element) => {
      element.innerHTML = `LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
    <span>Jan 9, 2016</span>`;
    });

    more.innerHTML = english.footer.more;
  }
});
