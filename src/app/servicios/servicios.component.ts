import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IconService } from '../service/icon.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ServiciosComponent implements OnInit {
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


}
