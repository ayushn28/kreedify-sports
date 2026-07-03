export const WHY_ITEMS = [
  { num:'01', title:'Certified Coaches',        desc:'Every program is led by experienced, certified coaches trained in youth sports development.' },

  { num:'02', title:'Age-Appropriate Training', desc:'Structured sessions designed for different age groups — from 5-year-olds to competitive teens.' },

  { num:'03', title:'Doorstep Convenience',     desc:'No commute needed. Elite coaching comes directly to your residential complex.' },

  { num:'04', title:'Holistic Development',     desc:'Beyond sport-specific skills — we build confidence, focus, and character in every child.' },
]

export const ALL_SPORTS = [
  {
    name: 'Cricket', icon: '🏏', ageLabel: 'Ages 5–18',
    sessions: '4 sessions/week', level: 'Beginner to Advanced', tag: 'POPULAR',
    desc: "Master India's favorite sport with professional coaching in batting, bowling, and fielding. Focus on technique, fitness, and match strategy.",
    benefits: ['Hand-eye coordination', 'Team spirit', 'Stamina', 'Focus'],
  },
  {
    name: 'Football', icon: '⚽', ageLabel: 'Ages 6–18',
    sessions: '4 sessions/week', level: 'Beginner to Advanced', tag: null,
    desc: "Build teamwork, coordination, and strategic thinking through the world's most popular sport. Professional coaching on fundamental skills and tactical awareness.",
    benefits: ['Cardiovascular fitness', 'Team coordination', 'Strategic thinking', 'Leadership'],
  },
  {
    name: 'Chess', icon: '♟️', ageLabel: 'Ages 6–14',
    sessions: '3 sessions/week', level: 'All Skill Levels', tag: null,
    desc: 'Develop critical thinking, problem-solving, and strategic planning through the royal game. Certified instructors guide students from basics to tournament play.',
    benefits: ['Critical thinking', 'Pattern recognition', 'Patience', 'Strategic planning'],
  },
  {
    name: 'Karate', icon: '🥋', ageLabel: 'Ages 5–16',
    sessions: '3 sessions/week', level: 'White Belt to Black Belt', tag: null,
    desc: 'Build discipline, self-confidence, and physical strength through traditional martial arts training. Focus on technique, respect, and personal development.',
    benefits: ['Discipline', 'Self-confidence', 'Physical strength', 'Focus'],
  },
  {
    name: 'Zumba', icon: '💃', ageLabel: 'Ages 8–16',
    sessions: '2 sessions/week', level: 'All Fitness Levels', tag: 'FUN',
    desc: 'Combine fitness with fun through energetic dance-fitness programs. Improve coordination, cardiovascular health, and enjoy music-based movement.',
    benefits: ['Cardiovascular health', 'Coordination', 'Rhythm', 'Social interaction'],
  },
  {
    name: 'Yoga', icon: '🧘', ageLabel: 'Ages 7–16',
    sessions: '3 sessions/week', level: 'All Skill Levels', tag: null,
    desc: 'Enhance flexibility, mindfulness, and inner balance through traditional yoga practices. Age-appropriate sessions focus on physical wellness and mental clarity.',
    benefits: ['Flexibility', 'Mental clarity', 'Stress relief', 'Body awareness'],
  },
  {
    name: 'Badminton', icon: '🏸', ageLabel: 'Ages 6–16',
    sessions: '3 sessions/week', level: 'Beginner to Competitive', tag: null,
    desc: 'Develop agility, reflexes, and sharp court sense through professional badminton coaching. Build stamina and hand-eye coordination in every session.',
    benefits: ['Agility', 'Quick reflexes', 'Stamina', 'Hand-eye coordination'],
  },
  {
    name: 'Meditation', icon: '🌿', ageLabel: 'Ages 7–16',
    sessions: '3 sessions/week', level: 'All Skill Levels', tag: null,
    desc: 'Cultivate mental resilience, emotional balance, and deep focus through guided meditation practices designed specifically for young minds.',
    benefits: ['Focus', 'Emotional balance', 'Stress relief', 'Self-awareness'],
  },
  {
    name: 'Swimming', icon: '🏊', ageLabel: 'Ages 5–18',
    sessions: '3 sessions/week', level: 'Non-swimmer to Competitive', tag: null,
    desc: 'Learn essential life skills while building full-body strength and endurance. Professional swimming instruction from basic water safety to competitive strokes.',
    benefits: ['Full-body fitness', 'Breathing control', 'Water safety', 'Endurance'],
  },
  {
    name: 'Basketball', icon: '🏀', ageLabel: 'Ages 8–18',
    sessions: '3 sessions/week', level: 'Beginner to Competitive', tag: null,
    desc: 'Develop agility, teamwork, and strategic thinking through dynamic basketball training. Focus on fundamentals, team play, and competitive skills.',
    benefits: ['Agility', 'Team coordination', 'Quick reflexes', 'Height advantage'],
  },
  {
    name: 'Table Tennis', icon: '🏓', ageLabel: 'Ages 6–18',
    sessions: '3 sessions/week', level: 'Beginner to Tournament', tag: null,
    desc: 'Enhance reflexes, concentration, and precision through fast-paced table tennis training. Develop hand-eye coordination and competitive spirit.',
    benefits: ['Quick reflexes', 'Hand-eye coordination', 'Concentration', 'Precision'],
  },
  {
    name: 'Tennis', icon: '🎾', ageLabel: 'Ages 6–18',
    sessions: '3 sessions/week', level: 'Beginner to Advanced', tag: null,
    desc: "Master one of the world's most popular racket sports. Build strength, stamina, and tactical thinking with professional coaching at all levels.",
    benefits: ['Agility', 'Stamina', 'Strategic play', 'Hand-eye coordination'],
  },
]

export const CATEGORY_MAP = {
  Physical: [
    'Cricket',
    'Football',
    'Karate',
    'Badminton',
    'Swimming',
    'Basketball',
    'Table Tennis',
    'Tennis'
  ],

  Mind: [
    'Chess',
    'Meditation'
  ],

  Wellness: [
    'Yoga',
    'Zumba',
    'Meditation'
  ],
}