import {productService} from "../services/product-service";

export const UseProduct = () => {
        return productService.listAll();
    }