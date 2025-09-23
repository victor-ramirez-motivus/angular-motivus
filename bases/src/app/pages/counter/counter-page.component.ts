import { Component, signal } from "@angular/core";

@Component({
    templateUrl:'./counter-page.component.html',    
    styles: `
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `,

    // Estrategia de detección de cambios OnPush para mejorar el rendimiento
    // changeDetection: ChangeDetectionStrategy.OnPush
})
    
export class CounterPageComponent {
    counter = 10
    counterSignal = signal(10)

    constructor() { 

        // Incrementa el contador cada 2 segundos usando señales
        // setInterval(() => {
        //     this.counterSignal.update(current => current + 1)
        // }, 2000);
    }

    increaseBy(value: number): void { 
        this.counter += value

        this.counterSignal.update(current => current + value)
    }

    resetCounter(): void {
        this.counter = 0

        this.counterSignal.set(0)
    }
}