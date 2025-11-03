import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconService } from '../service/icon.service';
import { HeroComponent } from "../hero/hero.component";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [CommonModule, HeroComponent]
})
export class LandingComponent implements OnInit {


  ngOnInit() {
  }





}
