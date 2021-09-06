import { Component,  Input } from '@angular/core'
import { Personaje } from '../interfaces/dbz.interface.js'
import { DbzService } from '../services/dbz.service.js'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) {}

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) { return }
    this.dbzService.agregarPersonaje(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
