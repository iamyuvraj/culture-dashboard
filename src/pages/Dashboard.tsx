import React from 'react';
import Card from '../components/Card';

const Dashboard: React.FC = () => {
  const cards = [
    { title: 'Total Events', value: 120 },
    { title: 'Ongoing Events', value: 35 },
    { title: 'Budget Utilized (%)', value: '75%' },
    { title: 'Departments Active', value: 5 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} value={card.value} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
