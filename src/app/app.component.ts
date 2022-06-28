import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo List';
  list:any[] =[];
  inputValue = {
    content: "",
  }
  editValue: boolean = false;
  inputId:number =0;

  addtask(item: string){
    this.list.push({id:this.list.length,name: item});
    this.inputValue.content = "";
    
  }
  removeTask(id:number){
    this.list = this.list.filter(item=>item.id!==id);
  }
  editTask(task:any){
    this.editValue =true;
    this.inputValue.content = task.name;
    this.inputId = task.id;
  }
  updateTask(item: string){
    // this.list = this.list.filter(item=>item.id!==task.id);
    // this.list.push({id:this.list.length,name: task.name});

    //task.name = this.inputValue.content;task

    //const findHero = this.list.find(hero => hero.name == this.inputValue.content);
    this.list[this.inputId].name = item;
    console.log(this.inputValue.content,this.list);
    this.inputValue.content = "";
    this.editValue =false;
  }
}
