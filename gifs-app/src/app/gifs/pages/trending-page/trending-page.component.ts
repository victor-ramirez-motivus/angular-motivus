import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  // imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent {

  gifsService = inject(GifsService)

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return;

    // Medición de scroll
    const scrollTop = scrollDiv.scrollTop;
    const clientHight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;


    const isAtBottom = (scrollTop + clientHight) + 300 >= scrollHeight;

    if(isAtBottom) this.gifsService.loadTrendingGifs();
  }
}
