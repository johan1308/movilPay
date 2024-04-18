export class PaymentParams{
    bank_destiny?:string
    bank_origin?:string
    company?:string |number
    method?:number
    page?:number
    since?:string
    search?:string
    status?:boolean|string
    until?:string
}