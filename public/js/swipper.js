// swipper.js

const container = document.getElementById('card-container');
const dislikeButton = document.getElementById('dislike');
const likeButton = document.getElementById('like');

// Função para carregar os usuários mockados
async function loadUsers() {
  try {
    const response = await fetch('/js/swippermock.json');
    const data = await response.json();
    renderUsers(data.likelist);
  } catch (error) {
    console.error('Erro ao carregar os usuários:', error);
  }
}

// Função para desenhar os usuários na tela
function renderUsers(users) {
  users.forEach((userObj) => {
    const user = userObj.user;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${user.img}" alt="${user.name}">
      <h2>${user.name}, <span class="age">${user.age}</span></h2>
      <p>${user.bio}</p>
      <div class="tags">${user.likes.map(like => `<span class="tag">${like}</span>`).join(' ')}</div>
    `;
    container.appendChild(card);
  });
}

// Função para dar swipe no card
function swipe(direction) {
  const cards = container.getElementsByClassName('card');
  if (cards.length === 0) return;

  const card = cards[cards.length - 1];

  card.style.transform = `translateX(${direction === 'like' ? '400px' : '-400px'}) rotate(${direction === 'like' ? '20deg' : '-20deg'})`;
  card.style.opacity = 0;

  setTimeout(() => {
    card.remove();
  }, 300);
}

// Eventos dos botões
likeButton.addEventListener('click', () => swipe('like'));
dislikeButton.addEventListener('click', () => swipe('dislike'));

// Quando a página carregar, carregar usuários
loadUsers();
