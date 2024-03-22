import { Component,OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import {Product} from '../../../common/shared.model'
import {CommonModule} from '@angular/common';
import {ProductService} from '../../../services/primengTableService'
import { UserInfoService } from '../../../services/userService'
import { UserInfo } from '../../../common/shared.model';
@Component({
  selector: 'app-primeng-table',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './primeng-table.component.html',
  styleUrl: './primeng-table.component.css',
  providers: [ ProductService ]
})
export class PrimengTableComponent {
  products!: Product[];
  constructor(private productService: ProductService,private userInfoService: UserInfoService) {}
  ngOnInit(): void {
    this.productService.getProductsMini().then((data) => {
        this.products = data;
    });
    console.log(this.userInfoService.getUserInfo())
  }
}
