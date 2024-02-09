filterObjects("all");

function filterObjects(c) {
    var x, i;

    x = document.getElementsByClassName("card");

    if (c == "all") {
        c = "";
    }

    console.log("Filtering by class:", c);

    for (i = 0; i < x.length; i++) {
        console.log("Current element classes:", x[i].className);

        if (c === "") {
            addClass(x[i], "show");
        } else {
            if (x[i].classList.contains(c)) {
                addClass(x[i], "show");
            } else {
                removeClass(x[i], "show");
            }
        }
    }
}

function toggleClass(element, name) {
    if (element.classList.contains(name)) {
        removeClass(element, name);
    } else {
        addClass(element, name);
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            if (element.className !== "") {
                element.className += " ";
            }
            element.className += arr2[i];
        }
    }
}


function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for(i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
} 
