// src/constants/categories.js
export const categories = [
    { uuid: 'feelings', icon:'😵‍💫', name: 'Feelings I didn\'t ask for' },
    { uuid: 'habits', icon:'🌱', name: 'Habits in Action' },
    { uuid: 'lifeunfiltered', icon:'🌅', name: 'Life, Unfiltered' },
    { uuid: 'virtualyou', icon:'🧑‍💻', name: 'Performing Online'},
    { uuid: 'notyoueveryone', icon:'🌍', name: 'We\'re All Struggling'},
    { uuid: 'science', icon:'🧠', name: 'The Science of Feeling' },
    { uuid: 'identitiycrisis', icon:'🫠', name: 'Identity in Crisis' },
    { uuid: 'questionsthatstick', icon: '🌀', name:'Questions That Stick' },
    { uuid: 'whenitshard', icon:'😤', name: 'When It\'s Hard' },
    { uuid: 'boundaries', icon:'✋', name: 'Boundaries & Burnout'}
  ];
  
  // Optional lookup map
  //export const categoryMap = Object.fromEntries(categories.map(c => [c.uuid, c.name]));
  export const categoryMap = Object.fromEntries(
    categories.map(c => [c.uuid, { name: c.name, icon: c.icon }])
  );