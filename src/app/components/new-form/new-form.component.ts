import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-new-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule,
  ],
  providers: [
    NewsletterService
  ],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.scss'
})
export class NewFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false)

  constructor(private service: NewsletterService) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    // console.log(this.newsletterForm.value)

    this.loading.set(true)

    if (this.newsletterForm.valid) {
      this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
        next: () => {
          this.newsletterForm.reset();
          this.loading.set(false)
        }
      })
    }
  }
}
