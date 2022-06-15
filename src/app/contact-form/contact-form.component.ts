import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '@services';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(private contactService: ContactService) { }

  async ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contactForm = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'subject': new FormControl(null,[Validators.required]),
      'message': new FormControl(null, [Validators.required]),
    });
  }

  async onSubmit(): Promise<any> {
    const data = this.contactForm.value
    // ADD VALIDITY
    await this.contactService.sendMessage(data)
  }

}
