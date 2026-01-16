import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('password-gen');

  ngOnInit(): void {
    console.log('App initialized');
    this.title.set('Password Generatodddr');

    console.log(this.title);

    this.title.prototype = 'dadasda';
  }
}
