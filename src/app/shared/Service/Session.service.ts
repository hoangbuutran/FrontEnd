import { Injectable } from '@angular/core';

@Injectable()

export class SessionService {

    saveToLocalStorage(userModel) {
        window.localStorage.setItem('userModel', JSON.stringify(userModel));
    }

    getLocalStorage() {
        if (window.localStorage.getItem('userModel') === null) {
            return false;
        } else {
            return JSON.parse(window.localStorage.getItem('userModel'));
        }

    }
}
