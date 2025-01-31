export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  rating: number;
  reviewCount: number;
  thumbnail: string;
  category: string;
  curriculum: {
    section: string;
    lectures: {
      title: string;
      duration: string;
    }[];
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
}