import { Request } from "express"

export interface UseCase {
    invoke(req: Request): void
}
