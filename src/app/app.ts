import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  password = '';
  letters = false;
  numbers = false;
  symbols = false;
  length = 0;

  handleLengthChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.length = parseInt(input.value, 10);
  }

  generate() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let validChars = '';

    if (this.letters) {
      validChars += letters;
    }

    if (this.numbers) {
      validChars += numbers;
    }

    if (this.symbols) {
      validChars += symbols;
    }

    let aux: string = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      aux += validChars[index];
    }

    this.password = aux;
  }
}
