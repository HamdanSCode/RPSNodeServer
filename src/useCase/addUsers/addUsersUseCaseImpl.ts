import { Request } from "express";
import { UseCase } from "../UseCase";
import { checkForRows } from "../checkForRows";
import dotenv from 'dotenv';
import { getConnection } from "../../GlobalConstants";

dotenv.config();

export class addUsersUseCaseImpl implements UseCase {
    async invoke(req: Request) {
        try {

            let connection = await getConnection()
            let body = req.body
            let name = body.name
            let email = body.email
            await connection.execute("INSERT INTO testing.users (name, email) VALUES (?,?)", [name, email])
            connection.end()    // closes the connection
        }
        catch (error) {
            console.log(error)
            return { message: "post fail" }
        }
    }
}
