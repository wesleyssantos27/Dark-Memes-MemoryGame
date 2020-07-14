const cardBoard = document.querySelector("#cardboard");
const images = [
    'planeta.jpg'
];

let cardHTML = '';

images.forEach(img => {
    cardHTML += `
        <div>
            <img src="img/${img}">
            <img src="img/capa1.svg">
        <div>
    `
});

cardBoard.innerHTML = cardHTML;