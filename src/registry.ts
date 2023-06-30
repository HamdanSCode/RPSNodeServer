import { UseCase } from "./useCase/UseCase";
import express, { Request, Response } from "express"
import { BASE_PORT } from "./GlobalConstants";

export class EndpointRegistry {
    private app: express.Application

    constructor(public port: number = BASE_PORT) {
        this.app = express()
        this.app.use(express.json())
    }

    public get(endpoint: string, usecase: UseCase): void {
        this.app.get(endpoint, async (req: Request, res: Response) => {
            let x = await usecase.invoke(req)
            console.log(x)
            res.json(x)
        });
    }

    public post(endpoint: string, usecase: UseCase): void {

        this.app.post(endpoint, async (req: Request, res: Response) => {
            console.log("in the post")
            let x = await usecase.invoke(req)
            console.log(x)
            res.json(x)
        });
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`)
        })
    }

}