import { AxiosRequestConfig } from "axios";
import { ProductDTO } from "../models/product";
import { requestBackend } from "../utils/requests";

export function findAllRequest(page: number, name: string, size=12, sort="name,asc"){
    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/products",
        params: {
            page,
            name,
            size,
            sort
        }
    }

    return requestBackend(config);
}

export function findById(id: number){
    return requestBackend({
        method: "GET",
        url: `/products/${id}`
    });
}

export function deleteById(id: number){
    const config : AxiosRequestConfig = {
        url:`/products/${id}`,
        method: "DELETE",
        withCredentials: true
    }
    return requestBackend(config);
}

export function updateRequest(product: ProductDTO){
    const config : AxiosRequestConfig = {
        method: "PUT",
        url: `/products/${product.id}`,
        withCredentials: true,
        data: product
    }
    return requestBackend(config);
}
