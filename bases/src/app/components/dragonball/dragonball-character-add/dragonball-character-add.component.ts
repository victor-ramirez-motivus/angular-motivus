import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballCharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter(): void { 
    if (!this.name() || !this.power() || this.power() <= 0) return;
            
    const newCharacter: Character = { 
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power()
    }
    
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(): void { 
        this.name.set('');
        this.power.set(0);
    }

}
