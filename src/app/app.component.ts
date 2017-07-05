import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    
  `],
  template: `
  <header>
  <nav class="navbar navbar-inverse">
  <div class="navbar-header">
    <a href="/" class="navbar-brand">My Angular App!</a>
    </div>
    </nav>
    </header>

    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>

    <p> The user is {{ user.name }} also known as {{ user.username }}. 😝</p>

    <footer class="text-center">
    CopyRight &copy; 2016
    </footer>
  `
})
export class AppComponent {
  message = 'Hey its a LIVE!.';
  user= {
    id: 25,
    name: 'Jess',
    username: 'mz_lovelyJ'
  }
}