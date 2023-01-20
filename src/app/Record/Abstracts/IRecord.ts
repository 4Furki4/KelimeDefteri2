import { IWord } from "./IWord";

export interface IRecord {
    Created: string;
    LastModifiedDate: Date;
    words: IWord[];
}