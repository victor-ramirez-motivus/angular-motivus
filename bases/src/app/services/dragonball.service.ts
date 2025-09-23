import { effect, Injectable, signal } from '@angular/core';
import type { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => { 
    const characters = localStorage.getItem('characters');

    if (!characters) return [];
    
    const localStorageObj = JSON.parse(characters);
    
    if (!Array.isArray(localStorageObj)) return [];

    return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {
    characters = signal<Character[]>(loadFromLocalStorage());

    // Guardar en el local storage cada vez que characters cambie
    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));  
    })

    addCharacter(newCharacter: Character): void { 
        this.characters.update(characters => [newCharacter, ...characters]);
    }
}