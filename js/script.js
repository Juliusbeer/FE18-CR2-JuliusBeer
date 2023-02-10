let display = document.getElementById("results");

let data = JSON.parse(toDos);
console.log(data);

// //Due
// let due= document.getElementsByClassName("duebtn");

// for(i=0;i<data.length;i++){
//     if(data[i].deadline<=Date()){

//     }
// }

// Navbar
let navbar = document.getElementById("navbar");

navbar.innerHTML = ` <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
<div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">MyPlaner</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Tasks</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
            </li>
        </ul>

        <button type="button" class="btn btn-primary duebtn">
                Due <span class="badge text-bg-danger">*</span>
              </button>


    </div>
</div>
</nav>`




//Cards
for (i = 0; i < data.length; i++) {
    if (data[i].priority <= 1) {
        display.innerHTML += `<div class="card mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
    <img src="${data[i].pic}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data[i].task}</h5>
      <p class="card-text">Info: ${data[i].info}</p>
      <hr>
      <span class="card-text prio">Priority: </span><a href="#" class="btn priobtn btn-success"> ${data[i].priority}</a>
      <p class="card-text">Deadline: ${data[i].deadline}</p>
      <hr>
      <a href="#" class="btn btn-success donebtn">Done</a>
      <a href="#" class="btn btn-danger deletebtn">Delete</a>
    </div>
  </div>`;
    }
}






//Prio

let priobtns = document.getElementsByClassName("priobtn");

for (let i = 0; i < priobtns.length; i++) {
    priobtns[i].addEventListener("click", function() {
        data[i].priority++;
        // console.log(people[i].like);
        priobtns[i].innerHTML = data[i].priority;
        if (data[i].priority <= 1) {
            priobtns[i].style.backgroundColor = "green";
        } else if (data[i].priority <= 3) {
            priobtns[i].style.backgroundColor = "yellow";
            priobtns[i].style.color = "black";
        } else {
            priobtns[i].style.backgroundColor = "red";
        }

    })

}

//Done
let donebtns = document.getElementsByClassName("donebtn");
console.log(donebtns);

for (let i = 0; i < donebtns.length; i++) {
    donebtns[i].addEventListener("click", function() {
        document.getElementsByClassName("card")[i].style.opacity = 0.25;
    })
}

//Delete
// let deletebtns = document.getElementsByClassName("deletebtn");
// console.log(deletebtns);

// for (let i = 0; i < donebtns.length; i++) {
//     deletebtns[i].addEventListener("click", function() {
//         document.getElementsByClassName("card")[i].remove();                             I don't knwo right now, how to make it respond to the change of the index..

//         // document.getElementsByClassName("tcolor")[i].style.color = "red";


//     })
// }


//Footer
let footer = document.getElementById("footer");

footer.innerHTML = ` <div class="container pt-4">

<form action="">

    <div class="row d-flex justify-content-center">

        <div class="col-auto">
            <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
            </p>
        </div>

        <div class="col-md-3 col-12">

            <div class="form-outline form-white mb-2">
                <input type="email" id="form5Example21" class="form-control" />
                <label class="form-label" for="form5Example21">Email address</label>
            </div>
        </div>

        <div class="col-auto">

            <button type="submit" class="btn btn-outline-light mb-2">Subscribe</button>
        </div>

    </div>

</form>



</div>

<div class="text-center pb-3 bg-dark">© 2020 Copyright: Julius Beer</div>
`