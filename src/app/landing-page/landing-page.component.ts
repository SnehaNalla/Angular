import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProviderService } from '../provider.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {

  selectedAction: any;
  displayStyle = " ";
  displayDB = false;
  displayHTTP = false;
  data: any[] = [];
  display:boolean = true;

displayTest(){
  return {
   'display':"block"
  }
}
  openPopup() {
    this.displayTest();
  }
  closePopup() {
    this.displayStyle = "none";
  }
  openUpdate() {
   this.displayStyle = "block";
  }
  closeUpdate() {
    this.displayStyle = "none";
  }

  providerDetailsGroup!: FormGroup;
  updateProviderGroup!: FormGroup;

  constructor(private fb: FormBuilder, private provide: ProviderService) { }

  ngOnInit(): void {
    this.providerDetailsGroup = this.fb.group({
      providerName: ['', [Validators.required,]],
      pushOrpull: ['', [Validators.required,]],
      url: ['', [Validators.required,]],
      port: ['', [Validators.required,]],
      serviceName: ['', [Validators.required,]],
      otherProps: ['', [Validators.required,]],
      hostName: ['', [Validators.required,]],
      username: ['', [Validators.required,]],
      password: ['', [Validators.required,]],
      apiKey: ['', [Validators.required,]],
      otherProps2: ['', [Validators.required,]],
      connectionType: ['', [Validators.required,]],
      eventType: ['', [Validators.required,]],
      eventName: ['', [Validators.required,]],
      orderOfEvents: ['', [Validators.required,]],
      techContact: ['', [Validators.required,]],
      techEmail: ['', [Validators.required,]],
      businessContact: ['', [Validators.required,]],
      businessEmail: ['', [Validators.required,]],
      alertNotification: ['', [Validators.required,]]
    });


    this.updateProviderGroup = this.fb.group({
      providerName: ['', [Validators.required,]],
      pushOrpull: ['', [Validators.required,]],
      url: ['', [Validators.required,]],
      port: ['', [Validators.required,]],
      serviceName: ['', [Validators.required,]],
      otherProps: ['', [Validators.required,]],
      hostName: ['', [Validators.required,]],
      username: ['', [Validators.required,]],
      password: ['', [Validators.required,]],
      apiKey: ['', [Validators.required,]],
      otherProps2: ['', [Validators.required,]],
      connectionType: ['', [Validators.required,]],
      eventType: ['', [Validators.required,]],
      eventName: ['', [Validators.required,]],
      orderOfEvents: ['', [Validators.required,]],
      techContact: ['', [Validators.required,]],
      techEmail: ['', [Validators.required,]],
      businessContact: ['', [Validators.required,]],
      businessEmail: ['', [Validators.required,]],
      alertNotification: ['', [Validators.required,]]
    });

  }

  async onProviderDetailsGroupSubmit(result: any): Promise<any> {
    console.log(result.value);
    const data1 = {

      providerName: result.value.providerName,
      providerTechnicalPOC: {
        technicalPOCPhoneNumber: result.value.techContact,
        technicalPOCEmailID: result.value.techEmail
      },
      providerBusinessPOC: {
        businessPOCPhoneNumber: result.value.businessContact,
        businessPOCEmailID: result.value.businessEmail
      },
      alertNotificationEmailID: result.value.alertNotification,
      connectionParameters: [
        {
          connectionType: result.value.connectionType,
          url: result.value.url,
          username: result.value.username,
          password: result.value.password,
          eventType: result.value.eventType,
          eventName: result.value.eventName,
          orderOfEvents: result.value.orderOfEvents
        }
      ]
    }

    this.data.push(result.value);
    this.provide.addProvider(data1).subscribe((res: any) => {
      console.log(res)
    }, error => {
      console.error();
    });
    localStorage.setItem('Data', JSON.stringify(this.data));
    this.providerDetailsGroup.reset();
  }


  async onUpdateProviderDetailsGroupSubmit(result: any): Promise<any> {
    console.log(result.value);
    const data1 = {

      providerName: result.value.providerName,
      providerTechnicalPOC: {
        technicalPOCPhoneNumber: result.value.techContact,
        technicalPOCEmailID: result.value.techEmail
      },
      providerBusinessPOC: {
        businessPOCPhoneNumber: result.value.businessContact,
        businessPOCEmailID: result.value.businessEmail
      },
      alertNotificationEmailID: result.value.alertNotification,
      connectionParameters: [
        {
          connectionType: result.value.connectionType,
          url: result.value.url,
          username: result.value.username,
          password: result.value.password,
          eventType: result.value.eventType,
          eventName: result.value.eventName,
          orderOfEvents: result.value.orderOfEvents
        }
      ]
    }

    this.data.push(result.value);
    this.provide.updateProvider(data1).subscribe((res: any) => {
      console.log(res)
    }, error => {
      console.error();
    });
    localStorage.setItem('Data', JSON.stringify(this.data));
    this.providerDetailsGroup.reset();
  }


  onUpdate(formobj: any) {
    this.provide.updateProvider(formobj.value).subscribe((res: any) => {
      console.log(res);
    })
  }

  connectionTypeValue() {
    if (this.providerDetailsGroup.value.connectionType == '') {
      this.displayDB = false;
      this.displayHTTP = false;
    }
    if (this.providerDetailsGroup.value.connectionType == 'DB') {
      this.displayDB = true;
      this.displayHTTP = false;
    }
    if (this.providerDetailsGroup.value.connectionType == 'HTTP') {
      this.displayHTTP = true;
      this.displayDB = false;
    }
  }



}
