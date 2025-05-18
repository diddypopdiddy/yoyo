import React from 'react';

export default function MyGradesTab({ studentId, units }) {
  const tasks = [];
  units.forEach((u) => {
    u.subActivities.forEach((sub) => {
      if (sub.studentId === studentId && sub.status === 'graded') {
        tasks.push({ ...sub });
      }
    });
  });

  if (!tasks.length) {
    return <p className="text-gray-600">No graded assignments yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((sub) => (
        <li key={sub.id} className="border bg-white p-2 rounded shadow-sm">
          <p className="font-semibold">{sub.title}</p>
          <p className="text-sm text-gray-500 mb-2">Status: {sub.status}</p>
          <p className="text-sm text-gray-700">Grade: {sub.grade}</p>
          <p className="text-sm text-gray-700">Submission: {sub.submission}</p>
        </li>
      ))}
    </ul>
  );
}

