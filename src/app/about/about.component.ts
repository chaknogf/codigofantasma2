import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconService } from '../service/icon.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule]
})
export class AboutComponent {
  titulo = 'Sobre mí';
  parrafos = [
    'Soy un apasionado de la tecnología y la innovación, con una visión integral que combina desarrollo, arquitectura de sistemas y diseño digital.',
    'Disfruto transformar ideas complejas en soluciones simples y efectivas. Me motiva crear herramientas que impacten positivamente la vida de las personas.',
    'Actualmente enfoco mi trabajo en proyectos web, APIs escalables y entornos distribuidos. Cada línea de código es parte de una historia que quiero contar bien.'
  ];

  skills = [
    { icon: 'laptop', label: 'Desarrollo Web Fullstack' },
    { icon: 'gear', label: 'Arquitectura de Sistemas' },
    { icon: 'api', label: 'Integración API / Interoperabilidad' },
    // { icon: 'brain', label: 'IA y Automatización' },
    { icon: 'devops', label: 'DevOps' }
  ];

  options: { nombre: string; descripcion: string; ruta: string; icon: string }[] = [];
  icons: { [key: string]: any } = {};

  constructor(
    private iconservice: IconService
  ) {

    this.icons = {
      globe: this.iconservice.getIcon("globelIcon"),
      devops: this.iconservice.getIcon("devopsIcon"),
      code: this.iconservice.getIcon("codeIcon"),
      computer: this.iconservice.getIcon("computerIcon"),
      mail: this.iconservice.getIcon("mailIcon"),
      github: this.iconservice.getIcon("github"),
      laptop: this.iconservice.getIcon("laptopIcon"),
      gear: this.iconservice.getIcon("gearIcon"),
      api: this.iconservice.getIcon("apiIcon"),
      brain: this.iconservice.getIcon("brainIcon")

    }
  }
}
