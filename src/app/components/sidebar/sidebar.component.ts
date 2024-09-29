import { Component } from '@angular/core';
import { SidebarCard } from '../../models/sidebar-card.model';
import { SIDEBARCARDS } from '../../constants/sidebar-card.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarCards: SidebarCard[] = SIDEBARCARDS;
}
