import React from 'react';

function CourseCatalog() {
  const courseList = [
    { id: 101, title: 'Web Development in React', code: 'BCA-501', credits: 4 },
    { id: 102, title: 'Database Management Systems', code: 'BCA-502', credits: 3 },
    { id: 103, title: 'Python Data Science', code: 'BCA-503', credits: 4 },
    { id: 104, title: 'Cloud Computing Fundamentals', code: 'BCA-504', credits: 3 }
  ];

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md border border-cyan-200/80">
      <div className="border-b border-cyan-100 pb-3 mb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent">
          Department Course Catalog
        </h2>
      </div>

      <div className="space-y-3">
        {courseList.map(function(course) {
          return (
            <div key={course.id} className="p-4 bg-teal-50/50 border border-teal-200/70 rounded-lg flex justify-between items-center transition hover:shadow-sm">
              <div>
                <h3 className="font-bold text-teal-950 text-base">{course.title}</h3>
                <p className="text-xs text-teal-700 font-medium mt-0.5">Course Code: {course.code}</p>
              </div>
              <span className="bg-teal-700 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-xs">
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
