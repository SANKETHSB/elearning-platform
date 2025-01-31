export const courses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js',
    instructor: 'Sarah Johnson',
    price: 89.99,
    rating: 4.8,
    reviewCount: 2547,
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2128',
    category: 'Web Development',
    curriculum: [
      {
        section: 'Getting Started',
        lectures: [
          { title: 'Course Introduction', duration: '5:00' },
          { title: 'Setting Up Your Development Environment', duration: '15:00' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science, statistics, and machine learning',
    instructor: 'Michael Chen',
    price: 94.99,
    rating: 4.7,
    reviewCount: 1893,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    category: 'Data Science',
    curriculum: [
      {
        section: 'Introduction to Data Science',
        lectures: [
          { title: 'What is Data Science?', duration: '8:00' },
          { title: 'Statistical Foundations', duration: '20:00' }
        ]
      }
    ]
  }
];