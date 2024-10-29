import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header-material',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header-material.component.html',
  styleUrl: './header-material.component.scss'
})
export class HeaderMaterialComponent {

}
