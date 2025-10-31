import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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

  portafolio = [
    {
      titulo: 'Landing Page para Clínicas Médicas',
      descripcion: 'Diseño y desarrollo de una landing page moderna e intuitiva para clínicas médicas, enfocada en mejorar la presencia digital y captar nuevos pacientes.',
      link: 'https://www.cmsables.com/',
      imagen: '/assets/cmsables.avif'
    },
    {
      titulo: 'Sistema de Tickets',
      descripcion: 'Plataforma de gestión de solicitudes para Soporte Técnico o cualquier área que requiera control y seguimiento eficiente de peticiones de usuarios.',
      link: '#',
      imagen: '/assets/tickets.avif'
    },
    {
      titulo: 'MedicalApp',
      descripcion: 'Aplicación de gestión hospitalaria que permite el control integral de pacientes, expedientes electrónicos y procesos médicos de forma centralizada.',
      link: '#',
      imagen: '/assets/medicalapp.avif'
    },
    {
      titulo: 'Tienda de Ropa',
      descripcion: 'Landing page diseñada para una boutique de moda, con un estilo moderno y adaptable a distintas marcas y líneas de ropa femenina.',
      link: 'https://lemon-nine-eta.vercel.app/',
      imagen: '/assets/nueva.avif'
    },
  ];

}
