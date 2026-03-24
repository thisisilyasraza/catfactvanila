let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
let h3 = document.querySelector("h3");

//Fact Logic

let getFact = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      h3.innerText = data.fact;
    })
    .catch((error) => {
      console.log(error);
    });
};


getFact();

// Button Click
btn.addEventListener("click", getFact);
