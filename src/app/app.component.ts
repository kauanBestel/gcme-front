import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { EquipamentoComponent } from './components/equipamento/equipamento.component';
import { MatDividerModule } from '@angular/material/divider';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

const COMPONENTS = [
  SearchBarComponent,
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
