import { CommentModel } from "./Comment";

export interface ProductModel {
    id: number;
    imageUrl: string;
    name: string;
    count: number;
    size: {
        width: number,
        height: number
    };
    weight: string;
    comments: CommentModel[];
}