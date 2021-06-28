import { Observable } from 'rxjs';

export interface CrudService{
  getAll(): Observable<any>;

  add(article): Observable<any>;

  update(article): Observable<any>;

  delete(id): Observable<any>;

}
