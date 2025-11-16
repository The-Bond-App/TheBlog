// src/constants/categories.js
import { 
  Brain,
  FlaskRound,
  Leaf,
  HelpCircle,
  Hand,
  Handshake,
  Smartphone,
  Sun, 
  Origami
} from "lucide-react";

export const categories = [
  { 
    uuid: 'emotions', 
    icon: <Brain />, 
    name: 'Emotions, Explained',
    description: 'Figure out what you\'re actually feeling'
  },
  { 
    uuid: 'science', 
    icon: <FlaskRound />, 
    name: 'Science Says',
    description: 'The psychology behind why you feel what you feel'
  },
  { 
    uuid: 'habits', 
    icon: <Leaf />, 
    name: 'Habits That Work',
    description: 'Small rituals that actually change things'
  },
  { 
    uuid: 'questionsworthasking', 
    icon: <HelpCircle />, 
    name: 'Questions Worth Asking',
    description: 'Big questions you can\'t Google'
  }, 
  { 
    uuid: 'boundaries', 
    icon: <Hand />, 
    name: 'Protecting Your Peace',
    description: 'Learning to say no without guilt'
  },
  { 
    uuid: 'notjustyou', 
    icon: <Handshake />, 
    name: 'You\'re Not Alone',
    description: 'Real stories from real people'
  },
  {
    uuid: 'modernlife',
    icon: <Smartphone />,
    name: 'Modern Life',
    description: 'When the internet makes you feel worse'
  },
  {
    uuid: 'lettinggo',
    icon: <Origami />,
    name: 'Letting Go',
    description: 'When things end and you need to move forward'
  },
  {
    uuid: 'permissiontofeelgood',
    icon: <Sun />,
    name: 'Permission to Feel Good',
    description: 'It\'s okay to be happy—seriously'
  }
];

export const categoryMap = Object.fromEntries(
  categories.map(c => [c.uuid, { name: c.name, icon: c.icon }])
);
