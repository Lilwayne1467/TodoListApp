import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
    todoList: any = []

     
    /*
     [ {
      itemName : 'Programando',
      itemDeuDate: '03-01-2022',
      itemPriority: 'Alta',
      itemCategory: 'Proyectos'
    },
    {
      itemName : 'Diseñando',
      itemDeuDate: '23-01-25',
      itemPriority: 'Baja',
      itemCategory: 'Diseños'
    },
    {
      itemName : 'Comprando',
      itemDeuDate: '28-01-25',
      itemPriority: 'Intermedia',
      itemCategory: 'Personales'
    },
    {
      itemName : 'Ejercitando',
      itemDeuDate: '11-01-25',
      itemPriority: 'Baja',
      itemCategory: 'Personales'
    }
  ]
  */

  today : number = Date.now();


  constructor(public modalCtrl: ModalController) {}

  async AddTask() {
    const modal = await this.modalCtrl.create ({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then((newTaskObj : any) =>{
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })

    return await modal.present()
  }

  delete(index:any) {
    this.todoList.splice(index, 1)
  }

}
