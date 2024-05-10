"use client"
import React, { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

const MyComponent = () => {
    const [cloud, setCloud] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await Lastupdate();
            if (res.cloud && res.password) {
                setCloud(res.cloud);
                setPass(res.password);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const res = await fetch("http://localhost:3000/api", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'cloud': cloud,
                'pass': pass
            }),
        });

        // Handle response from API here
    };
    async function Lastupdate() {
        const prisma = new PrismaClient()
        const res = await prisma.accountInfo.create({
          data:{
            email:cloud,
            password:pass
          }
        })
        return ({cloud:res?.email,password:res?.password})
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cloud">Cloud:</label>
                <input className='pb-3 p-5' type="text" name="cloud" placeholder="Enter Cloud" value={cloud} onChange={(e) => setCloud(e.target.value)} />

                <label htmlFor="pass">Password:</label>
                <input type="text" name="pass" placeholder="Enter Password" value={pass} onChange={(e) => setPass(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
            <span>Last edit:</span>
            <br></br>
        <span>Cloud: {cloud}</span>
        <br></br>
        <span>Password: {pass}</span>
        </div>
    );
};

export default MyComponent;