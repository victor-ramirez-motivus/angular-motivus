import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { map } from 'rxjs';
import { Gif } from '../interfaces/gif.interface';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifsService {

    private http = inject(HttpClient)

    trendingGifs = signal<Gif[]>([])
    trendingGifsLoading = signal(true)

    constructor() { 
        this.loadTrendingGifs();
    }

    loadTrendingGifs() { 
        this.http.get<GiphyResponse>(`${environment.gifUrl}/gifs/trending`, {
            params: {
                api_key: environment.gifApikey,
                limit: 20
            }
        }).subscribe((resp) => {
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.trendingGifsLoading.set(false);
            this.trendingGifs.set(gifs);   
        });
    }

    searchGifs(query: string) {
        return this.http.get<GiphyResponse>(`${environment.gifUrl}/gifs/search`, {
            params: {
                api_key: environment.gifApikey,
                q: query,
                limit: 20
            }
        }).pipe(
            map(({data}) => data),
            map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

            //TODO: Historial de busquedas (localStorage)
        )
            
        // .subscribe((resp) => {
        //     const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        //     this.searchGifsLoading.set(false);
        //     this.searchGifsItems.set(gifs);
        // });
    }
}