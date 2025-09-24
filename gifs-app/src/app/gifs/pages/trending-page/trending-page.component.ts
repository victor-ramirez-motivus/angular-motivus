import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent {
  // imageUrls = [
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  //   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
  // ]

  gifsService = inject(GifsService)
}
