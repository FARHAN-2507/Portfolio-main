import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import '../styles/DevelopmentActivity.css';

const DevelopmentActivity = () => {
  const [contributions] = useState(generateSampleData());
  const [loading] = useState(false);

  // Technical Skills Data
  const skillsData = [
    { skill: 'HTML/CSS', level: 100 },
    { skill: 'JavaScript', level: 100 },
    { skill: 'React', level: 100 },
    { skill: 'Node.js', level: 90 },
    { skill: 'Express', level: 80 },
    { skill: 'Python', level: 75 },
    { skill: 'SQL', level: 85 },
  ];

  // Generate 3 months sample data
  function generateSampleData() {
    const weeks = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 84); // 12 weeks * 7 days

    for (let week = 0; week < 12; week++) {
      const weekDays = [];
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + (week * 7 + day));
        
        // Generate random contributions with realistic pattern
        const dayOfWeek = currentDate.getDay();
        const contributions = Math.floor(Math.random() * (dayOfWeek === 0 || dayOfWeek === 6 ? 5 : 8));
        
        weekDays.push({
          date: currentDate.toISOString(),
          contributionCount: contributions,
          weekday: dayOfWeek
        });
      }
      weeks.push({ contributionDays: weekDays });
    }
    return weeks;
  }

  const getContributionColor = (count) => {
    if (count === 0) return '#ebedf0';
    if (count < 3) return '#ffd6cc';
    if (count < 6) return '#ffb3a6';
    return '#e74c3c';
  };

  return (
    <section className="development-section">
      <div className="container">
        <h2 className="section-title">Development Activity</h2>

        <div className="activity-grid">
          {/* GitHub Contribution Grid - 3 Months */}
          <div className="github-widget">
            <h3>GitHub Activity (Last 3 Months)</h3>
            <div className="contribution-grid">
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="contribution-week">
                  {week.contributionDays.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className="contribution-day"
                      style={{
                        backgroundColor: getContributionColor(day.contributionCount),
                      }}
                      data-tooltip={`${format(parseISO(day.date), 'MMM dd, yyyy')} - ${day.contributionCount} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="contribution-legend">
              {[0, 1, 3, 6].map((count, index) => (
                <div
                  key={index}
                  className="legend-item"
                  style={{ backgroundColor: getContributionColor(count) }}
                />
              ))}
            </div>
          </div>

          {/* Technical Proficiency Bar Graph */}
          <div className="skills-widget">
            <h3>Technical Proficiency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={skillsData}
                layout="vertical"
                margin={{ left: 40 }}
              >
                <YAxis 
                  type="category" 
                  dataKey="skill" 
                  tick={{ fill: '#2d3436' }}
                />
                <XAxis 
                  type="number" 
                  domain={[0, 100]}
                  tick={{ fill: '#666' }}
                />
                <Tooltip
                  contentStyle={{
                    background: '#2d3436',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar
                  dataKey="level"
                  fill="#e74c3c"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentActivity;