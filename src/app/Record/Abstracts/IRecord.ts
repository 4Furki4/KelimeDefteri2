import { IWord } from "./IWord";

export interface IRecord {
    CreatedDate: Date;
    LastModifiedDate: Date;
    words: IWord[];
}