const instrument = "guitar";

console.log(instrument);



const button = document.querySelector("button.login");

console.log(button);


const instruments = [
  {
      type: "guitar",
      colour: "red",
  },
  {
      type: "piano",
      colour: "black",
  },
];


console.table(instruments);


const name = "Percival";
const age = 13;


for (let  i = 0; i <= 5; i++) {
  console.log(i);
}


const firstName = "Florence";

const introduction = ` Hello, my name is` + firstName + ".";

console.log(introduction);




const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome! \n\n` +
                `This`  + title + `is starting today.\n\n`  +
                `Have a` + whatToHave + `!`;

                console.log(welcome);



  const car = {
    "paint-colour": "red",
    "number of wheels": 3
};               
              
console.log(car["paint-colour"] );
console.log(car["number of wheels"] );






const product = {
  name: "Chicken Lips",
  price: 35,
  expired: false,
  getExpired: function myfuc(){
    console.log(" OUt of date" + this. name);
  }
}


product.getExpired()




const heading = document.querySelector("h3")

heading.innerHTML= "hello"


const colour = document.querySelector("h4");
colour.style.background = "pink";
colour.style.color = "blue";


const list = document.querySelector (".service-list");

console.log(list.innerHTML);

list.innerHTML += `<li>elephant</li>
<p>name: monkey</> `;


const lorumChange = document.querySelector(".content")

lorumChange.innerHTML = `<p>My names: cat</p>
                         <p>My Age is : 2 years</p>
                         <p>I am friendly  : false</p>`;

                         const contentParagraphs = document.querySelectorAll(".content p");