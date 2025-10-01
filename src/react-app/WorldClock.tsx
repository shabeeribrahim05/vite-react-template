import React, { useEffect, useState } from 'react';

const timeZones = [
  { label: 'UTC', offset: 0 },
  { label: 'EST', offset: -5 },
  { label: 'CST', offset: -6 },
  { label: 'MST', offset: -7 },
  { label: 'PST', offset: -8 },
  { label: 'GMT', offset: 0 },
  { label: 'CET', offset: 1 },
  { label: 'IST', offset: 5.5 },
];

const WorldClock: React.FC = () => {
  const [time, setTime] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTime = () => {
      const newTime: { [key: string]: string } = {};
      const now = new Date();

      timeZones.forEach(zone => {
        const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
        const localTime = new Date(utcTime + (zone.offset * 3600000));
        newTime[zone.label] = localTime.toLocaleTimeString();
      });

      setTime(newTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#111', color: '#00ffcc', fontFamily: 'Orbitron', padding: '20px', borderRadius: '10px' }}>
      <h1>World Clock</h1>
      <ul>
        {timeZones.map(zone => (
          <li key={zone.label}>
            {zone.label}: {time[zone.label]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldClock;