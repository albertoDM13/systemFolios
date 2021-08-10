import { Component, Input } from '@angular/core';

@Component({
  selector: 'pass',
  template: `
    <div class="div"></div>
    <div class="div pos"><input type="password" class="input" /></div>
    <div class="div"></div>
  `,
  styleUrls: [`./app.component.css`]
})
export class inputComponent {}
