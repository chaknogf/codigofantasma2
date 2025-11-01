import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconService } from '../service/icon.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ContactoComponent implements OnInit {
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
      github: this.iconservice.getIcon("github"),
      linkedin: iconservice.getIcon("linkedinIcon")

    }
  }
  ngOnInit() {
  }

}
