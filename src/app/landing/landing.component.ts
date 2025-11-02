import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconService } from '../service/icon.service';
import { HeroComponent } from "../hero/hero.component";
import { PortafolioComponent } from "../portafolio/portafolio.component";
import { ContactoComponent } from "../contacto/contacto.component";
import { AboutComponent } from '../about/about.component';
import { HabilidadesComponent } from "../habilidades/habilidades.component";
import { Hero2Component } from "../hero-2/hero2.component";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [CommonModule, PortafolioComponent, ContactoComponent, AboutComponent, HabilidadesComponent, Hero2Component]
})
export class LandingComponent implements OnInit {
  options: { nombre: string; descripcion: string; ruta: string; icon: string }[] = [];
  icons: { [key: string]: any } = {};

  constructor(
    private iconservice: IconService
  ) {

    this.icons = {
      globe: this.iconservice.getIcon("globelIcon"),
      smartphone: this.iconservice.getIcon("smartphoneIcon"),
      code: this.iconservice.getIcon("codeIcon"),
      computer: this.iconservice.getIcon("computerIcon"),
      mail: this.iconservice.getIcon("mailIcon"),
      github: this.iconservice.getIcon("github")

    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const linterna = document.querySelector('.linterna') as HTMLElement;

    document.addEventListener('mousemove', (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth * 100;
      const y = e.clientY / window.innerHeight * 100;

      linterna.style.background = `
      radial-gradient(circle at ${x}% ${y}%,
        rgba(255,255,255,0.2) 0%,
        rgba(0,0,0,0.95) 25%,
        rgba(0,0,0,1) 60%)
    `;
    });
  }




}
