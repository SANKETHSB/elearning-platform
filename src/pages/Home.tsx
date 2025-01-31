import React from 'react';
import { GraduationCap, Code, Database, Palette, Camera, BarChart as ChartBar } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const categories = [
  { name: 'Development', icon: Code },
  { name: 'Data Science', icon: Database },
  { name: 'Design', icon: Palette },
  { name: 'Photography', icon: Camera },
  { name: 'Business', icon: ChartBar },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Learn Without Limits
            </h1>
            <p className="mt-4 text-xl">
              Access world-class education from anywhere, at any time.
            </p>
            <div className="mt-8">
              <a
                href="#courses"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Learning
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <Icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trending Courses Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8" id="courses">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}