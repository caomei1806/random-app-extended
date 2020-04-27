import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Random } from 'src/app/models/Random';
import { RandomService } from 'src/app/services/random.service';

@Component({
	selector: 'app-random',
	templateUrl: './random.component.html',
	styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

	constructor(private randomService: RandomService) { }
	panelShown: boolean = false;
	panelEdit: boolean = false;
	panelAdd: boolean = false;
	editElementPanelShown: boolean[] = [];
	editedElementInput: string;
	editedInput: string;
	newElement: string;
	chosenElement: number;

	@Input() random: Random;
	@Output() emmit = new EventEmitter<any>();

	ngOnInit(): void {
		this.random.body.forEach(re => this.editElementPanelShown.push(false));
	}
	resetRandom(): void {
		this.chosenElement = null;
	}
	togglePanel(): void {
		this.panelShown = !this.panelShown;
	}
	toggleEdit(): void {
		this.panelEdit = !this.panelEdit;
		this.editedInput = this.random.title;
	}
	toggleAdd(): void {
		this.panelAdd = !this.panelAdd;
	}
	deleteRandom(): void {
		this.randomService.deleteRandom(this.random.id);
		this.emmit.next();
	}
	deleteRandomElement(element): void {
		this.randomService.deleteRandomElement(this.random.id, this.random.body[this.random.body.indexOf(element)]);
	}
	toggleEditRandom(index: number): void {
		this.editElementPanelShown[index] = !this.editElementPanelShown[index];
		this.editedElementInput = this.random.body[index];
	}
	editElement(elementIndex: number): void {
		this.randomService.editRandomElement(this.random.id, elementIndex, this.editedElementInput);
	}
	editRandom(): void {
		this.randomService.editRandom(this.random.id, this.editedInput);
	}
	addElement(): void {
		this.randomService.addRandomElement(this.random.id, this.newElement);
		this.emmit.next();
		this.newElement = '';
		this.panelAdd = false;
	}
	randomizeElement(): void {
		this.chosenElement = Math.floor(Math.random() * this.random.body.length);
		console.log(this.random.body.length, this.chosenElement);
		setTimeout(() => this.resetRandom(), 5000);
	}
}
