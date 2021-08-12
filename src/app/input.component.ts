import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-input',
  template:
    '<input type={{tipo}} value={{val}} class={{clase}} placeholder={{text}}>',
  styleUrls: ['./app.component.css']
})
export class InputComponent {
  @Input() tipo = '';
  @Input() val = '';
  @Input() clase = '';
  @Input() text = '';
}
