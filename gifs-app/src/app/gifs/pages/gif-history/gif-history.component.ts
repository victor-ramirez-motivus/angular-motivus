import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  gifsSevice = inject(GifsService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(({ query }) => query)
    )
  )

  history = computed(()=> this.gifsSevice.getSearchHistory(this.query()) );
  
}
