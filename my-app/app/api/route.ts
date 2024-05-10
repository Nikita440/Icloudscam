"use server"
import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";






export async function POST(req:NextRequest,res:NextApiResponse) {
  
  const resp = await req.json()

  
    
    await sql`INSERT INTO users where email=${resp.email} password=${resp.password}`
    
    
        return new Response('OK')
    
    
    
  }