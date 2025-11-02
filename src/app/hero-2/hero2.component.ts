import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Hero2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // Crear efectos de fondo dinámicos
    const backgroundEffects = document.getElementById('backgroundEffects') as HTMLElement | null;
    if (!backgroundEffects) {
      console.warn('Elemento con id "backgroundEffects" no encontrado.');
      return;
    }

    // Crear chispas eléctricas
    for (let i = 0; i < 15; i++) {
      const spark = document.createElement('div');
      spark.classList.add('electric-spark');
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.animationDelay = `${Math.random() * 3}s`;
      backgroundEffects.appendChild(spark);
    }

    // Crear partículas de fuego
    for (let i = 0; i < 30; i++) {
      const fire = document.createElement('div');
      fire.classList.add('fire-particle');
      fire.style.left = `${Math.random() * 100}%`;
      fire.style.animationDelay = `${Math.random() * 4}s`;
      backgroundEffects.appendChild(fire);
    }
  }

  // parallax.ts
  parallax() {
    document.addEventListener('DOMContentLoaded', () => {
      const layers = document.querySelectorAll<HTMLElement>('.parallax');

      const handleMouseMove = (event: MouseEvent): void => {
        const { innerWidth, innerHeight } = window;
        const x = event.clientX - innerWidth / 2;
        const y = event.clientY - innerHeight / 2;

        layers.forEach((layer) => {
          const speedAttr = layer.getAttribute('data-speed');
          const speed = speedAttr ? parseFloat(speedAttr) : 0.05;
          const translateX = -(x * speed);
          const translateY = -(y * speed);

          layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(1.2)`;
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Si deseas efecto suave con scroll también
      const handleScroll = (): void => {
        const scrollTop = window.scrollY;
        layers.forEach((layer) => {
          const speedAttr = layer.getAttribute('data-scroll-speed');
          const scrollSpeed = speedAttr ? parseFloat(speedAttr) : 0.2;
          layer.style.transform += ` translateY(${scrollTop * scrollSpeed}px)`;
        });
      };

      window.addEventListener('scroll', handleScroll);
    });

  }




}
