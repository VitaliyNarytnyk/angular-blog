import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "app/shared/components/interfaces";
import { environment } from "environments/environment";
import { FbAuthResponse } from "environments/interface";
import { Observable, tap } from "rxjs";

@Injectable()
export class AuthService {
	constructor(private http: HttpClient) { }

	get token(): string {
		return ''
	}

	login(user: User): Observable<any> {
		return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
			.pipe(
				tap(this.setToken)
			)
	}

	logout() {

	}

	isAuthenticated(): boolean {
		return !!this.token
	}

	private setToken(response: FbAuthResponse) {
		console.log(response)
	}
}