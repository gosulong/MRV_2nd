const button = document.querySelector("#button")
const root = document.querySelector(".root")
const body = document.querySelector("body")
let count = 0;
console.log(button);
button.addEventListener("click", () => { iSpress() })
body.addEventListener("click", (event) => { delElem(event) })
function iSpress() {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<h6 class = "hui">Номер = ${count}</h6>`;
    newDiv.classList.add("root2");
    console.log(newDiv.style);
    root.appendChild(newDiv);
    count++
}
function delElem(params) {
    console.log(params.target.className === "root2");
    if (params.target.className === "root2") {
        const parentElemet = params.target.parentElement;
        console.log (parentElemet);
        parentElemet.removeChild(params.target);
    }
    if (params.target.className === "hui") {
        const kvadrat = params.target.parentElement;
        const div_iz_body_root = kvadrat.parentElement;
        div_iz_body_root.removeChild(kvadrat);
    }
}
