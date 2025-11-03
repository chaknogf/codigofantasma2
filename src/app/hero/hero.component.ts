import { Component, OnInit } from '@angular/core';
import { IconService } from '../service/icon.service';
import { whatsappIcon } from '../shared/svg-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HeroComponent implements OnInit {
  options: { nombre: string; descripcion: string; ruta: string; icon: string }[] = [];
  icons: { [key: string]: any } = {};
  mailme: string = 'chaknogf@gmail.com'
  nombre = 'Ronald Chacón';
  titulo = 'Desarrollador Fullstack & Arquitecto de Sistemas';
  descripcion = 'Creo soluciones digitales con propósito, fusionando tecnología, diseño y estrategia.';
  aboutMe = 'Sobre mí';
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
      icono: 'css'
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
    }
  ]





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
      brain: this.iconservice.getIcon("brainIcon"),
      linkedin: iconservice.getIcon("linkedinIcon"),
      palette: iconservice.getIcon("paletteIcon"),
      server: iconservice.getIcon("serveIcon"),
      linux: iconservice.getIcon("linuxIcon"),
      smartphone: this.iconservice.getIcon("smartphoneIcon"),
      css: iconservice.getIcon("cssIcom"),
      responsive: iconservice.getIcon("responsiveIcon"),
      html: iconservice.getIcon("htmlicon")


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
