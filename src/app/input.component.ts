import { Component, Input } from '@angular/core';

@Component({
  selector: 'add',
  template: '<input type={{tipo}} value={{val}} class={{clase}}>',
  styleUrls: ['./app.component.css']
})
export class InputComponent {
  @Input() tipo = '';
  @Input() val = '';
  @Input() clase = '';
}
