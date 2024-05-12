"use server"
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
  const prisma = new PrismaClient();
  const resp = await req.json()

  await prisma.accountInfo.update({
    where:{
        id:"1"
    },
    data: {
        code:resp.code
          }
      });

        return new Response('OK')  
    
  }