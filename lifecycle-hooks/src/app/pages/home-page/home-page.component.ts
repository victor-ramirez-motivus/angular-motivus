import { afterNextRender, afterRender, ChangeDetectionStrategy, Component, effect, OnChanges, OnInit, signal } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')} `,
    'color: #bada55'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit, OnChanges {
  traditionalProperty = 'Victor';
  signalProperty = signal('Victor');

  constructor() {
    console.log('HomePageComponent constructor');

    // setTimeout(() => {
    //   // this.traditionalProperty = 'Ramirez';
    //   this.signalProperty.set('Ramirez');

    //   console.log('hecho');
    // }, 2000);
  }

  changeTraditional() {
    this.traditionalProperty = 'Victor Ramirez';
  }

  changeSignal() {
    this.signalProperty.set('Victor Ramirez');
  }

  basicEffect = effect((onCleanup) => {
    log('effect', 'Disparar efectos secundarios');

    onCleanup(() => {
      log('onCleanup', 'Se ejecuta cuando el efecto se va a destruir');
    });
  });

  //Runs once after Angular has initialized all the component's inputs.
  ngOnInit() { 
    log('ngOnInit', 'ngOnInit');
  }	

  //	Runs every time the component's inputs have changed.
  ngOnChanges() {
    log('ngOnChanges', 'ngOnChanges');
  } 

  //	Runs every time this component is checked for changes.
  ngDoCheck() {
    log('ngDoCheck', 'ngDoCheck');
  } 

   //	Runs once after the component's content has been initialized.
  ngAfterContentInit() {
    log('ngAfterContentInit', 'ngAfterContentInit');
  }

   //	Runs every time this component content has been checked for changes.
  ngAfterContentChecked() {
    log('ngAfterContentChecked', 'ngAfterContentChecked');
  }

  //	Runs once after the component's view has been initialized.
  ngAfterViewInit() {
    log('ngAfterViewInit', 'ngAfterViewInit');
  } 

  // Runs every time the component's view has been checked for changes.
  ngAfterViewChecked() {
    log('ngAfterViewChecked', 'ngAfterViewChecked');
  }

  //	Runs once before the component is destroyed.
  ngOnDestroy() {
    log('ngOnDestroy', 'ngOnDestroy');
  }

  // Runs once the next time that all components have been rendered to the DOM.
  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRender',
      'Runs once the next time that all components have been rendered to the DOM.'
    );
  });

  //Runs every time all components have been rendered to the DOM.
  afterRender = afterRender(() => {
    log(
      'afterRender',
      'Runs every time all components have been rendered to the DOM.'
    );
  });
}
