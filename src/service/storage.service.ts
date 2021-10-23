import { STORAGE_KEYS } from './../config/storage_keys_config';
import { Injectable } from "@angular/core";
import { LocalUser } from "src/model/local_user";
import  jwt_decode from 'jwt-decode'

@Injectable( {
    providedIn: 'root'
    
})
export class StorageService {

    getLocalUser(): LocalUser {
        let user = localStorage.getItem(STORAGE_KEYS.localUser)
        if(user == null) {
           return null as any
        } else {
            return JSON.parse(user)
        }
    }
    getToken():string {
        return localStorage.getItem(STORAGE_KEYS.localUser) as any
    }
    setLocalUser(obj: LocalUser) {
        if(obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser)
        } else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj))
        }
    }
    public decodePayLoadJWT(): any {
        try {
            return jwt_decode(this.getToken() as any)
        } catch (error) {
            return null as any
        }
    }
}