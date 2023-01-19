import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private _http: HttpClient) {}

  public surveys() {
    return this._http.get(`${baseUrl}/quiz/`);
  }

  public addSurveys(quiz: any) {
    return this._http.post(`${baseUrl}/quiz/`, quiz);
  }

  public deleteSurveys(qId: any) {
    return this._http.delete(`${baseUrl}/quiz/${qId}`);
  }

  public getSurveys(qId: any) {
    return this._http.get(`${baseUrl}/quiz/${qId}`);
  }

  public updateSurveys(quiz: any) {
    return this._http.put(`${baseUrl}/quiz/`, quiz);
  }


  public getSurveysOfCategory(cid: any) {
    return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  }
  

  public getActiveQuizzes() {
    return this._http.get(`${baseUrl}/quiz/active`);
  }


  public getActiveSurvyesOfCategory(cid: any) {
    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }
}
