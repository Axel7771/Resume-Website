import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['local_styles.css'],
  template: `
<body>
    <h1> Welcome to my Angular website!</h1>

    <div>
      <p>{{ summary }}</p>
    </div>

    <h2> Follow my other Social Media </h2>

    <div> 
      <ul>
          <li><a target="_blank" href="{{linkedIn}}"> LinkedIn</a></li>
          <li><a target="_blank" href="{{twitter_user}}"> Twitter</a></li>
          <li><a target="_blank" href="{{github}}"> Github </a></li>
      </ul>
    </div>
  </body>

  <footer> </footer>
  `,
})

export class App {
  summary = ' Hi there, Im Axel Alvarez, a Texas Tech computer science graduate based in Houston. I am passionate about software development and have a keen interest in hiking, robotics, and embedded systems.'

  github = 'https://github.com/Axel7771'
  linkedIn = 'https://www.linkedin.com/in/axel-alvarez-8810a01b9/'
  twitter_user = "https://twitter.com/ax7l1"
}

bootstrapApplication(App);
