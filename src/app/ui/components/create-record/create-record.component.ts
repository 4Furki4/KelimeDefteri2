import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Record } from 'src/app/Record/Concretes/Record';
import { CustomToastrService, ToastrPosition, ToastrType } from 'src/app/services/common/custom-toastr.service';
import { ThemeService } from 'src/app/services/common/theme.service';
import { CreateRecordService } from 'src/app/services/create/create-record.service';
const EnterFadeInTransition = transition(':enter', [
  style({ position: 'relative', left: '-100px' }),
  animate('750ms ease-out', style({ transform: 'translateX(100px)' })),
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
  constructor(private formBuilder: FormBuilder, private route: Router,
    private createRecService: CreateRecordService,
    private themeService: ThemeService, private toastr: CustomToastrService) { }
  get record() {
    return this.createRecordForm.get('record') as FormArray; // property that helps to get the record array from the form
  }
  isDark$ = this.themeService.darkMode$;
  receivedData: any[] = [];
  get createdDate() {
    return this.createRecordForm.get('createdDate')
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
      ]),
      createdDate: ['', Validators.required]
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

  /**
   * This function will be called when the user clicks on the submit button.
   * It will prepare the record object and send it to the server.
   * If the submittion is successful, it will navigate to the record-detail page.
   * @returns void
   */
  SubmitRecord() {
    const record: Record = this.createRecService.PrepareRecord(this.createRecordForm);

    this.createRecService.PostRecord<Record>(record).subscribe({
      next: (data) => {
        console.log(data);
        this.toastr.show("Record Created Successfully", "Create Message", ToastrType.Success, ToastrPosition.BottomLeft, {
          timeOut: 3000,
          progressBar: true,
        })
        this.route.navigate(['record-detail'], { queryParams: {/*this will be the date of the record that was created */ } });
      },
      error: (error) => {
        console.log(error); // This will do something meaningful, like throwing a message to user that the submittion is failed, in the future.
        this.toastr.show("Record Creation Failed", "Create Message", ToastrType.Error, ToastrPosition.BottomLeft, {
          timeOut: 3000,
          progressBar: true,
        })
      }
    })
  }

}
