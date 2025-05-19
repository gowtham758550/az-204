import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HealtzResponse {
    status: string;
}

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private baseUrl: string = 'http://localhost:5213';

    constructor(private http: HttpClient) { }

    getHealthStatus(): Observable<HealtzResponse> {
        return this.http.get<HealtzResponse>(`${this.baseUrl}/healthz`);
    }
}