"use server"
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";






export async function POST(req:NextRequest,res:NextApiResponse) {
  const prisma = new PrismaClient();
  const resp = await req.json()

  
    
  await prisma.accountInfo.create({
   
    data: {
        email:resp.cloud,
        password:resp.pass
          }
      });
    
    
        return new Response('OK')
    
    
    
  }