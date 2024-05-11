"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import logo from './iCloud.jpeg';

export default function Cart() {
  const [cloud, setCloud] = useState('');
  const [pass, setPass] = useState('');

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
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

      <Image alt='cloud' width={250} height={300} src={logo} className="logo" />
      <h3 className="cloud">CLOUDTEST</h3>

      <h1 className="main-text">Check your iPhone for originality</h1>
      <span className="mail">{mail}</span>
      <span className="pass">{password}</span>
      <button onClick={fetchMail} className='my-button'>CHECK</button>
    </div>
  );
}
