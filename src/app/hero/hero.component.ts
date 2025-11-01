import { Component, OnInit } from '@angular/core';
import { IconService } from '../service/icon.service';
import { whatsappIcon } from '../shared/svg-icon';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true
})
export class HeroComponent implements OnInit {
  options: { nombre: string; descripcion: string; ruta: string; icon: string }[] = [];
  icons: { [key: string]: any } = {};
  mailme: string = 'chaknogf@gmail.com'
  nombre = 'Ronald Chacón';
  titulo = 'Desarrollador Fullstack & Arquitecto de Sistemas';
  descripcion = 'Creo soluciones digitales con propósito, fusionando tecnología, diseño y estrategia.';

  constructor(
    private iconservice: IconService
  ) {

    this.icons = {
      whatsapp: this.iconservice.getIcon("whatsappIcon"),
      mail: this.iconservice.getIcon("mailIcon"),
      ghost: this.iconservice.getIcon("ghostIcon")

    }
  }

  ngOnInit() {
  }

  onToggleTheme(event: any) {
    const isDark = event.target.checked;
    const hero = document.getElementById('hero');
    if (hero) {
      hero.classList.toggle('dark-theme', isDark);
    }
  }

}
