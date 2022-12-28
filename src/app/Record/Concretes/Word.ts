import { IDefinition } from "../Abstracts/IDefinition";
import { IWord } from "../Abstracts/IWord";

export class Word implements IWord{
    Name: string = "";
    Definitions: IDefinition[] = [];
}