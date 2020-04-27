import { Component, OnInit } from '@angular/core';
import { RandomService } from 'src/app/services/random.service';
import { Random } from 'src/app/models/Random';

@Component({
	selector: 'app-random-list',
	templateUrl: './random-list.component.html',
	styleUrls: ['./random-list.component.scss']
})
export class RandomListComponent implements OnInit {

	randomList: Random[];

	constructor(private randomService: RandomService) { }

	ngOnInit(): void {
		this.randomList = this.randomService.getRandoms();
	}

}
