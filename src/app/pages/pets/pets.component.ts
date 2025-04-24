import { Component, inject, effect } from '@angular/core';
import { PetsHeaderComponent } from '../../components/pets-header/pets-header.component';
import { PetsListComponent } from '../../components/pets-list/pets-list.component';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../../../data/pets';
import { PostsService } from '../../shared/services/pets.service';
//import { pets } from '../../../data/pets';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PetsHeaderComponent, PetsListComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  private petService = inject(PostsService);
  private http = inject(HttpClient);

  query = '';
  allPets: Pet[] = []; // Initialize allPets as an empty array
  // ngOnInit() {
  //   this.http
  //     .get('https://pets-react-query-backend.eapi.joincoded.com/pets')
  //     .subscribe((response) => {
  //       this.allPets = response as Pet[];
  //       //console.log(response);
  //     });
  // }
  constructor() {
    effect(() => {
      this.petService.getPets().subscribe((response) => {
        this.allPets = response as unknown as Pet[];
        //console.log(response);
      });
    });
  }
  setQuery(query: string) {
    this.query = query;
  }

  get filteredPets() {
    return this.allPets.filter((pet) =>
      pet.name.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}
