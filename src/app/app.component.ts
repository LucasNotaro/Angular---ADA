import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from "./rodape/rodape.component";
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { HomeComponent } from "./home/home.component";
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { HeaderMaterialComponent } from "./header-material/header-material.component";
import { BookComponent } from "./book/book.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RodapeComponent, CabecalhoComponent, HomeComponent, MenuLateralComponent, HeaderMaterialComponent, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Coders';
}
