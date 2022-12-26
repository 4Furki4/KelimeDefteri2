import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'KD-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.sass']
})
export class CreateRecordComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private elementRef: ElementRef) { }
  get record() {
    return this.createRecordForm.get('record') as FormArray; // property that helps to get the record array from the form
  }

  bgColor= 'grey';
  createRecordForm!: FormGroup;
  ngOnInit(): void {
    this.createRecordForm = this.formBuilder.group({ // Initial form with 4 words having 1 name and 1 definition array for each word.
      record: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          definitions: this.formBuilder.array([this.formBuilder.group(
            {
              definition: ['', [Validators.required, Validators.minLength(3)]],
              definitionType: ['', [Validators.required, Validators.minLength(3)]],
            }
          )])
        }),
        this.formBuilder.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          definitions: this.formBuilder.array([this.formBuilder.group(
            {
              definition: ['', [Validators.required, Validators.minLength(3)]],
              definitionType: ['', [Validators.required, Validators.minLength(3)]],
            }
          )])
        }),
        this.formBuilder.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          definitions: this.formBuilder.array([this.formBuilder.group(
            {
              definition: ['', [Validators.required, Validators.minLength(3)]],
              definitionType: ['', [Validators.required, Validators.minLength(3)]],
            }
          )])
        }),
        this.formBuilder.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          definitions: this.formBuilder.array([this.formBuilder.group(
            {
              definition: ['', [Validators.required, Validators.minLength(3)]],
              definitionType: ['', [Validators.required, Validators.minLength(3)]],
            }
          )])
        })
      ])
    })

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f5f5f5'; // set the background color of the body to #f5f5f5
  }
  definition(index: number): FormArray { // function that helps to get the definitions array by index from the record array
    return this.record.controls[index].get('definitions') as FormArray;
  }
  addDefinition(index: number) {
    const definition = this.formBuilder.group({
      definition: ['', Validators.required],
      definitionType: ['', [Validators.required, Validators.minLength(3)]],
    })
    this.definition(index).push(definition);
  }
  removeDefinition(word: number, definition: number) { // word=> index of the word in the record array, definition=> index of the definition in the definitions array
    this.definition(word).removeAt(definition); // remove the definition from the definitions array
  }
  wordErrorAt(index: number, error: string) {
    return this.record.controls[index].get('name')?.hasError(error);
  }
  definitionErrorAt(wordIndex: number, definition: number, error: string) {
    return this.definition(wordIndex).controls[definition].get('definition')?.hasError(error);
  }
  definitionTypeErrorAt(wordIndex: number, definition: number, error: string) {
    return this.definition(wordIndex).controls[definition].get('definitionType')?.hasError(error);
  }

  SubmitRecord() {
    if(this.createRecordForm.invalid) {
      return;
    }
    console.log(this.createRecordForm.value);
    this.createRecordForm.reset();
    console.log(this.createRecordForm.pristine);
    console.log(this.createRecordForm.dirty);
    console.log(this.record.pristine);
    console.log(this.definition(0).pristine);
  }
}


