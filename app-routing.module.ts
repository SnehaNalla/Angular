import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFbFormComponent } from './reactive-fb-form/reactive-fb-form.component';
import { PizzaorderComponent } from './pizzaorder/pizzaorder.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
 

const routes: Routes = [{path: 'binding', component: BindingComponent},
{path: 'Template Driven Form', component: TemplateDrivenFormComponent},
{path: 'Reactive Form', component: ReactiveFormComponent},
{path: 'Reactive fb Form', component: ReactiveFbFormComponent},
{path: 'Pizza order', component:PizzaorderComponent},
{path: 'footer', component:FooterComponent},
{path: 'header', component:HeaderComponent},
{path: 'login_page', component:LoginPageComponent},
{path: 'landing_page', component:LandingPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],  
  providers:[]
})
export class AppRoutingModule { }
