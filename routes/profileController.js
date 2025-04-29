const express = require('express');
const router = express.Router();

// Página de perfil
router.get('/profile', (req, res) => {
  const user = {
    username: 'Lucas Martins',
    age: 24,
    bio: 'Amante de tecnologia, gastronomia e música.',
    profilePhoto: '/assets/userImages/profile-photo.jpg', // Atualizado para pasta correta
    hobbies: ['Programação', 'Viagens', 'Música', 'Jogos'],
    socialLinks: {
      instagram: 'https://instagram.com/', // Página inicial do Instagram
      facebook: 'https://facebook.com/'    // Página inicial do Facebook (substitui o LinkedIn)
    },
    isOnline: true,
    gallery: [
      '/assets/userImages/gallery1.jpg',
      '/assets/userImages/gallery2.jpg',
      '/assets/userImages/gallery3.jpg'
    ]
  };

  res.render('profile', { 
    user,
    title: "Perfil - " + user.username // Passa também um título dinâmico
  });
});

// Exporta o router
module.exports = router;