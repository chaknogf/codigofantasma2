import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconService } from '../service/icon.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HabilidadesComponent implements OnInit {
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
      palette: iconservice.getIcon("paletteIcon"),
      server: iconservice.getIcon("serveIcon"),
      linux: iconservice.getIcon("linuxIcon")

    }
  }

  ngOnInit() {
  }

  servicios = [
    {
      icon: 'globe',
      titulo: 'Páginas Web',
      descripcion: 'Diseños modernos, responsivos y optimizados para tu negocio.'
    },
    {
      icon: 'smartphone',
      titulo: 'Apps Móviles',
      descripcion: 'Aplicaciones rápidas y seguras para Android y iOS.'
    },
    {
      icon: 'code',
      titulo: 'Sistemas Personalizados',
      descripcion: 'Automatización, dashboards y APIs adaptadas a tu empresa.'
    }
  ];

  habilidades = [
    {
      nombre: 'Desarrollo Web',
      descripcion: 'Frontend y backend con tecnologías modernas como Angular, FastAPI y Node.js.',
      icono: 'code'
    },
    {
      nombre: 'Diseño UI/UX',
      descripcion: 'Interfaces limpias, coherentes y centradas en la experiencia del usuario.',
      icono: 'palette'
    },
    {
      nombre: 'DevOps & Infraestructura',
      descripcion: 'Gestión de servidores, CI/CD, Nginx, Docker y despliegues escalables.',
      icono: 'server'
    },
    // {
    //   nombre: 'Seguridad & Criptografía',
    //   descripcion: 'Integración de firmas digitales, autenticación segura y buenas prácticas.',
    //   icono: 'shield'
    // },
    // {
    //   nombre: 'Análisis de Datos',
    //   descripcion: 'Modelado, visualización y aprendizaje automático aplicado a proyectos reales.',
    //   icono: 'chart'
    // }
  ];
}
