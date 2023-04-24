import { useState } from 'react';
import Switch from 'react-switch';

export default function Home() {
  const [isTruckHere, setIsTruckHere] = useState(false);

  const handleChange = (checked: any) => {
    setIsTruckHere(checked);
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
