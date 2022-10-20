import {
  Component,
  OnInit,
} from '@angular/core';

import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  items: any[] = [];
  show: boolean = false;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.showData();
  }
  showData() {
    this.service.getData().subscribe((result: any) => {
      this.show = false;
      this.items = result;
      this.show = true;
    });
  }
}
