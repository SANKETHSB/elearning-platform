import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/course/${course.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
          <div className="flex items-center mb-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-900">{course.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({course.reviewCount})</span>
          </div>
          <p className="text-lg font-bold text-gray-900">${course.price}</p>
        </div>
      </div>
    </Link>
  );
}