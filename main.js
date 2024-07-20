document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        Create();
    }
});

document.getElementById("createbtn").addEventListener("click", Create);

function Create() {
    let namef = document.getElementById("newname");
    let name = namef.value;
    let div  = document.createElement("div");
    div.className = "todo";
    const divf = document.getElementById("displayarea");

    let checkbtn = document.createElement("input")
    checkbtn.type = "radio";
    checkbtn.className = "radiod";
    checkbtn.addEventListener("change", function() {
        div.className = "did";
    });
    div.append(checkbtn);

    let texti = document.createElement("p");
    texti.textContent = name;
    texti.className = "txt";
    div.append(texti);

    let time = document.createElement("p");
    let gh = new Date();
    time.textContent = time.textContent = `${gh.getDate()}/${gh.getMonth() + 1}/${gh.getFullYear()}  ${gh.getHours()}:${gh.getMinutes()}`;
    time.className = "time";
    div.append(time);

    let rmbtn = document.createElement("button");
    rmbtn.className = "rmbtn";
    rmbtn.textContent = "Remove";
    rmbtn.addEventListener("click", function(){
        divf.removeChild(div);
    });
    div.append(rmbtn);

    divf.appendChild(div);
}