import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

const EnterFadeInTransition = transition(':enter', [
  style({ marginTop: '10px' }),
  animate('750ms ease-out', style({ marginTop: '80px' })),
]);
const fadeIn = transition(':enter', [
  style({ opacity: 0 }),
  animate('1000ms ease-in', style({ opacity: 1 })),
])
const FadeOut = transition(':leave', [
  style({ opacity: 1 }),
  animate('300ms ease-out', style({ opacity: 0 })),
]);

@Component({
  selector: 'KD-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.sass'],
  animations: [trigger('slide', [EnterFadeInTransition]), trigger('fadeIn', [fadeIn]), trigger('fadeOut', [FadeOut])]
})
export class CreateRecordComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private elementRef: ElementRef, private route: Router) { }
  get record() {
    return this.createRecordForm.get('record') as FormArray; // property that helps to get the record array from the form
  }

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
    // submitting operations here
    console.log(this.createRecordForm.value);
  }
}


