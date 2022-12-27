import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StringcountPipe } from './stringcount.pipe';
import { FooterComponent } from './footer/footer.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFbFormComponent } from './reactive-fb-form/reactive-fb-form.component';
import { PizzaService } from './pizza.service';
import { PizzaorderComponent } from './pizzaorder/pizzaorder.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {AccordionModule} from 'primeng/accordion'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {DropdownModule} from 'primeng/dropdown';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataBindingComponent,
    BindingComponent,
    DirectivesComponent,
    HighlightDirective,
    ParentComponent,
    ChildComponent,
    StringcountPipe,
    FooterComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveFbFormComponent,
    PizzaorderComponent,
    LoginPageComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    BrowserAnimationsModule,
    CascadeSelectModule,
    DropdownModule,
    MenubarModule,
    SidebarModule
  
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
