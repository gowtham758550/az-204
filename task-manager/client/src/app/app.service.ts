import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface HealtzResponse {
    status: string;
}

@Injectable({
    providedIn: 'root',
})
export class AppService {

    constructor(private http: HttpClient) { }

    getHealthStatus(): Observable<HealtzResponse> {
        return this.http.get<HealtzResponse>(`${environment.apiUrl}/healthz`);
    }
}