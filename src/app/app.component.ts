import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo List';

  list:any[] =[];
  doneList:any[] =[];
  inputValue = {
    content: "",
  }
  editValue: boolean = false;
  inputId:number =0;

  addtask(item: string){
    if (this.inputValue.content != "") {
      this.list.push({id:this.list.length,name: item});
      this.inputValue.content = "";
      console.log("item",item,"this.list",this.list);
    }
  }
  removeTask(id:number){
    this.list = this.list.filter(item=>item.id!==id);
    this.editValue =false;
    this.inputValue.content = "";
  }
  editTask(task:any){
    this.editValue =true;
    this.inputValue.content = task.name;
    this.inputId = task.id;
  }
  updateTask(item: string){
    this.list[this.inputId].name = item;
    this.inputValue.content = "";
    this.editValue =false;
  }
  doneTask(task: any){
    this.inputValue.content = "";
    this.doneList.push(task);
    this.list = this.list.filter(listItem=>listItem.id!==task.id);
    console.log(task,"this.doneList",this.doneList);
  }
}
