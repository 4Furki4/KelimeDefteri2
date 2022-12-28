import { IRecord } from "../Abstracts/IRecord";
import { Word } from "./Word";

export class Record implements IRecord{
    CreatedDate!: Date;
    LastModifiedDate!: Date;
    Words: Word[] = [];
}