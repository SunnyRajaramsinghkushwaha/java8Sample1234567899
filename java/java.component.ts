import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-java',
    templateUrl: './java.component.html',
    styleUrls: ['./java.component.css']
  })

  export class JavaComponent {
    isCollapsed = true;
    constructor() {}
    toggleMenu() {
      this.isCollapsed = !this.isCollapsed;
    }

    homeToggleClose() {
      this.isCollapsed = true;
    }
  }