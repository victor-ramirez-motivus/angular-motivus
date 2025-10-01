import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-switches-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchesPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    gender: [, Validators.required],
    wantNotifications: [true],
    termAndConditions: [false, Validators.requiredTrue],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();

    console.log(this.myForm.value);
  }
}
