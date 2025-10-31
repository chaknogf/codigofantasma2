import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconService } from '../service/icon.service';
import { HeroComponent } from "../hero/hero.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { PortafolioComponent } from "../portafolio/portafolio.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactoComponent } from "../contacto/contacto.component";
import { Hero2Component } from "../hero2/hero2.component";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [CommonModule, HeroComponent, ServiciosComponent, PortafolioComponent, FooterComponent, ContactoComponent, Hero2Component]
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





}
