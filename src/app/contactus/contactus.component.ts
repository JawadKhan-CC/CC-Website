import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
sendMessage(form: any) {
    if (form.invalid) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = {
      fullName: form.value.fullName,
      email: form.value.email,
      phone: form.value.phone,
      company: form.value.company,
      service: form.value.service,
      details: form.value.details
    };

    const SERVICE_ID = 'service_xs2ukqd';
    const TEMPLATE_ID = 'template_9m26wfs';
    const PUBLIC_KEY = '5mxhH9T9aKQE-X_F8';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response: EmailJSResponseStatus) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Something went wrong. Please try again.");
      });
  }
}
