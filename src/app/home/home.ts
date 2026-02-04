import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  produtos = [
    { 
      nome: 'Teclado',
      preco: 150,
      imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRC8IwXyJlYKhNWQiH3Y_f_z_34rE84S0RplrqYfjfFecryNsoetpHeBILO0kOs4GxrsLWNG92QbcCil9iVQnn0IicDMvEvky7On-RRut5sMlsHsjqFJK_-TA"
    },
    {
      nome: 'Mouse',
      preco: 80,
      imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTfnXlwidletab17PO-Fib43N9_iGZUhOOhX4-EOdgq6g6j-TJ__L6vYI1lrkYBENut6d6oWhzjqY2uH4-P66EVbhveOrtn2o5FYb4916SghqZwEXpaTI26"
    },
    {
      nome: 'Dark Souls 1 Remastered',
      preco: 100,
      imagem: "https://sm.ign.com/t/ign_ap/gallery/d/dark-souls/dark-souls-remastered-box-art_v6sv.1200.jpg"
    },
    {
      nome: 'Elden Ring',
      preco: 250,
      imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0d/Elden_Ring_capa.jpg/330px-Elden_Ring_capa.jpg" 
    }
  ]
}
