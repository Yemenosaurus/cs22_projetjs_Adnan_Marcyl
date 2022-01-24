// ## NAV BAR
let navbar = document.getElementsByClassName('navbar')[0];
let navI1 = document.getElementsByTagName('i')[0];
let navI2 = document.getElementsByTagName('i')[1];
let navI3 = document.getElementsByTagName('i')[2];
let navI4 = document.getElementsByTagName('i')[3];
let btnNav = navbar.querySelectorAll('button');
let aNav = navbar.querySelectorAll('a');
let imgNav = navbar.getElementsByTagName('img')[0];

// ## SCROLL
window.addEventListener('scroll', () => {
    if (window.scrollY >= 705) {
        navbar.style.backgroundColor = 'black';
        navbar.style.color = 'white';
        imgNav.setAttribute('src', '../../public/img/white-logo.png');
        btnNav.forEach(element => {
            element.style.color = 'white';
            element.classList.remove('text-black')
        })
        aNav.forEach(element => {
            element.style.color = 'white';
            element.classList.remove('text-black')
        })
    } else if (window.scrollY <= 704) {
        navbar.style.backgroundColor = "rgb(245,235,223)";
        navbar.style.color = 'black';
        imgNav.setAttribute('src', '../../public/img/logo.png');
        btnNav.forEach(element => {
            element.style.backgroundColor = 'transparent';
            element.classList.add('text-black')
            element.addEventListener('mouseenter', (e) => {
                element.style.color = "grey";
                element.style.borderBottom = "1px solid grey"
            })
            element.addEventListener('mouseout', (e) => {
                element.style.color = "white";
                element.style.borderBottom = "none";
            })
        })
        aNav.forEach(element => {
            element.style.backgroundColor = 'transparent';
            element.classList.add('text-black')
            element.addEventListener('mouseenter', (e) => {
                element.style.color = "grey";
                element.style.borderBottom = "1px solid grey"
            })
            element.addEventListener('mouseout', (e) => {
                element.style.color = "white";
                element.style.borderBottom = "none";
            })
        })
    }
});



// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//   Launch static backdrop modal
// </button>

// <!-- Modal -->
// <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Understood</button>
//       </div>
//     </div>
//   </div>
// </div>

// ## MODAL
// let btnUser = document.getElementsByTagName('button')[7];

// let monModal = [
//     {
//         titre: "Bienvenue sur Hongo !",
//         contenu: 
//     }
// ]

// btnUser.addEventListener('click', (event) => {

// })



// btnUser.addEventListener('click', (event) => {
//     let divModalFade = document.createElement('div');
//     divModalFade.classList = "modal fade";
//     divModalFade.setAttribute('id', 'staticBackdrop');
//     divModalFade.setAttribute('data-bs-backdrop', 'static');
//     divModalFade.setAttribute('data-bs-keyboard', 'false');
//     divModalFade.setAttribute('tabindex', '-1');
//     divModalFade.setAttribute('aria-labelledby', 'staticBackdropLabel');
//     divModalFade.setAttribute('aria-hidden', 'true');
//     let divModalDialog = document.createElement('div');
//     divModalDialog.classList = "modal-dialog";
//     divModalFade.appendChild(divModalDialog);
//     let divModalContent = document.createElement('div');
//     divModalContent.classList = "modal-content";
//     divModalDialog.appendChild(divModalContent);
//     let divModalHeader = document.createElement('div');
//     let HeaderH5 = document.createElement('h5');
//     HeaderH5.classList = "modal-title";
//     HeaderH5.setAttribute('id', 'staticBackdropLabel');
//     HeaderH5.textContent = "Bienvenue sur Hongo !";
//     divModalHeader.classList = "modal-header"
//     divModalHeader.appendChild(HeaderH5);
//     let btnHeader = document.createElement('button');
//     btnHeader.setAttribute('type', "button");
//     btnHeader.setAttribute('data-bs-dismiss',"modal");
//     btnHeader.setAttribute('data-bs-target',"#staticBackdrop");
//     btnHeader.classList = "btn-close";
//     divModalHeader.appendChild(btnHeader);
//     divModalContent.appendChild(divModalHeader);
//     let divModalBody = document.createElement("div");
//     divModalContent.appendChild(divModalBody);
//     let divModalFooter = document.createElement("div");
//     divModalContent.appendChild(divModalFooter);
// })







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
        sourceHover: '../../public/img/fashion/fashion-recent-products-01-a-1-1.jpg'
    },
    {
        nom: "Traveller Shirt",
        prix: "$510.00",
        source: '../../public/img/fashion/fashion-recent-products-02-1-1.jpg',
        sourceHover: '../../public/img/fashion/fashion-recent-products-02-a-1-1-1.jpg'
    },
    {
        nom: "Crewneck Sweatshirt",
        prix: "$20.00 - $50.00",
        source: '../../public/img/fashion/fashion-recent-products-01-b.jpg',
        sourceHover: '../../public/img/fashion/fashion-recent-products-03-a-1-1.jpg'
    },
    {
        nom: "Skinny Trousers",
        prix: "$160.00",
        source: '../../public/img/fashion/fashion-recent-products-04.jpg',
        sourceHover: '../../public/img/fashion/fashion-recent-products-04-a-1.jpg',
    },
    {
        nom: "High Neck Sweater",
        prix: "$35.00",
        source: '../../public/img/fashion/fashion-recent-products-05-1.jpg',
        sourceHover: '../../public/img/fashion/fashion-recent-products-05-a-1.jpg',
    },
    // LIGNE 2
    {
        nom: "Sleeve Sweater",
        prix: "$120.00",
        source: '../../public/img/fashion/fashion-recent-products-06-1.jpg',
        sourceHover: '../../public/img/fashion/fashion-recent-products-06-a-1.jpg'
    },
    {
        nom: "Pocket Sweatshirt",
        prix: "$410.00",
        source: '../../public/img/fashion/fashion-recent-products-07-1.jpg',
        sourceHover: '../../public/img/fashion/fashion-recent-products-07-a-1.jpg'
    },
    {
        nom: "Top With Pleated",
        prix: "$20.00 - $50.00",
        source: '../../public/img/fashion/fashion-recent-products-08-1.jpg',
        sourceHover: '../../public/img/fashion/fashion-recent-products-08-a.jpg'
    },
    {
        nom: "Cotton Sweater",
        prix: "$155.00",
        source: '../../public/img/fashion/fashion-recent-products-01-d.jpg',
        sourceHover: '../../public/img/fashion/fashion-recent-products-09-a-1-1.jpg'
    },
    {
        nom: "Texture Plain Regular",
        prix: "$70.00",
        source: '../../public/img/fashion/fashion-recent-products-10-1.jpg',
        sourceHover: '../../public/img/fashion/fashion-recent-products-10-a-1.jpg'
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

// # LIGNE 1

// IMG 1
let coeurImg11 = document.createElement('button');
let iCoeur11 = document.createElement('i');
let divBtnHover = document.createElement('div');
let btnOptions = document.createElement('button');
btnOptions.style.border = "0";
btnOptions.style.borderRight = "1px solid grey";
btnOptions.style.padding = "5px 5px";
let iBtnOptions = document.createElement('i');
iBtnOptions.classList = "fas fa-shopping-cart"
let btnView = document.createElement('button');
btnView.style.border = "0";
btnView.style.padding = "5px 5px";
let iBtnView = document.createElement('i');
iBtnView.classList = "far fa-eye";



imgLigneUne1.addEventListener('mouseenter', (event) => {
    // CHANGE IMG
    img11.src = images[0].sourceHover;
    img11.classList = "px-1";
    // COEUR
    coeurImg11.classList = "px-2 py-1"
    iCoeur11.classList = "far fa-heart";
    coeurImg11.style.position = "absolute";
    coeurImg11.style.marginLeft = "180px";
    coeurImg11.style.marginTop = "15px";
    coeurImg11.style.color = "black";
    coeurImg11.style.zIndex = "2";
    coeurImg11.style.borderRadius = "100%";
    coeurImg11.style.border = "0";
    coeurImg11.style.backgroundColor = "white";
    imgLigneUne1.appendChild(coeurImg11);
    coeurImg11.appendChild(iCoeur11);
    // # BOUTONS 
    imgLigneUne1.appendChild(divBtnHover);
    divBtnHover.classList = "d-flex flex-row w-100 justify-content-center align-items-center";
    divBtnHover.style.position = "relative";
    divBtnHover.style.bottom = "100px";
    // OPTIONS
    divBtnHover.appendChild(btnOptions);
    btnOptions.classList = "bg-dark text-light";
    btnOptions.style.width = "48%";
    btnOptions.appendChild(iBtnOptions)
    // VIEW
    divBtnHover.appendChild(btnView);
    btnView.classList = "bg-dark text-light";
    btnView.style.width = "48%";
    btnView.appendChild(iBtnView)
})
imgLigneUne1.addEventListener('mouseleave', (event) => {
    img11.src = images[0].source;
    img11.classList = "px-1";
    coeurImg11.removeChild(iCoeur11);
    imgLigneUne1.removeChild(coeurImg11);
    imgLigneUne1.removeChild(divBtnHover);
})



// IMG 2
let coeurImg12 = document.createElement('button');
let iCoeur12 = document.createElement('i');
let divBtnHover2 = document.createElement('div');
let btnOptions2 = document.createElement('button');
btnOptions2.style.border = "0";
btnOptions2.style.borderRight = "1px solid grey";
btnOptions2.style.padding = "5px 5px";
let iBtnOptions2 = document.createElement('i');
iBtnOptions2.classList = "fas fa-shopping-cart";
let btnView2 = document.createElement('button');
btnView2.style.border = "0";
btnView2.style.padding = "5px 5px";
let iBtnView2 = document.createElement('i');
iBtnView2.classList = "far fa-eye";

imgLigneUne2.addEventListener('mouseenter', (event) => {
    img12.src = images[1].sourceHover;
    img12.classList = "px-1";
    // COEUR
    coeurImg12.classList = "px-2 py-1"
    iCoeur12.classList = "far fa-heart";
    coeurImg12.style.position = "absolute";
    coeurImg12.style.marginLeft = "180px";
    coeurImg12.style.marginTop = "15px";
    coeurImg12.style.color = "black";
    coeurImg12.style.zIndex = "2";
    coeurImg12.style.borderRadius = "100%";
    coeurImg12.style.border = "0";
    coeurImg12.style.backgroundColor = "white";
    imgLigneUne2.appendChild(coeurImg12);
    coeurImg12.appendChild(iCoeur12);
    // # BOUTONS 
    imgLigneUne2.appendChild(divBtnHover2);
    divBtnHover2.classList = "d-flex flex-row w-100 justify-content-center align-items-center";
    divBtnHover2.style.position = "relative";
    divBtnHover2.style.bottom = "100px";
    // OPTIONS
    divBtnHover2.appendChild(btnOptions2);
    btnOptions2.classList = "bg-dark text-light";
    btnOptions2.style.width = "48%";
    btnOptions2.appendChild(iBtnOptions2)
    // VIEW
    divBtnHover2.appendChild(btnView2);
    btnView2.classList = "bg-dark text-light";
    btnView2.style.width = "48%";
    btnView2.appendChild(iBtnView2);
})
imgLigneUne2.addEventListener('mouseleave', (event) => {
    img12.src = images[1].source;
    img12.classList = "px-1";
    coeurImg12.removeChild(iCoeur12);
    imgLigneUne2.removeChild(coeurImg12);
    imgLigneUne2.removeChild(divBtnHover2);
})




// IMG 3
let coeurImg13 = document.createElement('button');
let iCoeur13 = document.createElement('i');
let divBtnHover3 = document.createElement('div');
let btnOptions3 = document.createElement('button');
btnOptions3.style.border = "0";
btnOptions3.style.borderRight = "1px solid grey";
btnOptions3.style.padding = "5px 5px";
let ibtnOptions3 = document.createElement('i');
ibtnOptions3.classList = "fas fa-shopping-cart";
let BtnView3 = document.createElement('button');
BtnView3.style.border = "0";
BtnView3.style.padding = "5px 5px";
let iBtnView3 = document.createElement('i');
iBtnView3.classList = "far fa-eye";

imgLigneUne3.addEventListener('mouseenter', (event) => {
    img13.src = images[2].sourceHover;
    img13.classList = "px-1";
    // COEUR
    coeurImg13.classList = "px-2 py-1"
    iCoeur13.classList = "far fa-heart";
    coeurImg13.style.position = "absolute";
    coeurImg13.style.marginLeft = "180px";
    coeurImg13.style.marginTop = "15px";
    coeurImg13.style.color = "black";
    coeurImg13.style.zIndex = "2";
    coeurImg13.style.borderRadius = "100%";
    coeurImg13.style.border = "0";
    coeurImg13.style.backgroundColor = "white";
    imgLigneUne3.appendChild(coeurImg13);
    coeurImg13.appendChild(iCoeur13);
    // # BOUTONS 
    imgLigneUne3.appendChild(divBtnHover3);
    divBtnHover3.classList = "d-flex flex-row w-100 justify-content-center align-items-center";
    divBtnHover3.style.position = "relative";
    divBtnHover3.style.bottom = "100px";
    // OPTIONS
    divBtnHover3.appendChild(btnOptions3);
    btnOptions3.classList = "bg-dark text-light";
    btnOptions3.style.width = "48%";
    btnOptions3.appendChild(ibtnOptions3)
    // VIEW
    divBtnHover3.appendChild(BtnView3);
    BtnView3.classList = "bg-dark text-light";
    BtnView3.style.width = "48%";
    BtnView3.appendChild(iBtnView3);
})
imgLigneUne3.addEventListener('mouseleave', (event) => {
    img13.src = images[2].source;
    img13.classList = "px-1";
    coeurImg13.removeChild(iCoeur13);
    imgLigneUne3.removeChild(coeurImg13);
    imgLigneUne3.removeChild(divBtnHover3);
})



// IMG 4
let coeurImg14 = document.createElement('button');
let iCoeur14 = document.createElement('i');
let divBtnHover4 = document.createElement('div');
let btnOptions4 = document.createElement('button');
btnOptions4.style.border = "0";
btnOptions4.style.borderRight = "1px solid grey";
btnOptions4.style.padding = "5px 5px";
let ibtnOptions4 = document.createElement('i');
ibtnOptions4.classList = "fas fa-shopping-cart";
let btnView4 = document.createElement('button');
btnView4.style.border = "0";
btnView4.style.padding = "5px 5px";
let iBtnView4 = document.createElement('i');
iBtnView4.classList = "far fa-eye";

imgLigneUne4.addEventListener('mouseenter', (event) => {
    img14.src = images[3].sourceHover;
    img14.classList = "px-1";
    // COEUR
    coeurImg14.classList = "px-2 py-1"
    iCoeur14.classList = "far fa-heart";
    coeurImg14.style.position = "absolute";
    coeurImg14.style.marginLeft = "180px";
    coeurImg14.style.marginTop = "15px";
    coeurImg14.style.color = "black";
    coeurImg14.style.zIndex = "2";
    coeurImg14.style.borderRadius = "100%";
    coeurImg14.style.border = "0";
    coeurImg14.style.backgroundColor = "white";
    imgLigneUne4.appendChild(coeurImg14);
    coeurImg14.appendChild(iCoeur14);
    // # BOUTONS 
    imgLigneUne4.appendChild(divBtnHover4);
    divBtnHover4.classList = "d-flex flex-row w-100 justify-content-center align-items-center";
    divBtnHover4.style.position = "relative";
    divBtnHover4.style.bottom = "100px";
    // OPTIONS
    divBtnHover4.appendChild(btnOptions4);
    btnOptions4.classList = "bg-dark text-light";
    btnOptions4.style.width = "48%";
    btnOptions4.appendChild(ibtnOptions4)
    // VIEW
    divBtnHover4.appendChild(btnView4);
    btnView4.classList = "bg-dark text-light";
    btnView4.style.width = "48%";
    btnView4.appendChild(iBtnView4);
})
imgLigneUne4.addEventListener('mouseleave', (event) => {
    img14.src = images[3].source;
    img14.classList = "px-1";
    coeurImg14.removeChild(iCoeur14);
    imgLigneUne4.removeChild(coeurImg14);
    imgLigneUne4.removeChild(divBtnHover4);
})




// IMG 5
let coeurImg15 = document.createElement('button');
let iCoeur15 = document.createElement('i');
let divBtnHover5 = document.createElement('div');
let btnOptions5 = document.createElement('button');
btnOptions5.style.border = "0";
btnOptions5.style.borderRight = "1px solid grey";
btnOptions5.style.padding = "5px 5px";
let iBtnOptions5 = document.createElement('i');
iBtnOptions5.classList = "fas fa-shopping-cart";
let btnView5 = document.createElement('button');
btnView5.style.border = "0";
btnView5.style.padding = "5px 5px";
let iBtnView5 = document.createElement('i');
iBtnView5.classList = "far fa-eye";

imgLigneUne5.addEventListener('mouseenter', (event) => {
    img15.src = images[4].sourceHover;
    img15.classList = "px-1";
    // COEUR
    coeurImg15.classList = "px-2 py-1"
    iCoeur15.classList = "far fa-heart";
    coeurImg15.style.position = "absolute";
    coeurImg15.style.marginLeft = "180px";
    coeurImg15.style.marginTop = "15px";
    coeurImg15.style.color = "black";
    coeurImg15.style.zIndex = "2";
    coeurImg15.style.borderRadius = "100%";
    coeurImg15.style.border = "0";
    coeurImg15.style.backgroundColor = "white";
    imgLigneUne5.appendChild(coeurImg15);
    coeurImg15.appendChild(iCoeur15);
    // # BOUTONS 
    imgLigneUne5.appendChild(divBtnHover5);
    divBtnHover5.classList = "d-flex flex-row w-100 justify-content-center align-items-center";
    divBtnHover5.style.position = "relative";
    divBtnHover5.style.bottom = "100px";
    // OPTIONS
    divBtnHover5.appendChild(btnOptions5);
    btnOptions5.classList = "bg-dark text-light";
    btnOptions5.style.width = "48%";
    btnOptions5.appendChild(iBtnOptions5)
    // VIEW
    divBtnHover5.appendChild(btnView5);
    btnView5.classList = "bg-dark text-light";
    btnView5.style.width = "48%";
    btnView5.appendChild(iBtnView5);
})
imgLigneUne5.addEventListener('mouseleave', (event) => {
    img15.src = images[4].source;
    img15.classList = "px-1";
    coeurImg15.removeChild(iCoeur15);
    imgLigneUne5.removeChild(coeurImg15);
    imgLigneUne5.removeChild(divBtnHover5);
})



// # LIGNE 2

// IMG 1
let coeurImg21 = document.createElement('button');
let iCoeur21 = document.createElement('i');
let divBtnHover6 = document.createElement('div');
let btnOptions6 = document.createElement('button');
btnOptions6.style.border = "0";
btnOptions6.style.borderRight = "1px solid grey";
btnOptions6.style.padding = "5px 5px";
let iBtnOptions6 = document.createElement('i');
iBtnOptions6.classList = "fas fa-shopping-cart";
let btnView6 = document.createElement('button');
btnView6.style.border = "0";
btnView6.style.padding = "5px 5px";
let iBtnView6 = document.createElement('i');
iBtnView6.classList = "far fa-eye";

imgLigneDeux1.addEventListener('mouseenter', (event) => {
    // CHANGE IMG
    img21.src = images[5].sourceHover;
    img21.classList = "px-1";
    // COEUR
    coeurImg21.classList = "px-2 py-1"
    iCoeur21.classList = "far fa-heart";
    coeurImg21.style.position = "absolute";
    coeurImg21.style.marginLeft = "60px";
    coeurImg21.style.marginTop = "-350px";
    coeurImg21.style.color = "black";
    coeurImg21.style.zIndex = "2";
    coeurImg21.style.borderRadius = "100%";
    coeurImg21.style.border = "0";
    coeurImg21.style.backgroundColor = "white";
    imgLigneDeux1.appendChild(coeurImg21);
    coeurImg21.appendChild(iCoeur21);
    // # BOUTONS 
    imgLigneDeux1.appendChild(divBtnHover6);
    divBtnHover6.classList = "d-flex flex-row w-100 justify-content-center align-items-center";
    divBtnHover6.style.position = "relative";
    divBtnHover6.style.bottom = "100px";
    // OPTIONS
    divBtnHover6.appendChild(btnOptions6);
    btnOptions6.classList = "bg-dark text-light";
    btnOptions6.style.width = "48%";
    btnOptions6.appendChild(iBtnOptions6)
    // VIEW
    divBtnHover6.appendChild(btnView6);
    btnView6.classList = "bg-dark text-light";
    btnView6.style.width = "48%";
    btnView6.appendChild(iBtnView6);
})
imgLigneDeux1.addEventListener('mouseleave', (event) => {
    // CHANGE IMG
    img21.src = images[5].source;
    img21.classList = "px-1";
    coeurImg21.removeChild(iCoeur21);
    imgLigneDeux1.removeChild(coeurImg21);
    imgLigneDeux1.removeChild(divBtnHover6);
})


// IMG 2
let coeurImg22 = document.createElement('button');
let iCoeur22 = document.createElement('i');
let divBtnHover7 = document.createElement('div');
let btnOptions7 = document.createElement('button');
btnOptions7.style.border = "0";
btnOptions7.style.borderRight = "1px solid grey";
btnOptions7.style.padding = "5px 5px";
let iBtnOptions7 = document.createElement('i');
iBtnOptions7.classList = "fas fa-shopping-cart";
let btnView7 = document.createElement('button');
btnView7.style.border = "0";
btnView7.style.padding = "5px 5px";
let iBtnView7 = document.createElement('i');
iBtnView7.classList = "far fa-eye";

imgLigneDeux2.addEventListener('pointerenter', (event) => {
    // CHANGE IMG
    img22.src = images[6].sourceHover;
    img22.classList = "px-1";
    // COEUR
    coeurImg22.classList = "px-2 py-1"
    iCoeur22.classList = "far fa-heart";
    coeurImg22.style.position = "absolute";
    coeurImg22.style.marginLeft = "60px";
    coeurImg22.style.marginTop = "-350px";
    coeurImg22.style.color = "black";
    coeurImg22.style.zIndex = "2";
    coeurImg22.style.borderRadius = "100%";
    coeurImg22.style.border = "0";
    coeurImg22.style.backgroundColor = "white";
    imgLigneDeux2.appendChild(coeurImg22);
    coeurImg22.appendChild(iCoeur22);
    // # BOUTONS 
    imgLigneDeux2.appendChild(divBtnHover7);
    divBtnHover7.classList = "d-flex flex-row w-100 justify-content-center align-items-center";
    divBtnHover7.style.position = "relative";
    divBtnHover7.style.bottom = "100px";
    // OPTIONS
    divBtnHover7.appendChild(btnOptions7);
    btnOptions7.classList = "bg-dark text-light";
    btnOptions7.style.width = "48%";
    btnOptions7.appendChild(iBtnOptions7)
    // VIEW
    divBtnHover7.appendChild(btnView7);
    btnView7.classList = "bg-dark text-light";
    btnView7.style.width = "48%";
    btnView7.appendChild(iBtnView7);
})
imgLigneDeux2.addEventListener('pointerout', (event) => {
    // CHANGE IMG
    img22.src = images[6].source;
    img22.classList = "px-1";
    coeurImg22.removeChild(iCoeur22);
    imgLigneDeux2.removeChild(coeurImg22);
    imgLigneDeux2.removeChild(divBtnHover7);
})


// IMG 3
let coeurImg23 = document.createElement('button');
let iCoeur23 = document.createElement('i');
let divBtnHover8 = document.createElement('div');
let btnOptions8 = document.createElement('button');
btnOptions8.style.border = "0";
btnOptions8.style.borderRight = "1px solid grey";
btnOptions8.style.padding = "5px 5px";
let iBtnOptions8 = document.createElement('i');
iBtnOptions8.classList = "fas fa-shopping-cart";
let btnView8 = document.createElement('button');
btnView8.style.border = "0";
btnView8.style.padding = "5px 5px";
let iBtnView8 = document.createElement('i');
iBtnView8.classList = "far fa-eye";

imgLigneDeux3.addEventListener('pointerenter', (event) => {
    // CHANGE IMG
    img23.src = images[7].sourceHover;
    img23.classList = "px-1";
    // COEUR
    coeurImg23.classList = "px-2 py-1"
    iCoeur23.classList = "far fa-heart";
    coeurImg23.style.position = "absolute";
    coeurImg23.style.marginLeft = "60px";
    coeurImg23.style.marginTop = "-350px";
    coeurImg23.style.color = "black";
    coeurImg23.style.zIndex = "2";
    coeurImg23.style.borderRadius = "100%";
    coeurImg23.style.border = "0";
    coeurImg23.style.backgroundColor = "white";
    imgLigneDeux3.appendChild(coeurImg23);
    coeurImg23.appendChild(iCoeur23);
    // # BOUTONS 
    imgLigneDeux3.appendChild(divBtnHover8);
    divBtnHover8.classList = "d-flex flex-row w-100 justify-content-center align-items-center";
    divBtnHover8.style.position = "relative";
    divBtnHover8.style.bottom = "100px";
    // OPTIONS
    divBtnHover8.appendChild(btnOptions8);
    btnOptions8.classList = "bg-dark text-light";
    btnOptions8.style.width = "48%";
    btnOptions8.appendChild(iBtnOptions8);
    // VIEW
    divBtnHover8.appendChild(btnView8);
    btnView8.classList = "bg-dark text-light";
    btnView8.style.width = "48%";
    btnView8.appendChild(iBtnView8);
})
imgLigneDeux3.addEventListener('pointerout', (event) => {
    // CHANGE IMG
    img23.src = images[7].source;
    img23.classList = "px-1";
    coeurImg23.removeChild(iCoeur23);
    imgLigneDeux3.removeChild(coeurImg23);
    imgLigneDeux3.removeChild(divBtnHover8);
})


// IMG 4
let coeurImg24 = document.createElement('button');
let iCoeur24 = document.createElement('i');
let divBtnHover9 = document.createElement('div');
let btnOptions9 = document.createElement('button');
btnOptions9.style.border = "0";
btnOptions9.style.borderRight = "1px solid grey";
btnOptions9.style.padding = "5px 5px";
let iBtnOptions9 = document.createElement('i');
iBtnOptions9.classList = "fas fa-shopping-cart";
let btnView9 = document.createElement('button');
btnView9.style.border = "0";
btnView9.style.padding = "5px 5px";
let iBtnView9 = document.createElement('i');
iBtnView9.classList = "far fa-eye";

imgLigneDeux4.addEventListener('pointerenter', (event) => {
    // CHANGE IMG
    img24.src = images[8].sourceHover;
    img24.classList = "px-1";
    // COEUR
    coeurImg24.classList = "px-2 py-1"
    iCoeur24.classList = "far fa-heart";
    coeurImg24.style.position = "absolute";
    coeurImg24.style.marginLeft = "60px";
    coeurImg24.style.marginTop = "-350px";
    coeurImg24.style.color = "black";
    coeurImg24.style.zIndex = "2";
    coeurImg24.style.borderRadius = "100%";
    coeurImg24.style.border = "0";
    coeurImg24.style.backgroundColor = "white";
    imgLigneDeux4.appendChild(coeurImg24);
    coeurImg24.appendChild(iCoeur24);
    // # BOUTONS 
    imgLigneDeux4.appendChild(divBtnHover9);
    divBtnHover9.classList = "d-flex flex-row w-100 justify-content-center align-items-center";
    divBtnHover9.style.position = "relative";
    divBtnHover9.style.bottom = "100px";
    // OPTIONS
    divBtnHover9.appendChild(btnOptions9);
    btnOptions9.classList = "bg-dark text-light";
    btnOptions9.style.width = "48%";
    btnOptions9.appendChild(iBtnOptions9);
    // VIEW
    divBtnHover9.appendChild(btnView9);
    btnView9.classList = "bg-dark text-light";
    btnView9.style.width = "48%";
    btnView9.appendChild(iBtnView9);
})
imgLigneDeux4.addEventListener('pointerout', (event) => {
    // CHANGE IMG
    img24.src = images[8].source;
    img24.classList = "px-1";
    coeurImg24.removeChild(iCoeur24);
    imgLigneDeux4.removeChild(coeurImg24);
    imgLigneDeux4.removeChild(divBtnHover9);
})


// IMG 5
let coeurImg25 = document.createElement('button');
let iCoeur25 = document.createElement('i');
let divBtnHover10 = document.createElement('div');
let btnOptions10 = document.createElement('button');
btnOptions10.style.border = "0";
btnOptions10.style.borderRight = "1px solid grey";
btnOptions10.style.padding = "5px 5px";
let iBtnOptions10 = document.createElement('i');
iBtnOptions10.classList = "fas fa-shopping-cart";
let btnView10 = document.createElement('button');
btnView10.style.border = "0";
btnView10.style.padding = "5px 5px";
let iBtnView10 = document.createElement('i');
iBtnView10.classList = "far fa-eye";

imgLigneDeux5.addEventListener('pointerenter', (event) => {
    // CHANGE IMG
    img25.src = images[9].sourceHover;
    img25.classList = "px-1";
    // COEUR
    coeurImg25.classList = "px-2 py-1"
    iCoeur25.classList = "far fa-heart";
    coeurImg25.style.position = "absolute";
    coeurImg25.style.marginLeft = "60px";
    coeurImg25.style.marginTop = "-350px";
    coeurImg25.style.color = "black";
    coeurImg25.style.zIndex = "2";
    coeurImg25.style.borderRadius = "100%";
    coeurImg25.style.border = "0";
    coeurImg25.style.backgroundColor = "white";
    imgLigneDeux5.appendChild(coeurImg25);
    coeurImg25.appendChild(iCoeur25);
    // # BOUTONS 
    imgLigneDeux5.appendChild(divBtnHover10);
    divBtnHover10.classList = "d-flex flex-row w-100 justify-content-center align-items-center";
    divBtnHover10.style.position = "relative";
    divBtnHover10.style.bottom = "100px";
    // OPTIONS
    divBtnHover10.appendChild(btnOptions10);
    btnOptions10.classList = "bg-dark text-light";
    btnOptions10.style.width = "48%";
    btnOptions10.appendChild(iBtnOptions10);
    // VIEW
    divBtnHover10.appendChild(btnView10);
    btnView10.classList = "bg-dark text-light";
    btnView10.style.width = "48%";
    btnView10.appendChild(iBtnView10);
})
imgLigneDeux5.addEventListener('pointerout', (event) => {
    // CHANGE IMG
    img25.src = images[9].source;
    img25.classList = "px-1";
    coeurImg25.removeChild(iCoeur25);
    imgLigneDeux5.removeChild(coeurImg25);
    imgLigneDeux5.removeChild(divBtnHover10);
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



















