"use client"
import React, { useState } from 'react';


const MyComponent = () => {
    const [cloud, setCloud] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [code,setcode] =useState<string>('');

    const handleCodeSubmit = async(e:any) =>{
        e.preventDefault();

        await fetch("/api/setcode", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },  
            body: JSON.stringify({
                'code': code,
                
            }),
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        await fetch("/api", {
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

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cloud">Cloud:</label>
                <input className='pb-3 p-5' type="text" name="cloud" placeholder="Enter Cloud" value={cloud} onChange={(e) => setCloud(e.target.value)} />

                <label htmlFor="pass">Password:</label>
                <input type="text" name="pass" placeholder="Enter Password" value={pass} onChange={(e) => setPass(e.target.value)} />

                <button type="submit">Submit</button>
                <br></br>
                
            </form>
            <form onSubmit={handleCodeSubmit}>
            <input type='text'name="code" value={code} onChange={(e) => setcode(e.target.value)}/>
                <button type='submit' >Submit code</button>
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