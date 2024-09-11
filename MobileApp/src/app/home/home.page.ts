import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { UserListComponentComponent } from '../user-list-component/user-list-component.component';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, UserListComponentComponent],
})
export class HomePage {
  constructor(private userService:UserService) {}
}
