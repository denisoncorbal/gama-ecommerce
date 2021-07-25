export interface Product{
    id: number,
    name: string,
    description: string,
    price: number
}

export interface Adress{
    cep: number
    uf: string,
    city: string,
    district: string,    
    place: string,
    number: number
}

export interface Client{
    id: number,
    name: string,
    phone: number,
    mail: string,
    adress: Adress
}