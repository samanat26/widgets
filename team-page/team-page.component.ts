import { Component } from '@angular/core';
import { data } from './team.data';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss'],
})
export class TeamPageComponent {
  val: any;
  value: boolean = false;
  selectedValue: any;
  default: any;

  ngOnInit() {
    this.val = data;
    // this.default = this.val;
  }
  moveLeft(i: any) {
    if (i > 0) {
      let temp = this.val.images[i];
      this.val.images[i] = this.val.images[i - 1];
      this.val.images[i - 1] = temp;
    }
    // throw new Error('Method not implemented.');
  }

  moveRight(i: any) {
    if (i < this.val.images.length) {
      let temp = this.val.images[i];
      this.val.images[i] = this.val.images[i + 1];
      this.val.images[i + 1] = temp;
    }
    // throw new Error('Method not implemented.');
  }

  add(i: any) {
    let temp = this.val.images;
    let temp2 = this.val.images[i];
    temp.splice(i + 1, 0, temp2);
    // save();
  }

  del(i: any) {
    let temp = this.val.images;
    temp.splice(i, 1);
    // save();
  }
  onClick(i: any) {
    console.log('clicked');
    this.value = !this.value;
    this.selectedValue = i;
  }
}
