import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Musica } from './models/musica';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { isNumber } from 'util';


@Injectable({
  providedIn: 'root'
})
export class ProvasService {
  URL = 'assets/musicas.json';

  constructor(private http: HttpClient) {

  }

  lista(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.URL);
  }

  estatistica(musica) {
    return this.lista()
      .pipe(
        map(musicas => {
          if (isNumber(Musica)) {
            return musicas.find(g => g.id == musica);
          } else {
            return musicas.find(g => g.titulo == musica);
          }
        })

      );
  }
}
