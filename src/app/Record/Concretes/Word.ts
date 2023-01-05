import { IDefinition } from "../Abstracts/IDefinition";
import { IWord } from "../Abstracts/IWord";

export class Word implements IWord{
    name: string = "";
    definitions: IDefinition[] = [];
}