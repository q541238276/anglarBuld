import { Component, input } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-bind-val',
  standalone: true,
  imports: [NzInputModule, NzButtonModule, FormsModule],
  templateUrl: './input-bind-val.component.html',
  styleUrl: './input-bind-val.component.css'
})
export class InputBindValComponent {
  inputVal: string = '';
}
