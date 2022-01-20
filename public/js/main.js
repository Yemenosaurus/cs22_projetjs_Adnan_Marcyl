// ## SECTION PRODUCTS
let sectionProducts = document.getElementById('sectionProducts');

let divCont = document.createElement('div');
divCont.classList = "container-fluid";
sectionProducts.appendChild(divCont);

let divFlex = document.createElement('div');
divFlex.classList = "d-flex flex-column justify-content-center align-items-center text-center mx-1 p-5";
divCont.appendChild(divFlex);

let h4 = document.createElement('h4');
h4.textContent = "h4";
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

let img11 = document.createElement('img');
let img12 = document.createElement('img');
let img13 = document.createElement('img');
let img14 = document.createElement('img');
let img15 = document.createElement('img');
img11.src = '../../public/img/fashion/fashion-recent-products-01-1-1.jpg';
img11.classList = "px-1";
img11.setAttribute('width', '100%')
img12.src = '../../public/img/fashion/fashion-recent-products-02-1-1.jpg';
img12.classList = "px-1";
img12.setAttribute('width', '100%')
img13.src = '../../public/img/fashion/fashion-recent-products-03-a-1-1.jpg';
img13.classList = "px-1";
img13.setAttribute('width', '100%')
img14.src = '../../public/img/fashion/fashion-recent-products-04.jpg';
img14.classList = "px-1";
img14.setAttribute('width', '100%')
img15.src = '../../public/img/fashion/fashion-recent-products-01-1-1.jpg';
img15.classList = "px-1";
img15.setAttribute('width', '100%')
imgLigneUne1.appendChild(img11);
imgLigneUne2.appendChild(img12);
imgLigneUne3.appendChild(img13);
imgLigneUne4.appendChild(img14);
imgLigneUne5.appendChild(img15);

let h611 = document.createElement('h6');
h611.textContent = "h6";
imgLigneUne1.appendChild(h611);
let p611 = document.createElement('p');
p611.textContent = "p";
imgLigneUne1.appendChild(p611);
let h612 = document.createElement('h6');
h612.textContent = "h6";
imgLigneUne2.appendChild(h612);
let p612 = document.createElement('p');
p612.textContent = "p";
imgLigneUne2.appendChild(p612);
let h613 = document.createElement('h6');
h613.textContent = "h6";
imgLigneUne3.appendChild(h613);
let p613 = document.createElement('p');
p613.textContent = "p";
imgLigneUne3.appendChild(p613);
let h614 = document.createElement('h6');
h614.textContent = "h6";
imgLigneUne4.appendChild(h614);
let p614 = document.createElement('p');
p614.textContent = "p";
imgLigneUne4.appendChild(p614);
let h615 = document.createElement('h6');
h615.textContent = "h6";
imgLigneUne5.appendChild(h615);
let p615 = document.createElement('p');
p615.textContent = "p";
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
img21.src = '../../public/img/fashion/fashion-recent-products-01-1-1.jpg';
img21.classList = "px-1";
img21.setAttribute('width', '100%')
img22.src = '../../public/img/fashion/fashion-recent-products-02-1-1.jpg';
img22.classList = "px-1";
img22.setAttribute('width', '100%')
img23.src = '../../public/img/fashion/fashion-recent-products-03-a-1-1.jpg';
img23.classList = "px-1";
img23.setAttribute('width', '100%')
img24.src = '../../public/img/fashion/fashion-recent-products-04.jpg';
img24.classList = "px-1";
img24.setAttribute('width', '100%')
img25.src = '../../public/img/fashion/fashion-recent-products-01-1-1.jpg';
img25.classList = "px-1";
img25.setAttribute('width', '100%')
imgLigneDeux1.appendChild(img21);
imgLigneDeux2.appendChild(img22);
imgLigneDeux3.appendChild(img23);
imgLigneDeux4.appendChild(img24);
imgLigneDeux5.appendChild(img25);

let h621 = document.createElement('h6');
h621.textContent = "h6";
imgLigneDeux1.appendChild(h621);
let p621 = document.createElement('p');
p621.textContent = "p";
imgLigneDeux1.appendChild(p621);
let h622 = document.createElement('h6');
h622.textContent = "h6";
imgLigneDeux2.appendChild(h622);
let p622 = document.createElement('p');
p622.textContent = "p";
imgLigneDeux2.appendChild(p622);
let h623 = document.createElement('h6');
h623.textContent = "h6";
imgLigneDeux3.appendChild(h623);
let p623 = document.createElement('p');
p623.textContent = "p";
imgLigneDeux3.appendChild(p623);
let h624 = document.createElement('h6');
h624.textContent = "h6";
imgLigneDeux4.appendChild(h624);
let p624 = document.createElement('p');
p624.textContent = "p";
imgLigneDeux4.appendChild(p624);
let h625 = document.createElement('h6');
h625.textContent = "h6";
imgLigneDeux5.appendChild(h625);
let p625 = document.createElement('p');
p625.textContent = "p";
imgLigneDeux5.appendChild(p625);