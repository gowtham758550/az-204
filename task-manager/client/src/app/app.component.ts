import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { AppService, HealtzResponse } from './app.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    @if (serverStatus) {
      {{ serverStatus }}
    } @else {
     Loading
    }
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'client';
  serverStatus: string | null = null;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getHealthStatus().subscribe({
      next: (response: HealtzResponse) => {
        this.serverStatus = response.status;
      },
      error: () => {
        this.serverStatus = 'Error fetching server status';
      },
    });
  }
}
