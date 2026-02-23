// src/app/app.ts
// This file is the main entry point for the Angular application. It defines the root component and its dependencies.
import { Component, signal } from '@angular/core';
// Importing the RouterOutlet for routing, and the AComponent and BComponent which are used in the template.
import { RouterOutlet } from '@angular/router';
// Importing the AComponent and BComponent which are used in the template.
import { AComponent } from "./acomponent/acomponent";
// Importing the BComponent which is used in the template.
import { BComponent } from "./bcomponent/bcomponent";

// The @Component decorator defines the metadata for the App component, including its selector, imports, template, and styles.
@Component({
  //
  selector: 'root-directive',
  // The imports array specifies the components and directives that are used in the template of this component. In this case, it includes the RouterOutlet for routing, and the AComponent and BComponent which are used in the template.
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// The App class defines the properties and methods for the root component of the application.
export class App {
  // Defining two properties, name and age, which are used in the template to display the user's name and age.
  name:string =" Gavin";
  age:number = 24;
}
