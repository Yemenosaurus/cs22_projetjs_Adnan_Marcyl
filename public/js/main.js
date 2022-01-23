// ## SECTION PRODUCTS
let sectionProducts = document.getElementById('sectionProducts');

let divCont = document.createElement('div');
divCont.classList = "container-fluid";
sectionProducts.appendChild(divCont);

let divFlex = document.createElement('div');
divFlex.classList = "d-flex flex-column justify-content-center align-items-center text-center mx-1 p-5";
divCont.appendChild(divFlex);

let h4 = document.createElement('h4');
h4.textContent = "Recents Products";
let p = document.createElement('p');
p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, minima iusto.";
divFlex.appendChild(h4);
divFlex.appendChild(p);

let divLigneImg = document.createElement('div');
divLigneImg.classList = "ligneImgUne col-12 d-flex flex-row justify-content-around align-items-center my-5";
divFlex.appendChild(divLigneImg);

let imgLigneUne1 = document.createElement('div');
imgLigneUne1.classList = "d-flex flex-column text-center";
let imgLigneUne2 = document.createElement('div');
imgLigneUne2.classList = "d-flex flex-column text-center";
let imgLigneUne3 = document.createElement('div');
imgLigneUne3.classList = "d-flex flex-column text-center";
let imgLigneUne4 = document.createElement('div');
imgLigneUne4.classList = "d-flex flex-column text-center";
let imgLigneUne5 = document.createElement('div');
imgLigneUne5.classList = "d-flex flex-column text-center";
divLigneImg.appendChild(imgLigneUne1);
divLigneImg.appendChild(imgLigneUne2);
divLigneImg.appendChild(imgLigneUne3);
divLigneImg.appendChild(imgLigneUne4);
divLigneImg.appendChild(imgLigneUne5);

// ## OBJETS IMAGES
let images = [
    // LIGNE 1
    {
        nom: "Textured Sweater",
        prix: "$50.00",
        source: '../../public/img/fashion/fashion-recent-products-01-1-1.jpg',
        sourceHover : '../../public/img/fashion/fashion-recent-products-01-a-1-1.jpg'
    },
    {
        nom: "Traveller Shirt",
        prix: "$510.00",
        source: '../../public/img/fashion/fashion-recent-products-02-1-1.jpg'
    },
    {
        nom: "Crewneck Sweatshirt",
        prix: "$20.00 - $50.00" ,
        source: '../../public/img/fashion/fashion-recent-products-01-b.jpg'
    },
    {
        nom: "Skinny Trousers",
        prix: "$160.00",
        source: '../../public/img/fashion/fashion-recent-products-04.jpg'
    },
    {
        nom: "High Neck Sweater",
        prix: "$35.00",
        source: '../../public/img/fashion/fashion-recent-products-05-1.jpg'
    },
    // LIGNE 2
    {
        nom: "Sleeve Sweater",
        prix: "$120.00",
        source: '../../public/img/fashion/fashion-recent-products-06-1.jpg'
    },
    {
        nom: "Pocket Sweatshirt",
        prix: "$410.00",
        source: '../../public/img/fashion/fashion-recent-products-07-1.jpg'
    },
    {
        nom: "Top With Pleated",
        prix: "$20.00 - $50.00",
        source: '../../public/img/fashion/fashion-recent-products-08-1.jpg'
    },
    {
        nom: "Cotton Sweater",
        prix: "$155.00",
        source: '../../public/img/fashion/fashion-recent-products-01-d.jpg'
    },
    {
        nom: "Texture Plain Regular",
        prix: "$70.00",
        source: '../../public/img/fashion/fashion-recent-products-10-1.jpg'
    },
]

let img11 = document.createElement('img');
let img12 = document.createElement('img');
let img13 = document.createElement('img');
let img14 = document.createElement('img');
let img15 = document.createElement('img');


img11.src = images[0].source;
img11.classList = "px-1";
img11.setAttribute('width', '100%')
img12.src = images[1].source
img12.classList = "px-1";
img12.setAttribute('width', '100%')
img13.src = images[2].source
img13.classList = "px-1";
img13.setAttribute('width', '100%')
img14.src = images[3].source
img14.classList = "px-1";
img14.setAttribute('width', '100%')
img15.src = images[4].source
img15.classList = "px-1";
img15.setAttribute('width', '100%')

imgLigneUne1.appendChild(img11);
imgLigneUne2.appendChild(img12);
imgLigneUne3.appendChild(img13);
imgLigneUne4.appendChild(img14);
imgLigneUne5.appendChild(img15);

let h611 = document.createElement('h6');
h611.textContent = images[0].nom;
h611.classList = "mt-4"
imgLigneUne1.appendChild(h611);
let p611 = document.createElement('p');
p611.textContent = images[0].prix;
p611.classList = "mt-n1"
imgLigneUne1.appendChild(p611);
let h612 = document.createElement('h6');
h612.textContent = images[1].nom;
h612.classList = "mt-4"
imgLigneUne2.appendChild(h612);
let p612 = document.createElement('p');
p612.textContent = images[1].prix;
p612.classList = "mt-n1"
imgLigneUne2.appendChild(p612);
let h613 = document.createElement('h6');
h613.textContent = images[2].nom;
h613.classList = "mt-4"
imgLigneUne3.appendChild(h613);
let p613 = document.createElement('p');
p613.textContent = images[2].prix;
p613.classList = "mt-n1"
imgLigneUne3.appendChild(p613);
let h614 = document.createElement('h6');
h614.textContent = images[3].nom;
h614.classList = "mt-4"
imgLigneUne4.appendChild(h614);
let p614 = document.createElement('p');
p614.textContent = images[3].prix;
p614.classList = "mt-n1"
imgLigneUne4.appendChild(p614);
let h615 = document.createElement('h6');
h615.textContent = images[4].nom;
h615.classList = "mt-4"
imgLigneUne5.appendChild(h615);
let p615 = document.createElement('p');
p615.textContent = images[4].prix;
p615.classList = "mt-n1"
imgLigneUne5.appendChild(p615);

let divLigneImg2 = document.createElement('div');
divLigneImg2.classList = "ligneImgUne col-12 d-flex flex-row justify-content-around align-items-center my-3";
divFlex.appendChild(divLigneImg2);

let imgLigneDeux1 = document.createElement('div');
let imgLigneDeux2 = document.createElement('div');
let imgLigneDeux3 = document.createElement('div');
let imgLigneDeux4 = document.createElement('div');
let imgLigneDeux5 = document.createElement('div');
divLigneImg2.appendChild(imgLigneDeux1);
divLigneImg2.appendChild(imgLigneDeux2);
divLigneImg2.appendChild(imgLigneDeux3);
divLigneImg2.appendChild(imgLigneDeux4);
divLigneImg2.appendChild(imgLigneDeux5);

let img21 = document.createElement('img');
let img22 = document.createElement('img');
let img23 = document.createElement('img');
let img24 = document.createElement('img');
let img25 = document.createElement('img');
img21.src = images[5].source
img21.classList = "px-1";
img21.setAttribute('width', '100%')
img22.src = images[6].source
img22.classList = "px-1";
img22.setAttribute('width', '100%')
img23.src = images[7].source
img23.classList = "px-1";
img23.setAttribute('width', '100%')
img24.src = images[8].source
img24.classList = "px-1";
img24.setAttribute('width', '100%')
img25.src = images[9].source
img25.classList = "px-1";
img25.setAttribute('width', '100%')
imgLigneDeux1.appendChild(img21);
imgLigneDeux2.appendChild(img22);
imgLigneDeux3.appendChild(img23);
imgLigneDeux4.appendChild(img24);
imgLigneDeux5.appendChild(img25);

let h621 = document.createElement('h6');
h621.textContent = images[5].nom;
h621.classList = "mt-4"
imgLigneDeux1.appendChild(h621);
let p621 = document.createElement('p');
p621.textContent = images[5].prix;
p621.classList = "mt-n1"
imgLigneDeux1.appendChild(p621);
let h622 = document.createElement('h6');
h622.textContent = images[6].nom;
h622.classList = "mt-4"
imgLigneDeux2.appendChild(h622);
let p622 = document.createElement('p');
p622.textContent = images[6].prix;
p622.classList = "mt-n1"
imgLigneDeux2.appendChild(p622);
let h623 = document.createElement('h6');
h623.textContent = images[7].nom;
h623.classList = "mt-4"
imgLigneDeux3.appendChild(h623);
let p623 = document.createElement('p');
p623.textContent = images[7].prix;
p623.classList = "mt-n1"
imgLigneDeux3.appendChild(p623);
let h624 = document.createElement('h6');
h624.textContent = images[8].nom;
h624.classList = "mt-4"
imgLigneDeux4.appendChild(h624);
let p624 = document.createElement('p');
p624.textContent = images[8].prix;
p624.classList = "mt-n1"
imgLigneDeux4.appendChild(p624);
let h625 = document.createElement('h6');
h625.textContent = images[9].nom;
h625.classList = "mt-4"
imgLigneDeux5.appendChild(h625);
let p625 = document.createElement('p');
p625.textContent = images[9].prix;
p625.classList = "mt-n1"
imgLigneDeux5.appendChild(p625);


// ## SOLDES
let carreVert1 = document.createElement('div');
carreVert1.textContent = "-12%";
carreVert1.style.position = "absolute";
carreVert1.style.marginLeft = "15px";
carreVert1.style.marginTop = "15px";
carreVert1.style.color = "white";
carreVert1.style.zIndex = "2";
carreVert1.style.width = "40px";
carreVert1.style.backgroundColor = "green";
carreVert1.style.border = "1px solid white";
imgLigneUne5.appendChild(carreVert1);

let carreVert2 = document.createElement('div');
carreVert2.textContent = "-14%";
carreVert2.style.color = "white";
carreVert2.style.zIndex = "2";
carreVert2.style.width = "40px";
carreVert2.style.backgroundColor = "green";
carreVert2.style.position = "absolute";
carreVert2.style.marginLeft = "15px";
carreVert2.style.marginTop = "15px";
carreVert2.style.border = "1px solid white";
imgLigneDeux1.insertBefore(carreVert2, img21);

let carreVert3 = document.createElement('div');
carreVert3.textContent = "-14%";
carreVert3.style.color = "white";
carreVert3.style.zIndex = "2";
carreVert3.style.width = "40px";
carreVert3.style.backgroundColor = "green";
carreVert3.style.position = "absolute";
carreVert3.style.marginLeft = "15px";
carreVert3.style.marginTop = "15px";
carreVert3.style.border = "1px solid white";
imgLigneDeux4.insertBefore(carreVert3, img24);

let carreVert4 = document.createElement('div');
carreVert4.textContent = "-14%";
carreVert4.style.color = "white";
carreVert4.style.zIndex = "2";
carreVert4.style.width = "40px";
carreVert4.style.backgroundColor = "green";
carreVert4.style.position = "absolute";
carreVert4.style.marginLeft = "15px";
carreVert4.style.marginTop = "15px";
carreVert4.style.border = "1px solid white";
imgLigneDeux5.insertBefore(carreVert4, img25);



// ## EVENT
imgLigneUne1.addEventListener('mouseup', (event) => {
    img11.src = images[0].sourceHover;
})






// // ## SECTION TESTIMONIALS
let carouselInner = document.getElementsByClassName('carousel-inner')[0];
// ## CREATION BOUTONS
let btnPrev = document.createElement('button');
btnPrev.classList = "carousel-control-prev";
btnPrev.setAttribute('data-bs-target', '#carouselExampleControls');
btnPrev.setAttribute('data-bs-slide', 'prev');

let btnPrevSpan1 = document.createElement('span');
btnPrevSpan1.classList = "carousel-control-prev-icon";
btnPrevSpan1.setAttribute('aria-hidden', 'true');
let btnPrevSpan2 = document.createElement('span');
btnPrevSpan2.classList = "visually-hidden";
btnPrevSpan2.textContent = "Previous";

carouselInner.appendChild(btnPrev);
btnPrev.appendChild(btnPrevSpan1);
btnPrev.appendChild(btnPrevSpan2);


let btnNext = document.createElement('button');
btnNext.classList = "carousel-control-next";
btnNext.setAttribute('data-bs-target', '#carouselExampleControls');
btnNext.setAttribute('data-bs-slide', 'next');

let btnNextSpan1 = document.createElement('span');
btnNextSpan1.classList = "carousel-control-next-icon";
btnNextSpan1.setAttribute('aria-hidden', 'true');
let btnNextSpan2 = document.createElement('span');
btnNextSpan2.classList = "visually-hidden";
btnNextSpan2.textContent = "Next";

carouselInner.appendChild(btnNext);
btnNext.appendChild(btnNextSpan1);
btnNext.appendChild(btnNextSpan2);

// ## EVENTS
// VOIR FEUILLE CAHIER





















// let sectionTesti = document.getElementsByClassName('sectionTestimonials')[0];
// sectionTesti.style.backgroundColor = "rgb(245,235,223)"

// let divCont2 = document.createElement('div');
// divCont2.classList = "container-fluid";
// sectionTesti.appendChild(divCont2);

// let divTesti = document.createElement('div');
// divTesti.classList = "d-flex flex-column justify-content-center align-items-center p-5";
// divCont2.appendChild(divTesti);

// let h4Testi = document.createElement('h4');
// h4Testi.textContent = "Testimonial";
// divTesti.appendChild(h4Testi);
// let pTesti = document.createElement('p');
// pTesti.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eaque sequi repellat!";
// divTesti.appendChild(pTesti);

// let colTesti = document.createElement('div');
// colTesti.classList = "col-12 p-5";
// divTesti.appendChild(colTesti);

// let divCarousel = document.createElement('div');
// divCarousel.classList = "carousel slide";
// divCarousel.setAttribute.id = "carouselExampleControls"
// divCarousel.setAttribute('data-bs-ride', 'carousel')
// colTesti.appendChild(divCarousel);

// let divCarouselInner = document.createElement('div');
// divCarouselInner.classList = "carousel-inner d-flex flex-row text-center justify-content-center align-items-center";
// divCarousel.appendChild(divCarouselInner);

// // ITEM ACTIVE
// let divCarouselItemActive = document.createElement('div');
// divCarouselItemActive.classList = "carousel-item active";
// divCarouselInner.appendChild(divCarouselItemActive);

// let row = document.createElement('row');
// row.classList = "row";
// divCarouselItemActive.appendChild(row);



// // ACTIVE - COL 4 (1)
// let col41 = document.createElement('div');
// col41.classList = "col-4";
// row.appendChild(col41);

// let card = document.createElement('div');
// card.classList = "card p-3";
// col41.appendChild(card);

// let divFormeMsg = document.createElement('div');
// divFormeMsg.style.backgroundColor = "#fffffff5";
// divFormeMsg.classList = "divFormeMsg fs-7 mb-3";
// divFormeMsg.style.alignContent = "center"
// card.appendChild(divFormeMsg);

// let pFormeMsg11 = document.createElement("p");
// pFormeMsg11.classList = "fs-6";
// pFormeMsg11.textContent = "WE LOVE";
// pFormeMsg11.style.fontWeight = "bold";
// divFormeMsg.appendChild(pFormeMsg11);
// let pFormeMsg12 = document.createElement("p");
// pFormeMsg12.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A magnam natus accusamus sit ex error non numquam sed"
// divFormeMsg.appendChild(pFormeMsg12);

// let divTestiImg = document.createElement('div');
// divTestiImg.classList = "d-flex flex-column justify-content-center align-items-center my-4";
// col41.appendChild(divTestiImg);

// let divTestiImgFlex = document.createElement('div');
// divTestiImgFlex.classList = "d-flex flex-row justify-content-center align-items-center";
// col41.appendChild(divTestiImgFlex);

// // IN
// let imgActiveItem = document.createElement('img');
// imgActiveItem.style.borderRadius = "50%";
// imgActiveItem.style.width = "20%";
// imgActiveItem.setAttribute('src', '../../public/img/testimonials/image-1-1.png');
// imgActiveItem.classList = "d-block mx-2"
// divTestiImgFlex.appendChild(imgActiveItem);

// let TestiFlexText = document.createElement('div');
// TestiFlexText.classList = "d-flex flex-column mx-2";
// divTestiImgFlex.appendChild(TestiFlexText);

// let h6TestiText = document.createElement('h6');
// h6TestiText.textContent = "Mattie Stepanek";
// h6TestiText.classList = "my-n1";
// let pTestiText = document.createElement('p');
// pTestiText.textContent = "Manager";
// pTestiText.classList = "text-secondary my-1";
// TestiFlexText.appendChild(h6TestiText);
// TestiFlexText.appendChild(pTestiText);







// // ACTIVE - COL 4 (2)
// let col42 = document.createElement('div');
// col42.classList = "col-4";
// row.appendChild(col42);

// let card2 = document.createElement('div');
// card2.classList = "card p-3";
// col42.appendChild(card2);

// let divFormeMsg2 = document.createElement('div');
// divFormeMsg2.style.backgroundColor = "#fffffff5";
// divFormeMsg2.classList = "divFormeMsg fs-7 mb-3";
// divFormeMsg2.style.alignContent = "center"
// card2.appendChild(divFormeMsg2);

// let pFormeMsg21 = document.createElement("p");
// pFormeMsg21.classList = "fs-6";
// pFormeMsg21.textContent = "WE LOVE";
// pFormeMsg21.style.fontWeight = "bold";
// divFormeMsg2.appendChild(pFormeMsg21);
// let pFormeMsg22 = document.createElement("p");
// pFormeMsg22.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A magnam natus accusamus sit ex error non numquam sed"
// divFormeMsg2.appendChild(pFormeMsg22);

// let divTestiImg2 = document.createElement('div');
// divTestiImg2.classList = "d-flex flex-column justify-content-center align-items-center my-4";
// col42.appendChild(divTestiImg2);

// let divTestiImgFlex2 = document.createElement('div');
// divTestiImgFlex2.classList = "d-flex flex-row justify-content-center align-items-center";
// col42.appendChild(divTestiImgFlex2);

// // IN
// let imgActiveItem2 = document.createElement('img');
// imgActiveItem2.style.borderRadius = "50%";
// imgActiveItem2.style.width = "20%";
// imgActiveItem2.setAttribute('src', '../../public/img/testimonials/image-1-1.png');
// imgActiveItem2.classList = "d-block mx-2"
// divTestiImgFlex2.appendChild(imgActiveItem2);

// let TestiFlex2 = document.createElement('div');
// TestiFlex2.classList = "d-flex flex-column mx-2";
// divTestiImgFlex2.appendChild(TestiFlex2);

// let h6TestiText2 = document.createElement('h6');
// h6TestiText2.textContent = "Mattie Stepanek";
// h6TestiText2.classList = "my-n1";
// let pTestiText2 = document.createElement('p');
// pTestiText2.textContent = "Manager";
// pTestiText2.classList = "text-secondary my-1";
// TestiFlex2.appendChild(h6TestiText2);
// TestiFlex2.appendChild(pTestiText2);








// // ACTIVE - COL 4 (3)
// let col43 = document.createElement('div');
// col43.classList = "col-4";
// row.appendChild(col43);

// let card3 = document.createElement('div');
// card3.classList = "card p-3";
// col43.appendChild(card3);

// let divFormeMsg3 = document.createElement('div');
// divFormeMsg3.style.backgroundColor = "#fffffff5";
// divFormeMsg3.classList = "divFormeMsg fs-7 mb-3";
// divFormeMsg3.style.alignContent = "center"
// card3.appendChild(divFormeMsg3);

// let pFormeMsg31 = document.createElement("p");
// pFormeMsg31.classList = "fs-6";
// pFormeMsg31.textContent = "WE LOVE";
// pFormeMsg31.style.fontWeight = "bold";
// divFormeMsg3.appendChild(pFormeMsg31);
// let pFormeMsg32 = document.createElement("p");
// pFormeMsg32.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A magnam natus accusamus sit ex error non numquam sed"
// divFormeMsg3.appendChild(pFormeMsg32);

// let divTestiImg3 = document.createElement('div');
// divTestiImg3.classList = "d-flex flex-column justify-content-center align-items-center my-4";
// col43.appendChild(divTestiImg3);

// let divTestiImgFlex3 = document.createElement('div');
// divTestiImgFlex3.classList = "d-flex flex-row justify-content-center align-items-center";
// col43.appendChild(divTestiImgFlex3);

// // IN
// let imgActiveItem3 = document.createElement('img');
// imgActiveItem3.style.borderRadius = "50%";
// imgActiveItem3.style.width = "20%";
// imgActiveItem3.setAttribute('src', '../../public/img/testimonials/image-1-1.png');
// imgActiveItem3.classList = "d-block mx-2"
// divTestiImgFlex3.appendChild(imgActiveItem3);

// let TestiFlex3 = document.createElement('div');
// TestiFlex3.classList = "d-flex flex-column mx-2";
// divTestiImgFlex3.appendChild(TestiFlex3);

// let h6TestiText3 = document.createElement('h6');
// h6TestiText3.textContent = "Mattie Stepanek";
// h6TestiText3.classList = "my-n1";
// let pTestiText3 = document.createElement('p');
// pTestiText3.textContent = "Manager";
// pTestiText3.classList = "text-secondary my-1";
// TestiFlex3.appendChild(h6TestiText3);
// TestiFlex3.appendChild(pTestiText3);











