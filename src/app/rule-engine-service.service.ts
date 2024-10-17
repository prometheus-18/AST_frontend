import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RuleEngineService {
  private apiUrl = 'http://localhost:3000'; // Adjust this to match your backend URL

  constructor(private http: HttpClient) {}

  // Create a new rule using the API
  createRule(ruleData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/rules/create`, ruleData);
  }

  // Evaluate the rule using the API
  evaluateRule(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/rules/evaluate`, data);
  }
}
