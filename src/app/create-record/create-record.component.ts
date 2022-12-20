import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'KD-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.sass']
})
export class CreateRecordComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  get record(){
    return this.createRecordForm.get('record') as FormArray;
  }
  get definitions(){
    let arr : FormArray = this.formBuilder.array([]);
    this.record.controls.forEach((control => {
      // console.log(control.get('definitions'));
      arr.push(control.get('definitions'))
    }))
    return arr;
  }
  
  createRecordForm!: FormGroup;
  ngOnInit(): void {
    this.createRecordForm = this.formBuilder.group({
      record: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
          definitions: this.formBuilder.array([this.formBuilder.group(
            {
              definition: ['', Validators.required],
              definitionType: ['', Validators.required],
            }
          )])
        }),
        this.formBuilder.group({
          name: ['', Validators.required],
          definitions: this.formBuilder.array([this.formBuilder.group(
            {
              definition: ['', Validators.required],
              definitionType: ['', Validators.required],
            }
          )])
        }),
        this.formBuilder.group({
          name: ['', Validators.required],
          definitions: this.formBuilder.array([this.formBuilder.group(
            {
              definition: ['', Validators.required],
              definitionType: ['', Validators.required],
            }
          )])
        }),
        this.formBuilder.group({
          name: ['', Validators.required],
          definitions: this.formBuilder.array([this.formBuilder.group(
            {
              definition: ['', Validators.required],
              definitionType: ['', Validators.required],
            }
          )])
        })
      ])
    })
    // console.log(this.record.controls[0].get('definitions'))
    
    
  }

  addWord(){
    const word = this.formBuilder.group({
      name: ['', Validators.required],
      definitions: this.formBuilder.array([this.formBuilder.group(
        {
          definition: ['', Validators.required],
          definitionType: ['', Validators.required],
        }
      )])
    })
    this.record.push(word);
    console.log(this.definitions.controls[0]);
  }

  definition(index:number) : FormArray {
    return this.record.controls[index].get('definitions') as FormArray;
  }
}


