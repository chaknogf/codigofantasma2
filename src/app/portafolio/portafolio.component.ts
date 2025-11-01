import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Proyecto {
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  enlace: string;
}
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PortafolioComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  proyectos = [
    {
      titulo: 'Landing Page para Clínicas Médicas',
      descripcion: 'Diseño y desarrollo de una landing page moderna e intuitiva para clínicas médicas, enfocada en mejorar la presencia digital y captar nuevos pacientes.',
      enlace: 'https://www.cmsables.com/',
      imagen: '/assets/cmsables.avif',
      tecnologias: ['Angular']
    },
    {
      titulo: 'Sistema de Tickets',
      descripcion: 'Plataforma de gestión de solicitudes para Soporte Técnico o cualquier área que requiera control y seguimiento eficiente de peticiones de usuarios.',
      enlace: '#',
      imagen: '/assets/tickets.avif',
      tecnologias: ['Fastapi', 'Angular', 'PostgressSQL', 'Ngingx', 'Linux']
    },
    {
      titulo: 'MedicalApp',
      descripcion: 'Aplicación de gestión hospitalaria que permite el control integral de pacientes, expedientes electrónicos y procesos médicos de forma centralizada.',
      enlace: '#',
      imagen: '/assets/medicalapp.avif',
      tecnologias: ['Fastapi', 'Angular', 'PostgressSQL', 'Ngingx', 'Linux', 'Hl7']
    },
    {
      titulo: 'Tienda de Ropa',
      descripcion: 'Landing page diseñada para una boutique de moda, con un estilo moderno y adaptable a distintas marcas y líneas de ropa femenina.',
      enlace: 'https://lemon-nine-eta.vercel.app/',
      imagen: '/assets/nueva.avif',
      tecnologias: ['Fastapi', 'Angular', 'PostgressSQL']
    },
  ];

}
