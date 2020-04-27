import { Injectable } from '@angular/core';
import { Random } from '../models/Random';
@Injectable({
	providedIn: 'root'
})
export class RandomService {

	randomList: Random[] = [];
	localStorageName: string = 'randomStorage';
	constructor() {
		if (localStorage.getItem(this.localStorageName)) {
			this.randomList = JSON.parse(localStorage.getItem(this.localStorageName));
		} else {
			localStorage.setItem(this.localStorageName, JSON.stringify([]));
			this.randomList = JSON.parse(localStorage.getItem(this.localStorageName));
		}
	}
	saveToLocalStorage(): void {
		localStorage.setItem(this.localStorageName, JSON.stringify(this.randomList));
	}
	getRandoms(): Random[] {
		return this.randomList;
	}
	getNewId(): number {
		return this.randomList.length > 0 ? this.randomList[this.randomList.length - 1].id + 1 : 0;
	}
	addRandom(random: Random): void {
		this.randomList.push(random);
		this.saveToLocalStorage();
	}
	addRandomElement(randomId: number, newElement: string): void {
		const index = this.randomList.indexOf(this.randomList.filter(re => re.id == randomId)[0]);
		this.randomList[index].body.push(newElement);
		this.saveToLocalStorage();
	}
	deleteRandom(id: number): void {
		this.randomList = this.randomList.filter(r => r.id != id);
		this.saveToLocalStorage();
	}
	deleteRandomElement(id: number, element: string): void {
		const index = this.randomList.indexOf(this.randomList.filter(re => re.id == id)[0]);
		this.randomList[index].body = this.randomList[index].body.filter(re => re != element);
		this.saveToLocalStorage();
	}
	editRandom(randomId: number, newName: string) {
		const index = this.randomList.indexOf(this.randomList.filter(re => re.id == randomId)[0]);
		this.randomList[index].title = newName;
		this.saveToLocalStorage();
	}
	editRandomElement(randomId: number, elementIndex: number, newName: string): void {
		const index = this.randomList.indexOf(this.randomList.filter(re => re.id == randomId)[0]);
		this.randomList[index].body[elementIndex] = newName;
		this.saveToLocalStorage();
	}
}
