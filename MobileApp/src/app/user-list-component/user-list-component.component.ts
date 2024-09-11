import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserService } from './../services/user.service';

@Component({
	selector: 'app-user-list-component',
	templateUrl: './user-list-component.component.html',
	styleUrls: ['./user-list-component.component.scss'],
	standalone: true,
	imports: [CommonModule, IonicModule],
})
export class UserListComponentComponent implements OnInit {
	/* users = [
		{ name: 'Derian'},
		{ name: 'Karla'},
		{ name: 'Alejandro'},
		{ name: 'Samanta'},
		{ name: 'Jorge'},
	] */
	users: any[] = [];

	constructor(private userService: UserService){}

	ngOnInit(){
		this.userService.getUsers().subscribe(
			(data) => {
				this.users = data;
			},
			(error) => {
				console.error('Error while fetching users. ', error);
			}
		);
	}
}
