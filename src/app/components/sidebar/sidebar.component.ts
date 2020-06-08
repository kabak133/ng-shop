import { Component, OnInit } from '@angular/core';
import {slideUpDown} from "../../animations/slideUpDown";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations:[slideUpDown]
})
export class SidebarComponent implements OnInit {

  showSelect = false
  constructor() { }

  ngOnInit(): void {
  }

}
