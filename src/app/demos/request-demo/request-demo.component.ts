import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpService } from '../../../common/http.service';
@Component({
  selector: 'app-request-demo',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './request-demo.component.html',
  styleUrl: './request-demo.component.css'
})
export class RequestDemoComponent {
  constructor(private httpService: HttpService) { }
  login(): void {
    const url = 'http://192.168.0.73:3001/user/login';
    this.httpService.post(url, { userName: '139836666475', passWord: '111111' })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
