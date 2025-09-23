import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballCharacterAddComponent } from "../../components/dragonball/dragonball-character-add/dragonball-character-add.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
    templateUrl: './dragoball-super-page.component.html',
    imports: [
        CharacterListComponent,
        DragonballCharacterAddComponent
    ],
    selector:'dragonball-super'
})

export class DragonBallSuperPageComponent { 
    dagonballService = inject(DragonballService);

}