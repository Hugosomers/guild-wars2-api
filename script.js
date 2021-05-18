const fetchFunction = () => {
  const page = Math.random() * (34 - 1) + 1;
  const API_URL = `https://rickandmortyapi.com/api/character/?page=${page}`;

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

// const addCard = ({ name, image, gender, location, origin, species, type, status }) => {
//   const cardImg = document.querySelector('.card-img-top');
//   const cardTitle = document.querySelector('.card-title');
//   const cardText = document.querySelector('.card-text');
//   cardImg.src = image;
//   cardTitle.innerText = name;
//   cardText.innerText = `Gender: ${gender}
//   Location: ${location.name}
//   Origin: ${origin.name}
//   Species: ${species}
//   Status: ${status}
//   Type: ${type}`;
// }

// const getImage = ({ name, image, gender, location, origin, species, type, status }) => {
//   const cardImg = document.querySelectorAll('.card-img-top');
//   const cardTitle = document.querySelectorAll('.card-title');
//   const cardText = document.querySelectorAll('.card-text');

//   const cardImgsArray = Array.from(cardImg);
//   const cardTitleArray = Array.from(cardTitle);
//   const cardTextArray = Array.from(cardText);

//   cardImgsArray.forEach((cardImg) => cardImg.src = image);
//   cardTitleArray.forEach((cardTitle) => cardTitle.innerText = name);
//   cardTextArray.forEach((cardText) => {
//     cardText.innerText = `Gender: ${gender}
//       Location: ${location.name}
//       Origin: ${origin.name}
//       Species: ${species}
//       Status: ${status}
//       Type: ${type}`;
//   });

  
// }

window.onload = () => {
  fetchFunction();

}