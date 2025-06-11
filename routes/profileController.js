const express = require('express');
const router = express.Router();

// Página de perfil
router.get('/profile', (req, res) => {
  const userData = JSON.parse(req.cookies["user-data"]);
  const user = {
    username: 'Lucas Martins',
    age: 24,
    bio: '🕹️ Gamer nas horas vagas, programador full-time e romântico em tempo integral 💻💘 \n🍣 Viciado em sushi, café e conversas profundas às 3 da manhã \n🚀 Se você curte rolê nerd, séries, boa música e um date com memes... já pode dar match!\n🎮 PS: Te ensino a jogar, mas só se me ensinar a conquistar seu coração 😉💬\n📍+1 ponto se curtir dogs 🐶 e rockzinho 🎸\n🔥 Vamos transformar um "oi" num "vamos sair hoje?"',
    profilePhoto: '/assets/userImages/profile-photo.jpg', // Atualizado para pasta correta
    hobbies: ['Programação', 'Viagens', 'Música', 'Jogos'],
    socialLinks: {
      instagram: 'https://instagram.com/lucasp',
      linkedin: 'https://linkedin.com/in/lucasp'
    },
    isOnline: true,
    gallery: [
      '/assets/userImages/gallery1.jpg',
      '/assets/userImages/gallery2.jpg',
      '/assets/userImages/gallery3.jpg'
    ]
  };

  res.render('profile', { 
    user:userData,
    
    title: "Perfil - " + userData.nome
  });
});

// Exporta o router
module.exports = router;
