import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">Its Alive!</a>
        </div>
      </nav>
    </header>
    <main>
      <div class="jumbotron">
        <h1>Welcome to Our App!</h1>
        <p>{{ message }}</p>
      </div>
      <div *ngIf="users">
      <div *ngFor="let user of users">
      {{ user.name }} Is also known as UserName: {{ user.username }}
      </div>
      </div>
    </main>
    <footer class="text-center">
      Copyright &copy; 2016
    </footer>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {
  message = 'Hello!';
  users = [
    { id: 25, name: 'Jess', username: 'mz_lovelyJ' },
    { id: 26, name: 'Stephanie', username: 'Steph' },
    { id: 27, name: 'Isabella', username: 'Izi' }
  ];
}