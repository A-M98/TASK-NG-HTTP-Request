import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../../data/pets';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../../shared/services/pets.service';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css',
})
export class PetDetailsComponent {
  pet: Pet | null = null;
  private http = inject(HttpClient);
  private petService = inject(PostsService);

  constructor(private route: ActivatedRoute, public router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // this.http
    //   .get<Pet>(
    //     `https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`
    //   )
    //   .subscribe((response) => {
    //     this.pet = response;
    //     if (!this.pet) {
    //       this.router.navigate(['/error']);
    //     }
    //   });
    effect(() => {
      this.petService.getPet(id).subscribe((response) => {
        this.pet = response;
        //console.log(response);
      });
    });

    //   if (!foundPet) {
    //     this.router.navigate(['/pets']);
    //   } else {
    //     this.pet = foundPet;
    //   }
  }
}
