import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onToggleDisplay(page: string) {
    this.navChanged.emit(
        page
    );
  }

}
