import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { EquipamentoComponent } from './components/equipamento/equipamento.component';

const COMPONENTS = [SidebarComponent, HeaderComponent, EquipamentoComponent];

@Component({
  selector: 'app-root',
  imports: [...COMPONENTS, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-2';
}
