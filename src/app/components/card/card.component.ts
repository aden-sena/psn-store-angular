import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameCover:string = ""
  @Input()
  gameLabel:string = ""
  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""

  showOrHidden:boolean = false

  constructor() { }

  ngOnInit(): void {
    this.labelHiddenOrShow()
  }

  labelHiddenOrShow() {
    if(this.gameLabel != "") {
      this.showOrHidden = true
    }
  }
}
