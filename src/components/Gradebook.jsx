import React, { useState } from 'react';

export default function Gradebook({ units, setUnits, roster, setRoster }) {
  const [gradeInputs, setGradeInputs] = useState({});

  const submitted = [];
  units.forEach((u) => {
    u.subActivities.forEach((sub) => {
      if (sub.status === 'submitted' || sub.status === 'graded') {
        submitted.push({ ...sub, unitTitle: u.title });
      }
    });
  });

  if (!submitted.length) {
    return <p className="text-gray-600">No submissions yet.</p>;
  }

  function handleGradeInputChange(subId, val) {
    if (val.length > 3) return;
    setGradeInputs((p) => ({ ...p, [subId]: val }));
  }

  function handleGradeKeyDown(subId, e, studentId) {
    if (e.key === 'Enter') {
      const newGrade = parseInt(gradeInputs[subId] || '0', 10);
      if (isNaN(newGrade)) return;
      const finalGrade = Math.max(0, Math.min(999, newGrade));

      const updated = units.map((u) => {
        const newSubs = u.subActivities.map((s) => {
          if (s.id === subId) {
            return {
              ...s,
              status: 'graded',
              grade: finalGrade,
            };
          }
          return s;
        });
        return { ...u, subActivities: newSubs };
      });
      setUnits(updated);

      const oldPerf = roster.find((r) => r.id === studentId)?.performance;
      if (typeof oldPerf === 'number') {
        const newPerf = Math.round((oldPerf + finalGrade) / 2);
        const newRoster = roster.map((r) => {
          if (r.id === studentId) {
            return { ...r, performance: newPerf };
          }
          return r;
        });
        setRoster(newRoster);
      }

      setGradeInputs((p) => ({ ...p, [subId]: '' }));
    }
  }

  return (
    <table className="w-full bg-white rounded">
      <thead>
        <tr className="bg-blue-100">
          <th className="p-2 text-left">SubActivity ID</th>
          <th className="p-2 text-left">Student ID</th>
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Submission</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Grade</th>
        </tr>
      </thead>
      <tbody>
        {submitted.map((act, idx) => {
          const key = act.id;
          return (
            <tr key={key} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="p-2">{act.id}</td>
              <td className="p-2">{act.studentId || 'N/A'}</td>
              <td className="p-2">{act.title}</td>
              <td className="p-2">{act.submission}</td>
              <td className="p-2">{act.status}</td>
              <td className="p-2">
                {act.status === 'graded' ? (
                  <span>{act.grade}</span>
                ) : (
                  <input
                    type="text"
                    className="border p-1 w-16"
                    value={gradeInputs[key] || ''}
                    onChange={(e) => handleGradeInputChange(key, e.target.value)}
                    onKeyDown={(e) => handleGradeKeyDown(key, e, act.studentId)}
                  />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

