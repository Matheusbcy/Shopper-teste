import { BaseError } from "./BaseError";

export const ID_INVALID = ""

export class BadRequestError extends BaseError {
    constructor(
        message: string = "Requisição Inválida"
    ){
        super(400, message)
    }
}