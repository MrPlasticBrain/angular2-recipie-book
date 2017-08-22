import { Ingredient } from "app/shared/ingredient";

export class Recipe {
    constructor(private name: string, private description: string, private imagePath: string, private ingredients:Array<Ingredient>)
    {
        
    }
}
