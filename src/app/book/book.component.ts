import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})

export class BookComponent {

  livro = {
    titulo: 'A Arte da Guerra',
    autor: 'Sun Tzu',
    anoPublicacao: '1980'
  };

  mostrarAlerta() {
    alert(
      `Título: ${this.livro.titulo}
      \nAutor: ${this.livro.autor}
      \nAno de Publicação: ${this.livro.anoPublicacao}`
    );
  }
}
