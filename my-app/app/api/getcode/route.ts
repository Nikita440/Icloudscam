"use server"
import { PrismaClient } from "@prisma/client";


export async function GET(req:Request) {
    const { searchParams } = new URL(req.url)
    const id:any = searchParams.get('id')
    
    const prisma = new PrismaClient();
    const object = await prisma.accountInfo.findFirst({ where: { id:id } }); 
    const response = Response.json({ code: object?.code});
    response.headers.set("Cache-Control", "no-cache");
    return response;
}