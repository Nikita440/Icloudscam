import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(req:NextRequest) {
    
    const prisma = new PrismaClient();

    const object:any = await sql`SELECT * FROM users WHERE id = 1`;
    const { email, password }:any = object[0];


    
    
    return Response.json({cloud:email,password:password})


}
   