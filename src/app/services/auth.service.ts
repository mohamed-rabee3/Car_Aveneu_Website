import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [];
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor() {
    this.loadCurrentUser();
  }

  private loadCurrentUser(): void {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): Observable<boolean> {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return of(true);
    }

    return of(false);
  }

  register(user: Omit<User, 'id'>): Observable<boolean> {
    if (this.users.some((u) => u.email === user.email)) {
      return of(false);
    }

    const newUser: User = {
      ...user,
      id: this.users.length + 1,
    };

    this.users.push(newUser);
    return of(true);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
}
