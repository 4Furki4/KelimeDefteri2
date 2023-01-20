import { IRecord } from "../Abstracts/IRecord";
import { Word } from "./Word";

export class Record implements IRecord {
    Created!: string;
    LastModifiedDate!: Date;
    words: Word[] = [];
}