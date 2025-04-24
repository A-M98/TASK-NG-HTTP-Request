// post.service.ts
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, Observable, of } from 'rxjs';
import { Pet } from '../../../data/pets';

@Injectable({ providedIn: 'root' })
export class PostsService extends BaseService {
  private apiUrl = 'https://pets-react-query-backend.eapi.joincoded.com/pets';

  getPets(): Observable<Pet[]> {
    return this.get<Pet[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching posts:', error);
        return of([]);
      })
    );
  }

  getPet(id: number): Observable<Pet | null> {
    return this.get<Pet>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching posts:', error);
        return of(null);
      })
    );
  }

  addPet(pet: Pet): Observable<Pet | null> {
    return this.post<Pet>(this.apiUrl, pet).pipe(
      catchError((error) => {
        console.error('Error adding post:', error);
        return of(null);
      })
    );
  }
}
