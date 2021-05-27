// const addOptions = () => {
//   const select = document.querySelector('.form-select');
//   const option = document.createElement('option');
//   option.value = 'Sim';
//   option.innerText = 'Sim';
//   select.appendChild(option);
//   // const array = Array.from(Array(34).keys());
//   // array.forEach((num) => {
//   //   const rightNum = num + 1;
//   //   const option = document.createElement('option');
//   //   option.value = rightNum;
//   //   option.innerText = rightNum;
//   //   select.appendChild(option);
//   // });
//   // const getSelected = document.querySelector('.form-select').value;
//   // const toNumber = parseInt(getSelected);
  
  
// }

const createCardElement = ({ name, image, gender, location, origin, species, type, status }) => {
  const main = document.querySelector('.main');
  const createCardDiv = document.createElement('div');
  createCardDiv.className = "card";
  main.appendChild(createCardDiv);
  
  
  const createCardImg = document.createElement('img');
  createCardImg.className = "card-img-top";
  createCardImg.alt = "Card image cap";
  createCardImg.src = image;
  createCardDiv.appendChild(createCardImg);
  
  const createDivBody = document.createElement('div');
  createDivBody.className = 'card-body';
  createCardDiv.appendChild(createDivBody);
  
  const createCardTitle = document.createElement('h5');
  createCardTitle.className = 'card-title';
  createCardTitle.innerText = name;
  createCardDiv.appendChild(createCardTitle);
  
  const createCardText = document.createElement('p');
  createCardText.className = 'card-text';
  createCardText.innerText = `Gender: ${gender}
  Location: ${location.name}
  Origin: ${origin.name}
  Species: ${species}
  Status: ${status}
  Type: ${type}`;
  createCardDiv.appendChild(createCardText);
}

const fetchFunction = (num) => {
  // const page = Math.random() * (34 - 1) + 1;

  const API_URL = `https://rickandmortyapi.com/api/character/?page=${num}`;

  const fetchHeader = {
    method: 'GET',
    headers: {'Accept': 'application/json'},
  }

  fetch(API_URL, fetchHeader)
    .then((response) => response.json())
    .then((json) => {
      const characters = json.results;
      characters.forEach((character) => {
        createCardElement(character);
      });
    })

}

const nextBttn = document.getElementById('nextBttn');
const prevBttn = document.getElementById('prevBttn');
let num = 1;
const pageCount = document.querySelector('#pageCount');
pageCount.innerText = num;

nextBttn.addEventListener('click', () => {
  if (num < 34) {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    num += 1;
    fetchFunction(num);
    pageCount.innerText = num;
  }
});

prevBttn.addEventListener('click', () => {
  if (num > 1) {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    num -= 1;
    fetchFunction(num);
    pageCount.innerText = num;
  }
});


window.onload = () => {
  // addOptions();
  fetchFunction(1);
}