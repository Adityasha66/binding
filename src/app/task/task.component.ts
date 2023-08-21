import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  title = 'hello i am aditya';
  hobbies = 'coding,etc';
  address = 'ghaziabad';
  Name: string = 'Name'
  Great: string = 'Great'

  isDisables: Boolean = true;
  constructor() {
    setTimeout(() => {
      this.isDisables = false;
    }, 2500)
  }
  clicked() {
    console.log('clicked sucessfully');
    alert('clicked sucessfully');
  }

  Done(data: any) {
    this.Name = data.target.value;

  }
}
