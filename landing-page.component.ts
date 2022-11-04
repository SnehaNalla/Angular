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
  displayStyle = "none";
  displayDB = false;
  displayHTTP = false;
  data :any[]= [];
  display = true;
  
 

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  providerDetailsGroup!: FormGroup;

  constructor(private fb: FormBuilder, private provide: ProviderService) { }

  ngOnInit(): void {
    this.providerDetailsGroup = this.fb.group({
      providerName: ['', [Validators.required,]],
      pushOrpull: ['', [Validators.required,]],
      hostName: ['', [Validators.required,]],
      port: ['', [Validators.required,]],
      serviceName: ['', [Validators.required,]],
      otherProps: ['', [Validators.required,]],
      url: ['', [Validators.required,]],
      username: ['', [Validators.required,]],
      password: ['', [Validators.required,]],
      apiKey: ['', [Validators.required,]],
      otherProps2: ['', [Validators.required,]],
      connectionType: ['', [Validators.required,]],
      eventType: ['', [Validators.required,]],
      orderOfEvents: ['', [Validators.required,]],
      techContact: ['', [Validators.required,]],
      techEmail: ['', [Validators.required,]],
      businessContact: ['', [Validators.required,]],
      businessEmail: ['', [Validators.required,]],
      alertNotification: ['', [Validators.required,]]
    });
  }

  async onproviderDetailsGroupSubmit(result: any): Promise<any> {
    console.log(result.value);
    const data1 = {

        "alertNotificationEmailID": result.value.alertNotificationEmailID,
        "connectionParameters": [
          {
            "connectionType": result.value.connectionType,
            "eventType": result.value.eventType,
            "orderOfEvents": result.value.orderOfEvents,
            "password": result.value.password,
            "url": result.value.url,
            "username": result.value.username
          }
        ],
        "providerBusinessPOC": {
          "businessPOCEmailID": result.value.businessEmail,
          "businessPOCPhoneNumber": result.value.businessContact
        },
        "providerName": result.value.providerName,
        "providerTechnicalPOC": {
          "technicalPOCEmailID": result.value.techEmail,
          "technicalPOCPhoneNumber": result.value.techContact
        }
       }
    
      
    
    this.data.push(result.value);
   // console.log(this.data);
     this.provide.addProvider(this.data).subscribe(res=>{
      console.log(res)
     },error=>{
      console.error();
     });
    //let data = result; 
    //let Form = JSON.stringify(this.providerDetailsGroup);
    // await writeJsonFile('test.json',result.value);  
    localStorage.setItem('Data', JSON.stringify(this.data));
    this.providerDetailsGroup.reset();
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
