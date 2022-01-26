import React, { useState, useEffect } from 'react';
import Navigation from './navigation';
import { RegistrationContext } from './provider';
import { getData, storeData } from './storage';

function App() {
  const [code, setCode] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');

  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await getData();
    if (response == null) {
      storeData(data);
    } else {
      setData(response);
    }
  }, []);

  return (
    <RegistrationContext.Provider
      value={{ code, setCode, type, setType, name, setName, data, setData }}
    >
      <Navigation />
    </RegistrationContext.Provider>
  );
}

export default App;
