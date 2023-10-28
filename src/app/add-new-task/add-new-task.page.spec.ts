import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddNewTaskPage } from './add-new-task.page';
import { IonicModule } from '@ionic/angular';

describe('AddNewTaskPage', () => {
  let component: AddNewTaskPage;
  let fixture: ComponentFixture<AddNewTaskPage>;

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ AddNewTaskPage ],
        imports: [IonicModule.forRoot()]
      })

    fixture = TestBed.createComponent(AddNewTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
}));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
