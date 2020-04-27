import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RandomListComponent } from './components/random-list/random-list.component';
import { RandomComponent } from './components/random/random.component';
import { AddRandomComponent } from './components/add-random/add-random.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		RandomListComponent,
		RandomComponent,
		AddRandomComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
