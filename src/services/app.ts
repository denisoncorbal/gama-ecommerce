import * as I from "./interfaces";

export const products: Array<I.Product> = JSON.parse(localStorage.getItem("products") || '[]') as Array<I.Product>;

export const clients: Array<I.Client> = JSON.parse(localStorage.getItem("clients") || '[]') as Array<I.Client>;