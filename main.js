
//Globals
let currentObj = 0;
let currentTab = 'portfolio';

//initialisation
window.addEventListener("load", function(event) {
    var title = document.getElementById("title");
    var lee = document.querySelector("#title > h1");
    Object.assign(title.style, {transform: "translate(0px, 0px)"});
    // Object.assign(lee.style, {marginBottom: "10px"}); //this line motherfucking breaks chrome FUCKIN HOW
});

//create grid
var gridEle = document.getElementById('grid');
var brickFrag = document.createDocumentFragment();
photoData.forEach(function(photoObj){
    var brick = document.createElement('div'); 


    brick.className = 'brick ' + photoObj.classes;
    Object.assign(brick.style, {backgroundImage: 'url("' + photoObj.imgUrl + '")'});
    brickFrag.appendChild(brick);

    brick.onclick = () => {
      showImage(photoObj);
    }

});
gridEle.appendChild(brickFrag);
$(function() {
    var wall = new freewall("#grid");
    wall.reset({
      selector: '.brick',
      animate: true,
      onResize: function() {
        wall.fitWidth();
      }
    })
    wall.fitWidth();

  $(window).trigger("resize");
});


//Full image view
function showImage(photoObj) {
  currentObj = photoData.indexOf(photoObj);
  console.log(currentObj)
  const overlay = document.getElementById('imageOverlay');
  overlay.style.display = 'initial';

  const image = document.getElementById('fullImage');
  image.src = photoObj.imgUrl;

  const title = document.querySelector('#descArea > h1');
  title.textContent = photoObj.title;

  const desc = document.querySelector('#descArea > p');
  desc.textContent = photoObj.description;
}

document.getElementById('imageClose').onclick = () => {
  const overlay = document.getElementById('imageOverlay');
  overlay.style.display = 'none';
}

document.getElementById('imgLeft').onclick = () => {
  let index = currentObj === 0 ? (photoData.length - 1) : (currentObj - 1);
  showImage(photoData[index]);
}

document.getElementById('imgRight').onclick = () => {
  let index = currentObj === (photoData.length - 1) ? 0 : (currentObj + 1);
  showImage(photoData[index]);
}

//Tab toggle

function selectTab(tab) {
  const portGrid = document.getElementById('grid');
  const portLine = document.querySelector('#portfolioMenu > div');

  const about = document.getElementById('about');
  const aboutLine = document.querySelector('#aboutMenu > div')

  const contact = document.getElementById('contact');
  const contactLine = document.querySelector('#contactMenu > div');

  if (tab === 'portfolio') {
    portGrid.style.display = 'initial';
    about.style.display = 'none';
    contact.style.display = 'none';
    portLine.className = 'menuBar menuSelected';
    aboutLine.className = 'menuBar';
    contactLine.className = 'menuBar';
  } else if (tab === 'about') {
    portGrid.style.display = 'none';
    about.style.display = 'initial';
    contact.style.display = 'none';
    portLine.className = 'menuBar';
    aboutLine.className = 'menuBar menuSelected';
    contactLine.className = 'menuBar';
  } else if (tab === 'contact') {
    portGrid.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'initial';
    portLine.className = 'menuBar';
    aboutLine.className = 'menuBar';
    contactLine.className = 'menuBar menuSelected';
  }
}

document.getElementById('aboutMenu').onclick = () => {
  selectTab('about');
}

document.getElementById('portfolioMenu').onclick = () => {
  selectTab('portfolio');
}

document.getElementById('contactMenu').onclick = () => {
  selectTab('contact');
}





