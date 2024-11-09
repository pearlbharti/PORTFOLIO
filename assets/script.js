$("#KoiStart").on("loadeddata", function() {
    document.querySelector(".header-text").style.WebkitAnimationPlayState = "running";
    /*$("#KoiStart").bind("ended", function() {
    	$("#KoiCycle").css("visibility","visible");
        $("#KoiCycle").play();
    });*/

});

//$("#KoiStart").defaultPlaybackRate = 0.5;

var timer = 0;
var num = 150;
var selectedhome = $("#nav-home");
var selectedcase = $("#nav-case");
var selectedcontact = $("#nav-contact");

function caseActive() {
    selectedhome.removeClass("active");
    selectedcontact.removeClass("active");
    selectedcase.addClass("active");
}

function contactActive() {
    selectedcase.removeClass("active");
    selectedhome.removeClass("active");
    selectedcontact.addClass("active");
}

function homeActive() {
    selectedcase.removeClass("active");
    selectedcontact.removeClass("active");
    selectedhome.addClass("active");
}

$(window).bind('scroll', scrollWindowBind);

function scrollBind() {
    $(window).delay(800).bind('scroll', scrollWindowBind);
}

function scrollWindowBind() {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('scrolled');
        console.log("scroll working");
    } else {
        $('.menu').removeClass('scrolled');
    };

    if (($(window).scrollTop() + $(window).height()) > ($(document).height() - 200)) {
        contactActive();
    } else if ($(window).scrollTop() > (window.innerHeight - 100)) {
        caseActive();
    } else {
        homeActive();
    };
}

function smoothScroll(hash) {
    $(window).unbind('scroll');
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function() {
        window.location.hash = hash;
    });
    setTimeout(scrollBind, 800);
};

$(document).ready(function() {
    // Add smooth scrolling to all links
    if (window.location.href !== "index.html" || window.location.href !== "/") {
        $(".NI").on('click', function(event) {
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                smoothScroll(hash);
            } // End if
        });

        selectedhome.on('click', function(event) {
            homeActive();
        });

        selectedcase.on('click', function(event) {
            caseActive();
        });

        selectedcontact.on('click', function(event) {
            contactActive();
        });

    } else {
        homeActive();
    }

});

//PROJECT RENDERING

var numProjShown = 4;
var numProjTotal = 6;

var projects = {
    "proj0": {
        "title": "Schneider National",
        "projName": "Freight Search Engine Redesign",
        "desc": "Redesigning & developing Schneider's freight search engine to streamline the search process, improve usability with multi-capacity selection, ensure above-the-fold search options, & enable mileage-based results for enhanced user experience.",
        "link": "schneider.html",
        "picture": "schneider hero video.mp4",
    },
    "proj1": {
        "title": "Rec Well, UW-Madison ",
        "projName": "Critical break-points redesign",
        "desc": "User research study and initial redesign proposal for Recreation and Wellbeing at UW-Madison, focused on identifying pain points and recommending improvements in key areas of the website. Implementation planned for the next fiscal year.",
        "link":"recwell.html",
        "picture": "recwell.png",
    },
    "proj2": {
        "title": "BoxMate",
        "projName": "Website Revamp ",
        "desc": "Designing an web application for a start-up to simplify and streamline the payments page and booking a storage location as well as added features based on user insights.",
        "link": "boxmate.html",
        "picture": "assets/smarttagger-prev.jpg",
    },
    "proj3": {
        "title": "Upshift Swap Shop",
        "projName": "eco store's design",
        "desc": "Designing an app for Madison's sole sustainable swap shop to minimize garment waste aimed at incentivizing users with loyalty points, offer customizable and affordable gifting hampers, enable online shopping, and establishing a distinctive brand identity and voice.",
        "link": "Upshift.html",
        "picture": "assets/upshift.jpg",
    },
    "proj4": {
        "title": "Spotify",
        "projName": "User Research",
        "desc": "Spotify's user research study to understand pain-points and propose potential solutions.",
        "link": "Spotify.html",
        "picture": "C:\Users\Pearl\Desktop\PEARLPORTFOLIO\assets\spothero.jpg",
    },
    "proj5": {
        "title": "Wisconsin Department of Natural Resources",
        "projName": "Hatchful CMS",
        "desc": "Conducting a usability study for Wisconsin Department of Natiral Resources.",
        "link": "hatchful-cms.html",
        "picture": "assets/cms-prev.jpg",
    },
   
}

function createProj(proj) {
    let title = projects[proj].title;
    let projName = projects[proj].projName;
    let desc = projects[proj].desc;
    let link = projects[proj].link;
    let picture = projects[proj].picture;

    var HTMLproj = `<div class='projItem ui two column grid' id="${proj}"><div class='column studyCard'><div class='studyHeader'>${title}</div><div class='studyTitle'>${projName}</div><div class='studyDesc'>${desc}</div><a class='seeMore' href="${link}">Learn more >></a></div><div class='column image-box'><a href="${link}"><img class='prev-img' src="${picture}"/></a><a class='proj-arrow' href="${link}"><img class="navigationArrow" src="assets/arrow-right_2@3x.png"></a></div></div>`

    var landingStudies = document.querySelector("#landingStudies");
    landingStudies.innerHTML += HTMLproj;
}

function deleteProj(proj) {
    $("#" + proj).remove();
}

function showHide() {
    let projItems = document.querySelectorAll(".projItem");
    let numProjItems = projItems.length;
    if (numProjItems < numProjShown + 1) {
        for (let x = numProjShown; x < numProjTotal; x++) {
            let proj = "proj" + x;
            createProj(proj);
        }
        moreProjects.innerHTML = "show less";
    } else {
        for (let x = numProjShown; x < numProjTotal; x++) {
            let proj = "proj" + x;
            deleteProj(proj);
        }
        moreProjects.innerHTML = "view more";
    }
}

for (let x = 0; x < numProjShown; x++) {
    let proj = "proj" + x;
    createProj(proj);
}

var moreProjects = document.querySelector("#moreProjects");
moreProjects.addEventListener('click', showHide);