// src/constants/categories.js

// src/constants/categories.js

export const categories = [
  { 
    uuid: 'understand', 
    icon: '🧠', 
    name: 'Understand',
    description: 'Why you feel what you feel'
  },
  {
    uuid: 'practice',
    icon: '🌱',
    name: 'Practice',
    description: 'Small habits that help'
  },
  { 
    uuid: 'stories', 
    icon: '🤝', 
    name: 'Relate',
    description: 'Real voices, real journeys'
  },
];


export const categoryMap = Object.fromEntries(
  categories.map(c => [c.uuid, { name: c.name, icon: c.icon }])
);