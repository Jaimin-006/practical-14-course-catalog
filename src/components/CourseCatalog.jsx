import React from 'react';

function CourseCatalog() {
  const courseList = [
    { id: 101, title: 'Web Development in React', code: 'BCA-501', credits: 4 },
    { id: 102, title: 'Database Management Systems', code: 'BCA-502', credits: 3 },
    { id: 103, title: 'Python Data Science', code: 'BCA-503', credits: 4 },
    { id: 104, title: 'Cloud Computing Fundamentals', code: 'BCA-504', credits: 3 }
  ];

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Department Course Catalog</h2>

      <div className="space-y-3">
        {courseList.map(function(course) {
          return (
            <div key={course.id} className="p-4 bg-teal-50 border border-teal-200 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="font-bold text-teal-900">{course.title}</h3>
                <p className="text-xs text-teal-600">Course Code: {course.code}</p>
              </div>
              <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                {course.credits} Credits
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseCatalog;
