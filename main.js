let togglenavstatus = false;

let togglenav= function() {
    let getsidebar = document.querySelector(".nav-sidebar");
    let getsidebarul = document.querySelector(".nav-sidebar ul");
    let getsidebartitle = document.querySelector(".nav-sidebar span");
    let getsidebarlinks = document.querySelectorAll(".nav-sidebar a");


if (togglenavstatus === false) {
    getsidebarul.style.visibility = "visible";
    getsidebar.style.width = "272px";
    getsidebartitle.style.opacity = "0.5";

    let arraylength = getsidebarlinks.length;
    for (let i=0; i < arraylength; i++) {
        getgetsidebarlinks[i].style.opacity = "1";
    }
    togglenavstatus = true;

}
else if (togglenavstatus === true) {
   
    getsidebar.style.width = "50px";
    getsidebartitle.style.opacity = "0";

    let arraylength = getsidebarlinks.length;
    for (let i=0; i < arraylength; i++) {
        getgetsidebarlinks[i].style.opacity = "0";
    }
    getsidebarul.style.visibility = "hidden";
    togglenavstatus = false;
}
}