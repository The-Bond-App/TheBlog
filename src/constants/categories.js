// src/constants/categories.js
export const categories = [
    { 
      uuid: 'feelings', 
      icon: '🤯', 
      name: 'Emotions 101',
      description: 'Figure out what you\'re actually feeling'
    },
    { 
      uuid: 'science', 
      icon: '🧠', 
      name: 'Science Says',
      description: 'The psychology behind why you feel what you feel'
    },
    { 
      uuid: 'habits', 
      icon: '🌱', 
      name: 'Habits That Work',
      description: 'Small rituals that actually change things'
    },
    { 
      uuid: 'questionsworthasking', 
      icon: '🤔', 
      name: 'Questions Worth Asking',
      description: 'Big questions you can\'t Google'
    }, 
    { 
      uuid: 'boundaries', 
      icon: '✋', 
      name: 'Protecting Your Peace',
      description: 'Learning to say no without guilt'
    },
    { 
      uuid: 'notjustyou', 
      icon: '🤝', 
      name: 'You\'re Not Alone',
      description: 'Real stories from real people'
    },
    {
      uuid: 'modernlife',
      icon:'📱',
      name: 'Modern Life',
      description: 'When the internet makes you feel worse'
    },
    {
      uuid: 'lettinggo',
      icon: '🍂',
      name: 'Letting Go',
      description: 'When things end and you need to move forward'
    },
    {
      uuid: 'permissiontofeelgood',
      icon: '🌻',
      name: 'Permission to Feel Good',
      description: 'It\'s okay to be happy—seriously'
    }
  ];
  
  // Optional lookup map
  //export const categoryMap = Object.fromEntries(categories.map(c => [c.uuid, c.name]));
  export const categoryMap = Object.fromEntries(
    categories.map(c => [c.uuid, { name: c.name, icon: c.icon }])
  );