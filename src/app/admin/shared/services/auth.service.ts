import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { User } from "app/shared/components/interfaces";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
	constructor(private http: HttpClient) { }

	get token(): string {
		return ''
	}

	login(user: User): Observable<any> {
		return this.http.post('', user)
	}

	logout() {

	}

	isAuthenticated(): boolean {
		return !!this.token
	}

	private setToken() {

	}
}