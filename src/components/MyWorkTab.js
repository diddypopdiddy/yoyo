import React from 'react';

function clsButtonPrimary(extra = '') {
  return `bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded ${extra}`;
}

export default function MyWorkTab({ studentId, units, submissionText, setSubmissionText, setUnits }) {
  const tasks = [];
  units.forEach((u) => {
    u.subActivities.forEach((sub) => {
      if (sub.studentId === studentId && sub.status !== 'graded') {
        tasks.push({ ...sub });
      }
    });
  });

  function handleSubmit(subId) {
    setUnits((prev) => {
      return prev.map((unit) => {
        const newSubs = unit.subActivities.map((s) => {
          if (s.id === subId) {
            return {
              ...s,
              status: 'submitted',
              submission: submissionText[subId] || '',
            };
          }
          return s;
        });
        return { ...unit, subActivities: newSubs };
      });
    });
  }

  if (!tasks.length) {
    return <p className="text-gray-600">No assignments to work on.</p>;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((sub) => (
        <li key={sub.id} className="border bg-white p-2 rounded shadow-sm">
          <p className="font-semibold">{sub.title}</p>
          <p className="text-sm text-gray-500 mb-2">Status: {sub.status}</p>
          {sub.status === 'unsubmitted' && (
            <>
              <textarea
                rows={2}
                className="border w-full p-1 mb-2"
                placeholder="Enter your work here..."
                value={submissionText[sub.id] || ''}
                onChange={(e) => setSubmissionText((p) => ({ ...p, [sub.id]: e.target.value }))}
              />
              <button
                className={clsButtonPrimary('')}
                onClick={() => handleSubmit(sub.id)}
              >
                Submit
              </button>
            </>
          )}
          {sub.status === 'submitted' && (
            <div className="text-sm text-gray-700">You submitted: {sub.submission}</div>
          )}
        </li>
      ))}
    </ul>
  );
}

