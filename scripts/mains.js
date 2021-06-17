const pets = [{
    id: 1,
    name: "Chester",
    race: "Golden retriever",
    img: "./images/Card.png",
    description: "Chester es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la person indicada."
},
{
    id: 2,
    name: "Papi",
    race: "Chihuahua",
    img: "./images/Card1.png",
    description: "Papi es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la person indicada."
},
{
    id: 3,
    name: "Rocky",
    race: "Rottweiler",
    img: "./images/Card2.png",
    description: "Rocky es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la person indicada."
},
{
    id: 4,
    name: "Pelusa",
    race: "Bichón frisé",
    img: "./images/Card3.png",
    description: "Pelusa es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la person indicada."
}, 
{
    id: 5,
    name: "Matilde",
    race: "British Shorthair",
    img: "./images/Card4.png",
    description: "Matilde es la mejor guarda espaldas, siempre esta hay para conversar y recibirá cada día con un fuerte cariño. Fue rescatada y busco una persona que le pueda dar todo el amor que ella necesita."
},
{
    id: 6,
    name: "Bombon",
    race: "Birmano",
    img: "./images/Card5.png",
    description: "Bombon es la mejor guarda espaldas, siempre esta hay para conversar y recibirá cada día con un fuerte cariño. Fue rescatada y busco una persona que le pueda dar todo el amor que ella necesita."
},
{
    id: 7,
    name: "Kity",
    race: "Bombay",
    img: "./images/Card6.png",
    description: "Kity es la mejor guarda espaldas, siempre esta hay para conversar y recibirá cada día con un fuerte cariño. Fue rescatada y busco una persona que le pueda dar todo el amor que ella necesita."
},
{
    id: 8,
    name: "Pelusa",
    race: "Gato americano",
    img: "./images/Card7.png",
    description: "Pelusa es la mejor guarda espaldas, siempre esta hay para conversar y recibirá cada día con un fuerte cariño. Fue rescatada y busco una persona que le pueda dar todo el amor que ella necesita."
}
];
//console.log(pets);
const contenedor = document.getElementById("collapseExample");
const contenedor2 = document.getElementById("collapseExample2");
const contendorMascotas = document.getElementById("contenedorMascotas");
let template = "";
let template2 = "";
let favoritos = {};
pets.forEach ( pets => {
    if (pets.id <= 4){
        template += `
    <img src="${pets.img}" id=${pets.id} alt="" class="img-fluid">`;
    }else {template2 += `
    <img src="${pets.img}" id=${pets.id} alt="" class="img-fluid">`
};
});

contenedor.innerHTML = template;
contenedor2.innerHTML = template2;

const imagen = document.querySelectorAll('.img-fluid');

imagen.forEach ( elemento => {
    elemento.addEventListener('click', (e) => {
        let id = e.target.id
        //console.log(id);
        consultarPorId(id);
        onClickPets(e);
})
})

const consultarPorId = (id) => {
    const idNumber = parseInt(id);
    const [filtro] = pets.filter((element) => element.id === idNumber);
    //console.log(filtro);
    setFavoritos(filtro);
}

const onClickPets = (e) => {
    let idPets = '';
    if (e.target.getAttribute('id')) {
        idPets = e.target.getAttribute('id');
    }else {
        idPets = e.target.parentElement.getAttribute('id');
    }

    window.location.href = `?idMascota=${idPets}`;
}

const setFavoritos = (data) => {
   // console.log(data)
    const Mascota = {
          id: data.id,
          imagen: data.img
   }
   
    pintarFavoritos()   
}
 
const pintarFavoritos = () => {
    let items = "";
    Mascota.forEach ( Mascota => {
        items += `
        <img src="${Mascota.img}"  alt="${Mascota.id}" class="img-fluid">`
    })

    contendorMascotas.innerHTML = items
} 
