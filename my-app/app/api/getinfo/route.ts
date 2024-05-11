"use server"
import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    
    const prisma = new PrismaClient();

    const object = await prisma.accountInfo.findFirst({ where: { id: "1" } });

    return Response.json({ cloud: object?.email, password: object?.password });
}
