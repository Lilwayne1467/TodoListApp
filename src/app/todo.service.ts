import { Injectable } from '@angular/core';
import { ValueAccessor } from '@ionic/angular/common';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) { 
    this.init();
  }

  addTask(key:string,value:any){
    this.storage.set(key, value)
  }

  deleteTask(key: string){
    this.storage.remove(key)
  }

  updateTask(key:string, newValue: any) {
    this.storage.set(key, newValue)
    this.getAllTasks()
  }

  getAllTasks(){
    let task: any = []
    this.storage.forEach((key, value, index) => {
      task.push({'key':value, 'value':key})
    })
    return task;
  }

  async init(){
    await this.storage.create();
  }

}
