import { Component } from '@angular/core'
import { Personaje } from '../interfaces/dbz.interface.js'
import { DbzService } from '../services/dbz.service.js'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  get personajes(): Personaje[] {
    return this.dbzService.personajes
  }

  constructor(private dbzService: DbzService) {}
}
