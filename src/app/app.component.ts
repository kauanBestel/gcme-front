import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { EquipamentoComponent } from './components/equipamento/equipamento.component';
import { MatDividerModule } from '@angular/material/divider';
import { AddEquipButtonComponent } from './components/equipamento/add-equip-button/addEquip-button.component';

const COMPONENTS = [
  AddEquipButtonComponent,
  SidebarComponent,
  HeaderComponent,
  EquipamentoComponent,
  MatDividerModule,
];

@Component({
  selector: 'app-root',
  imports: [...COMPONENTS, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'GCME';
}
