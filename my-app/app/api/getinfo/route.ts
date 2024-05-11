import { sql, QueryResult, QueryResultRow } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";


    


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const object: QueryResult<QueryResultRow> = await sql`SELECT * FROM accountInfo WHERE id = 1`;       
    const { email, pass } = object.rows[0]; // Access the first row from the result
    return Response.json({ email: email, password: pass });
        
     
}

