import { Request } from "express";
import { UseCase } from "../UseCase";
import { checkForRows } from "../checkForRows";
import dotenv from 'dotenv';
import { getConnection } from "../../GlobalConstants";

dotenv.config();

export class retrieveUsersUseCase implements UseCase {
    async invoke(req: Request) {
        try {
            let connection = await getConnection()
            let [rows] = await connection.execute(`SELECT * FROM users`)
            connection.end()    // closes the connection
            return checkForRows(rows)
        }
        catch {
            return { message: "unlucky" }
        }
    }
}
