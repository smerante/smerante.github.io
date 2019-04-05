import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CVComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { CodeComponent } from './code/code.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './login/login.component';
import { AuthenticatedComponents } from './forum/authenticated/authenticated.component';
import { DocumentationModule } from './components/documentation/documentation.module';
import { CtaComponent } from './components/cta/cta.component';
import { InputComponent, InputWrapperComponent } from './components/input/input.component';
import { CheckboxComponent, CheckboxComponentWrapper } from './components/checkbox/checkbox.component';
import { ToggleComponent, ToggleComponentWrapper } from './components/toggle/toggle.component';
import { ForumComponent } from './forum/forum.component';
import { HttpClientModule } from '@angular/common/http';
import { RadiosComponent, RadioGroupComponent } from './components/radios/radios.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CVComponent,
    ProjectsComponent,
    CodeComponent,
    RegisterComponent,
    ComponentsComponent,
    LoginComponent,
    AuthenticatedComponents,
    CtaComponent,
    InputComponent,
    InputWrapperComponent,
    CheckboxComponent,
    CheckboxComponentWrapper,
    ToggleComponent,
    ToggleComponentWrapper,
    ForumComponent,
    RadiosComponent,
    RadioGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DocumentationModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
