import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "app/shared/components/interfaces";
import { environment } from "environments/environment";
import { FbAuthResponse } from "environments/interface";
import { catchError, Observable, Subject, tap, throwError } from "rxjs";

@Injectable()
export class AuthService {

	public error$: Subject<string> = new Subject<string>()

	constructor(private http: HttpClient) { }

	get token(): string {
		const expDate = new Date(localStorage.getItem('fb-token-exp')!)
		if (new Date() > expDate) {
			this.logout()
			return null!
		}
		return localStorage.getItem('fb-token')!
	}

	login(user: User): Observable<FbAuthResponse | null> {
		user.returnSecureToken = true
		return this.http.post<FbAuthResponse | null>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
			.pipe(
				tap(this.setToken),
				catchError(this.handleError.bind(this))
			)
	}

	logout() {
		this.setToken(null)
	}

	isAuthenticated(): boolean {
		return !!this.token
	}

	private handleError(error: HttpErrorResponse) {
		const { message } = error.error.error

		switch (message) {
			case 'EMAIL_NOT_FOUND':
				this.error$.next('E-mail не знайдено')
				break
			case 'INVALID_EMAIL':
				this.error$.next('Введений невірний E-mail')
				break
			case 'INVALID_PASSWORD':
				this.error$.next('Введений невірний пароль')
				break
		}

		return throwError(error)
	}

	private setToken(response: FbAuthResponse | null) {
		if (response) {
			const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
			localStorage.setItem('fb-token', response.idToken)
			localStorage.setItem('fb-token-exp', expDate.toString())
		} else {
			localStorage.clear()
		}

	}
}