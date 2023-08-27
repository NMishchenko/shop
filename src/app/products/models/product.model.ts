import { Category } from "src/app/shared/models/category.model";

export class ProductModel {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean
    ) {}
}
