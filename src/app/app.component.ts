import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { track } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // 🔹 Enviar evento cuando cambia la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        track('page_view', { path: event.urlAfterRedirects });
      }
    });

    // 🔹 Ejemplo de evento personalizado
    track('app_start', { timestamp: new Date().toISOString() });
  }
}
