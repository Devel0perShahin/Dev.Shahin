//PORTFOLIO HOVER EFFECT
function Portfolio_hover() {
    let Iframe_arr = document.querySelectorAll("#Portfolio .Col");
    Iframe_arr = Array.from(Iframe_arr);
    let Detail_arr = document.querySelectorAll("#Portfolio .Detail_of_img");
    Iframe_arr.forEach((Element) => {
        Element.addEventListener("mouseover", () => {
            // console.log("mouseover success");
            let Index = Iframe_arr.indexOf(Element);
            // console.log(Index);
            Detail_arr[Index].style.cssText = "z-index:3;left:0;bottom:-29%";
        })
        Element.addEventListener("mouseout", () => {
            // console.log("mouseout success");
            let Index = Iframe_arr.indexOf(Element);
            // console.log(Index);
            Detail_arr[Index].style.cssText = "z-index:1;bottom:0;";
        })
    })
}
Portfolio_hover()

//STICKY NAV ACTIVE
function Sticky_nav_Btn_change() {
    let Hiro_btn_offset = document.querySelector(".Hero_btn").offsetTop;
    let Nav = document.querySelector("section#Nav");
    window.addEventListener("scroll", (e) => {
        let Hiro_btn = document.querySelector(".Hero_btn");
        let Hero_height = document.querySelector("section#Hero").scrollHeight;
        let Body_height = document.querySelector("body").scrollHeight - (window.innerHeight);
        if (window.scrollY >= Nav.scrollHeight) {
            Nav.classList.add("Pre_active");
            // console.log(Nav.scrollHeight)
            // Hiro_btn.classList.add("Pre_active");
        } else {
            Nav.classList.remove("Pre_active");
            // Hiro_btn.classList.remove("Pre_active");
        }
        if (window.scrollY >= Hero_height) {
            Nav.classList.add("Active");
            // Hiro_btn.innerText = `HE`;
            // Hiro_btn.classList.add("Active");
        } else {
            Nav.classList.remove("Active")
            // Hiro_btn.innerText = `Hire Me`;
            // Hiro_btn.classList.remove("Active");
        }
        if (window.scrollY > (Hiro_btn_offset)) {
            // console.log("hello");
            Hiro_btn.classList.add("Pre_active");
            Hiro_btn.innerHTML = `Hire <br/> me`;
        } else {
            Hiro_btn.classList.remove("Pre_active");
            Hiro_btn.innerText = `Hire me`;
        }

        if (window.scrollY > Hiro_btn_offset) {
            // console.log("hello");
            Hiro_btn.classList.add("Active");
            if (window.scrollY == Body_height) {
                // console.log("hello");
                Hiro_btn.style.cssText = `transform: translate(0%, 100%)`;
            } else {
                Hiro_btn.style.cssText = `transform: translate(-120%, -165%)`;
            }
        } else {
            Hiro_btn.classList.remove("Active");
            Hiro_btn.style.cssText = `transform: translate(-0, -0)`;
        }
    })
}
Sticky_nav_Btn_change()

function Hembarger_click() {
    let Hembarger = document.querySelector(".Hembarger");
    let Nav_items = document.querySelector(".Nav_items");
    let Li_arr = document.querySelectorAll("ui.Nav_items li")
    let Html = document.querySelector("html");
    let Hembarger_click = false;

    function Hembargar_click_func() {
        if (Hembarger_click == false) {
            Nav_items.classList.add("Active");
            Hembarger.classList.add("Active");
            // Html.style.overflow = 'hidden';
            Hembarger_click = true;
        } else {
            Nav_items.classList.remove("Active");
            Hembarger.classList.remove("Active");
            // Html.style.overflow = 'auto';
            Hembarger_click = false;
        }

    }

    Nav_items.addEventListener("click", Hembargar_click_func)
    Hembarger.addEventListener("click", Hembargar_click_func)
}
Hembarger_click()

function Auto_detect_iframes_hei() {
    let Portfolio = document.querySelector("#Portfolio")
    let Cols_hei = document.querySelector("#Portfolio .Cols").scrollHeight;

    Portfolio.style.cssText = `min-height:${Cols_hei + 350}px;`;
}
Auto_detect_iframes_hei();

function Auto_detect_Services_hei() {
    let Services_area = document.querySelector("#Services");
    let Cols_hei = document.querySelector("#Services .Cols").scrollHeight;
    // console.log(Cols_hei);
    Services_area.style.cssText = `min-height:${Cols_hei + 250}px;`;

}
Auto_detect_Services_hei()

function Auto_detect_Highlight_hei() {
    let Highlight_area = document.querySelector("#Highlight");
    let Rows_hei = document.querySelector("#Highlight .Rows").scrollHeight;
    // console.log(Cols_hei);
    Highlight_area.style.cssText = `min-height:${Rows_hei + 250}px;`;

}
Auto_detect_Highlight_hei()

//AUTO DECECT AREA
window.addEventListener("scroll", function () {

    let Top = window.scrollY;

    function Active_area(ST_area, EN_area, Active_li) {

        if (Top >= ST_area & Top < EN_area) {
            Active_li.classList.add("Active");
        } else {
            Active_li.classList.remove("Active");
        }
    }

    let List_items = document.querySelectorAll("nav li a");
    let About = document.querySelector("#About_me").offsetTop - 200;
    let Highlight = document.querySelector("#Highlight").offsetTop - 200;
    let Portfolio = document.querySelector("#Portfolio").offsetTop - 200;
    let Services = document.querySelector("#Services").offsetTop - 200;
    let Packages = document.querySelector("#Packages").offsetTop - 200;
    let Contact = document.querySelector("#Contact").offsetTop - 200;
    let Footer = document.querySelector("#Footer").offsetTop;

    // CALLING "ACTIVE AREA" FUNCTIONS
    Active_area(About, Highlight, List_items[0]);
    Active_area(Highlight, Portfolio, List_items[1]);
    Active_area(Portfolio, Services, List_items[2]);
    Active_area(Services, Packages, List_items[3]);
    Active_area(Packages, Contact, List_items[4]);
    Active_area(Contact, Footer, List_items[5]);
});