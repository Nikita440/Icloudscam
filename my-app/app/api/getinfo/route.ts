"use server"
import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

export async function GET(req:Request) {
    const { searchParams } = new URL(req.url)
    const id:any = searchParams.get('id')
    
    const prisma = new PrismaClient();
    const object = await prisma.accountInfo.findFirst({ where: { id:id } }); 
    const response = Response.json({ cloud: object?.email, password: object?.password });
    response.headers.set("Cache-Control", "no-cache");
    return response;
}
