import { Component } from '@angular/core';

import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // items: any;
  index: any;
  finalItems: any;
  arr: any[] = [];
  items: any[] = [];
  itemsNum: any = document.getElementsByClassName('container');
  show: boolean = false;

  constructor(private service: ServiceService) {}
  ngOnInit(): void {
    this.getproudect();
    for (let i = 0; i < this.arr.length; i++) {
      this.getItem(this.arr[i]);
    }
  }
  getItem(num: any) {
    this.show = false;
    this.service.getItemData(num).subscribe({
      next: (item: any) => (
        this.items.push(item), this.countOfCart(), (this.show = true)
      ),
    });
  }
  getproudect() {
    for (let i = 0; i < localStorage.length; i++) {
      this.index = localStorage.key(i);
      this.finalItems = localStorage.getItem(this.index);
      this.arr.push(this.finalItems);
    }
  }

  countOfCart() {
    let num: any = this.service.itemsIncart(this.itemsNum);
    localStorage.setItem('num', num);
  }
}
