import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Random } from 'src/app/models/Random';
import { RandomService } from 'src/app/services/random.service';

@Component({
	selector: 'app-add-random',
	templateUrl: './add-random.component.html',
	styleUrls: ['./add-random.component.scss']
})
export class AddRandomComponent implements OnInit {
	@Output() emmit = new EventEmitter<any>();
	newRandom: Random;
	bodyString: string;

	constructor(private randomService: RandomService) { }

	ngOnInit(): void {
		this.newRandom = {
			id: this.randomService.getNewId(),
			title: '',
			body: ['']
		}
		this.bodyString = '';
	}
	addRandom() {
		this.newRandom.body = this.bodyString.split(',');
		this.randomService.addRandom(this.newRandom);
		this.ngOnInit();
		this.emmit.next();
	}
}
