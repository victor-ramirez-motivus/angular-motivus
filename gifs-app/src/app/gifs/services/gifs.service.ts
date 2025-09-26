import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { map, tap } from 'rxjs';
import { Gif } from '../interfaces/gif.interface';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { GifMapper } from '../mapper/gif.mapper';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
    try {
        const history = localStorage.getItem(GIF_KEY);

        if (!history) return {};

        const gifs = JSON.parse(history);

        if (typeof gifs !== 'object' || Array.isArray(gifs)) return {};

        return gifs;
    } catch (error) {
        console.log({ error });
        return {};
    } 


}

@Injectable({providedIn: 'root'})
export class GifsService {

    private http = inject(HttpClient)

    trendingGifs = signal<Gif[]>([])
    trendingGifsLoading = signal(false)
    private trendingPage = signal(0)

    trendingGifsGroup = computed<Gif[][]>(() => {
        const groups = []

        for (let i = 0; i < this.trendingGifs().length; i += 3) {
            groups.push(this.trendingGifs().slice(i, i + 3));
        }

        return groups;
    });

    searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

    saveGifsToLocalStorage = effect(() => { 
        localStorage.setItem(GIF_KEY, JSON.stringify(this.searchHistory()));
    });

    constructor() { 
        this.loadTrendingGifs();
    }

    loadTrendingGifs() { 
        if (this.trendingGifsLoading()) return;
        
        this.trendingGifsLoading.set(true);

        this.http.get<GiphyResponse>(`${environment.gifUrl}/gifs/trending`, {
            params: {
                api_key: environment.gifApikey,
                limit: 20,
                offset: this.trendingPage() * 20
            }
        }).subscribe((resp) => {
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.trendingGifs.update(current => [...current, ...gifs]);   
            this.trendingPage.update(page => page + 1);
            this.trendingGifsLoading.set(false);
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

            //Historial
            tap(items => { 
                this.searchHistory.update(history => ({
                    ...history,
                    [query.toLowerCase()]: items
                }));
            })
        )
    }

    getSearchHistory(query: string): Gif[] { 
        return this.searchHistory()[query.toLocaleLowerCase()] ?? []; 
    }
}