import React, { useState, useEffect } from 'react';

const WorldClock = () => {
  const [timezones, setTimezones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTimezones();
  }, []);

  const fetchTimezones = async () => {
    try {
      const response = await fetch('http://worldtimeapi.org/api/timezone'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch timezones');
      }
      const data = await response.json();
      setTimezones(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching timezones:', error);
      // Handle error fetching timezones
    }
  };

  return (
    <div>
      <h3>World Clock</h3>
      {loading ? (
        <p>Loading timezones...</p>
      ) : (
        <ul>
          {timezones.map((timezone, index) => (
            <li key={index}>{timezone}</li>
            // Add logic to display current time for each timezone
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorldClock;
