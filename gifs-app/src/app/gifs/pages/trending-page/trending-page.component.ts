import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  // imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent implements AfterViewInit {

  gifsService = inject(GifsService)
  scrollStateService = inject(ScrollStateService)

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return;

    // Medición de scroll
    const scrollTop = scrollDiv.scrollTop;
    const clientHight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;


    const isAtBottom = (scrollTop + clientHight) + 300 >= scrollHeight;

    this.scrollStateService.trendingScrollState.set(scrollTop);

    if(isAtBottom) this.gifsService.loadTrendingGifs();
  }
}
