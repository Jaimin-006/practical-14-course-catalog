import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'BCA',
    gender: 'Male',
    semester: 'Semester 5'
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData({ ...formData });
  }

  function handleReset() {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: 'BCA',
      gender: 'Male',
      semester: 'Semester 5'
    });
    setSubmittedData(null);
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md border border-slate-200 p-6 md:p-8">
        <h1 className="text-2xl font-bold text-indigo-950 mb-1">Student Registration Form</h1>
        <p className="text-xs text-slate-500 mb-6">Controlled Component using React useState()</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Jaiminpuri Bava"
              className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. jaiminpuri@example.com"
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 9876543210"
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="BCA">BCA</option>
                <option value="B.Sc IT">B.Sc IT</option>
                <option value="MCA">MCA</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Semester</label>
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 3">Semester 3</option>
                <option value="Semester 5">Semester 5</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Gender</label>
              <div className="flex space-x-4 pt-2.5 text-xs text-slate-700">
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                  />
                  <span>Female</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 pt-2">
            <button
              type="submit"
              className="bg-indigo-700 hover:bg-indigo-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition"
            >
              Submit Registration
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2.5 rounded-lg font-semibold text-sm transition"
            >
              Reset
            </button>
          </div>
        </form>

        {submittedData && (
          <div className="mt-8 p-5 bg-indigo-50/70 border border-indigo-200 rounded-xl">
            <h3 className="font-bold text-indigo-950 text-sm mb-3">✓ Submitted Student Record (Controlled State Output):</h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
              <p><span className="font-semibold text-slate-900">Name:</span> {submittedData.fullName}</p>
              <p><span className="font-semibold text-slate-900">Email:</span> {submittedData.email}</p>
              <p><span className="font-semibold text-slate-900">Phone:</span> {submittedData.phone}</p>
              <p><span className="font-semibold text-slate-900">Course:</span> {submittedData.course}</p>
              <p><span className="font-semibold text-slate-900">Semester:</span> {submittedData.semester}</p>
              <p><span className="font-semibold text-slate-900">Gender:</span> {submittedData.gender}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
