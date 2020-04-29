import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map, take, distinctUntilChanged, debounceTime } from 'rxjs/operators';

export class Status {
  constructor(public display: string, public value: string) {
  }
}

@Component({
  selector: 'app-f-reactive',
  templateUrl: 'reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveFormsComponent implements OnInit {

  projectFg: FormGroup;
  projectStatusOptions: Status[] = [
    new Status("Normal" , "NORMAL"),
    new Status("Warning" , "WARNING"),
    new Status("Critical" , "CRITICAL")
  ];
  formStatus: unknown;

  get projectTopics(): AbstractControl[] {
    return (<FormArray>this.projectFg.get("projectTopics")).controls;
  }

  constructor(public fb: FormBuilder) {
    this.projectFg = this.fb.group({
      projectName: this.createFormControl(null, false, [this.customRequiredValidator]),
      projectEmail: this.createFormControl(null, false, [this.customRequiredValidator, Validators.email]),
      projectStatus: this.createFormControl(null, false, [Validators.required]),
      projectTopics: this.fb.array([
      ])
    });
  }

  ngOnInit() {
    this.projectFg.statusChanges.subscribe((val) => {
      this.formStatus = val;
    });
    this.projectFg.valueChanges.subscribe((val) => {
    })
  }

  createFormControl(value: any, disabled: boolean, validators: any[] = null, asyncValids: any[] = null) {
      let fc = new FormControl({
        value: value ? value : null,
        disabled: disabled
      }, validators, asyncValids);
      return fc;
  }

  onAddNewTopic() {
    (<FormArray>this.projectFg.get("projectTopics")).push(this.createFormControl(null, false, [this.customRequiredValidator],
      [this.customEmailAsyncValidator]));
  }

  removeProjectTopic(index: number) {
    console.log(index);
    (<FormArray>this.projectFg.get("projectTopics")).removeAt(index);
  }

  onFormSubmit() {

  }

  customRequiredValidator(control: FormControl): {[s: string]: boolean} {
    const val: string = control.value;
    if (val && val.trim() !== "") {
      return null
    }
    return {"fieldRequired": true};
  }

  customNameValidator(control: FormControl): {[s: string]: boolean} {
    const val: string = control.value;
    if (val && val.trim() !== "" && val.toLowerCase() !== "test") {
      return null
    }
    return {"fieldRequired": true};
  }

  customEmailAsyncValidator(control: FormControl): Observable<any> {
    const val: string = control.value;
    return of(val).pipe(
      delay(2000),
      distinctUntilChanged(),
      debounceTime(1000),
      map((val: string) => {
        console.log("in async validator")
        if (val && val.toLowerCase() === "test") {
          return {"invalidTopicName": true};
        }
        return null;
      }),
      //take(1)
    )
  }
}
