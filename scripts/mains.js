const pets = [{
    id: 1,
    name: "Chester",
    img: "./images/Card.png"
},
{
    id: 2,
    name: "Papi",
    img: "./images/Card1.png"
},
{
    id: 3,
    name: "Rocky",
    img: "./images/Card2.png"
},
{
    id: 4,
    name: "Pelusa",
    img: "./images/Card3.png"
}, 
{
    id: 5,
    name: "Matilde",
    img: "./images/Card4.png"
},
{
    id: 6,
    name: "Bombon",
    img: "./images/Card5.png"
},
{
    id: 7,
    name: "Kity",
    img: "./images/Card6.png"
},
{
    id: 8,
    name: "Pelusa",
    img: "./images/Card7.png"
}
];

console.log(pets);
const contenedor = document.getElementById("collapseExample");
const contenedor2 = document.getElementById("collapseExample2");
let template = "";
let template2 = "";

pets.forEach ( pets => {
    if (pets.id <= 4){
        template += `
    <img src="${pets.img}" alt="" class="img-fluid">`;
    }else {template2 += `
    <img src="${pets.img}" alt="" class="img-fluid">`
};
});

contenedor.innerHTML = template;
contenedor2.innerHTML = template2;

