import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { Gif } from '../../interfaces/gif.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {

  gifService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) { 
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }

}
