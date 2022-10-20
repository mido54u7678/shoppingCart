import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css'],
})
export class SingleItemComponent implements OnInit {
  @Output() toparent: EventEmitter<string> = new EventEmitter<string>();
  arr: any[] = [];
  items: any;
  id?: any;
  constructor(private route: ActivatedRoute, private service: ServiceService) {}

  ngOnInit(): void {
    this.idNum();
    this.getItem();
  }

  idNum() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getItem() {
    this.service.getItemData(this.id!).subscribe({
      next: (item) => (this.items = item),
    });
  }

  saveToLocalStorage(id: any) {
    localStorage.setItem(`itemId${this.id}`, JSON.stringify(id));
  }
}
