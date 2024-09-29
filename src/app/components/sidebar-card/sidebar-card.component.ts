import { Component, Input } from '@angular/core';
import { SidebarCard } from '../../models/sidebar-card.model';

@Component({
  selector: 'app-sidebar-card',
  templateUrl: './sidebar-card.component.html',
  styleUrl: './sidebar-card.component.css'
})
export class SidebarCardComponent {
  @Input() cardData!: SidebarCard;
}
