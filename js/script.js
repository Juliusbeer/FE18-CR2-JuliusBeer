let display = document.getElementById("results");

let data = JSON.parse(toDos);
console.log(data);

//Cards
for (i = 0; i < data.length; i++) {
    display.innerHTML += `<div class="card mb-3" style="width: 18rem;">
    <img src="${data[i].pic}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data[i].task}</h5>
      <p class="card-text">Info: ${data[i].info}</p>
      <hr>
      <span class="card-text prio">Priority: </span><a href="#" class="btn btn-primary priobtn"> ${data[i].priority}</a>
      <p class="card-text">Deadline: ${data[i].deadline}</p>
      <hr>
      <a href="#" class="btn btn-primary donebtn">Done</a>
      <a href="#" class="btn btn-danger deletebtn">Delete</a>
    </div>
  </div>`;
}


//Prio

let priobtns = document.getElementsByClassName("priobtn");

for (let i = 0; i < priobtns.length; i++) {
    priobtns[i].addEventListener("click", function() {
        data[i].priority++;
        // console.log(people[i].like);
        priobtns[i].innerHTML = data[i].priority;

    })

}

//Done
let donebtns = document.getElementsByClassName("donebtn");
console.log(donebtns);

for (let i = 0; i < donebtns.length; i++) {
    donebtns[i].addEventListener("click", function() {
        document.getElementsByClassName("card")[i].style.opacity = 0.25;

        // document.getElementsByClassName("tcolor")[i].style.color = "red";


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