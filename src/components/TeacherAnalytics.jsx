import React from 'react';

export default function TeacherAnalytics({ units, roster }) {
  let totalTasks = 0;
  let completedTasks = 0;

  units.forEach((u) => {
    totalTasks += u.subActivities.length;
    u.subActivities.forEach((sub) => {
      if (sub.status === 'graded') {
        completedTasks++;
      }
    });
  });

  let sumPerf = 0;
  roster.forEach((r) => {
    sumPerf += r.performance;
  });
  const avgPerf = Math.round(sumPerf / roster.length);

  let suggestion = '';
  if (avgPerf < 50) {
    suggestion = 'Your class average is quite low. Focus on fundamental skills and provide more direct support to those struggling.';
  } else if (avgPerf < 70) {
    suggestion = 'Your class is making progress, but some students may need extra help. Consider small group interventions or targeted practice.';
  } else if (avgPerf < 85) {
    suggestion = 'Things are going fairly well! You might challenge the higher performers with advanced tasks while helping those still behind.';
  } else {
    suggestion = 'Your class is excelling overall. Keep them engaged with deeper, more challenging activities and maintain that growth!';
  }

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Analytics</h2>
      <ul className="list-disc ml-5">
        <li>Total Published Tasks: {totalTasks}</li>
        <li>Completed/Graded Tasks: {completedTasks}</li>
        <li>Average Performance (Roster): {avgPerf}</li>
      </ul>
      <div className="mt-4 p-2 bg-blue-50 border border-blue-100 rounded">
        <p className="font-semibold mb-1">Instructional Suggestion</p>
        <p className="text-sm text-gray-700">{suggestion}</p>
      </div>
    </div>
  );
}

