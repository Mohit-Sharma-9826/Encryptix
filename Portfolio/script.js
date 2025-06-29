function check(idName){

    if(idName != "about"){
        let content = document.querySelector(".content");
        content.style.display = "none";
        document.querySelector(".container").style.height = "6rem";

        document.querySelector("#logo").style.display = "block";

        document.querySelectorAll(".navbar > ul > li").forEach(e => {
            let a = document.getElementsByClassName(`${e.id}`)[0];
            a.classList.remove("active");
            a.classList.add("inactive");
            e.style.backgroundColor = "transparent";
        });
        
        let element = document.getElementsByClassName(`${idName}`)[0];
        element.classList.remove("inactive");
        element.classList.add("active");
    }
    else{
        let content = document.querySelector(".content");
        content.style.display = "flex";
        document.querySelector(".container").style.height = "51vh";

        document.querySelector("#logo").style.display = "none";

        
        document.querySelectorAll(".navbar > ul > li").forEach(e => {
            let a = document.getElementsByClassName(`${e.id}`)[0];
            a.classList.add("active");
            a.classList.remove("inactive");
            e.style.backgroundColor = "transparent";
        });

        let exc = document.getElementsByClassName("exception");
        Array.from(exc).forEach(e=>{
            e.classList.remove("active");
            e.classList.add("inactive");
        })
    }

    document.getElementById(`${idName}`).style.backgroundColor = "#0794ed";

}

let about = document.getElementById("about");
about.style.backgroundColor = "#0794ed";

document.getElementById("resume-block").addEventListener("click", function () {
    let a = document.getElementById("resume-container");

    if(a.style.display != "block"){
        a.style.display = "block";
    }
    else{
        a.style.display = "none";
    }
});