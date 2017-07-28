import { Component , Input } from '@angular/core';

@Component({
    selector: 'my-btn',
    template: `
<button pButton type="button" label="{{flabel}}"></button>
`
})
export class MyBtnComponent {
    @Input('label-text')
    flabel : String;
}
