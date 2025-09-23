import { Component, signal } from '@angular/core';

interface Character { 
    id: number;
    name: string;
    power: number;
}

@Component({
    templateUrl: './dragoball-page.component.html',
    imports: [
        // NgClass
    ],    
})

export class DragonBallPageComponent { 

    name = signal('');
    power = signal(0);

    characters = signal<Character[]>([
        { id: 1,  name: 'Goku', power: 9001 },
        // { id: 2, name: 'Vegeta', power: 8500 },
        // { id: 3, name: 'Gohan', power: 7000 },
        // { id: 4, name: 'Trunks', power: 6000 },
    ])

    // powerClasses = computed(() => { 
    //     return {
    //         'text-danger':true
    //     }
    // })

    addCharacter(): void { 
        if (!this.name() || !this.power() || this.power() <= 0) return;
        
        const newCharacter: Character = { 
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        }

        this.characters.update(characters => [newCharacter, ...characters]);
        this.resetFields();
    }

    resetFields(): void { 
        this.name.set('');
        this.power.set(0);
    }
}