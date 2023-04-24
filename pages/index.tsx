import { useState, useEffect } from 'react';
import Switch from 'react-switch';

export default function Home() {
  const [isTruckHere, setIsTruckHere] = useState(false);

  useEffect(() => {
    fetch('/api/truck-status')
      .then((res) => res.json())
      .then((data) => setIsTruckHere(data.isTruckHere));
  }, []);

  const handleChange = async (checked: boolean) => {
    setIsTruckHere(checked);
    await fetch('/api/truck-status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isTruckHere: checked }),
    });
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(45deg, #ff6b81, #d69c21)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#ffffff', marginBottom: '1rem' }}>
          The truck is {isTruckHere ? 'here' : 'not here'}
        </h1>
        <Switch
          onChange={handleChange}
          checked={isTruckHere}
          offColor="#d69c21"
          onColor="#ff6b81"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
    </div>
  );
}
