import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvasService } from '../provas.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {

  musicas = null;
  lista = null;

  constructor(private provas$: ProvasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.provas$.lista()
      .pipe(
        map( musicas => musicas)
      )
      .subscribe(musicas => this.musicas = musicas);
    
  }
}
