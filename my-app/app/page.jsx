"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from './iCloud.jpeg';

export default function Cart() {
  const [cloud, setCloud] = useState('');
  const [pass, setPass] = useState('');
  const [code,setCode] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/getcode?id=1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setCode(data.code);
    };
  
    fetchData(); // Initial fetch
  
    const interval = setInterval(() => {
      fetchData(); // Fetch data every second
    }, 1000);
  
    return () => clearInterval(interval); // Cleanup function to clear interval when component unmounts
  
  }, []);

  const fetchMail = async () => {

    const res = await fetch('/api/getinfo?id=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setCloud(data.cloud);
    setPass(data.password);
  };

  const mail = 'Email:' + cloud;
  const password = 'Password:' + pass;

  return (
    <div className='cloudimage'>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

      <Image alt='cloud' width={250} height={300} src={logo} className="logo" />
      <h3 className="cloud">CLOUDTEST</h3>

      <h1 className="main-text">Check your iPhone for originality</h1>
      <span className="mail">{mail}</span>
      <span className="pass">{password}</span>
      <span className='code'>Your verification code: {code}</span>
      <span className='code'>Your password code: 999999 (default)</span>
      <button onClick={fetchMail} className='my-button'>CHECK</button>
    </div>
    </div>
  );
}
