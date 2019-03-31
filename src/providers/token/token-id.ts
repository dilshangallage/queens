/**
 * Created by dilshan on 3/31/19.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class TokenIDProvider {
    public refreshTokenExpTime: string;
    public userId: string;
    public accessTokenExpTime: string;
    public token: string;
    public refreshToken: string;
        constructor() {
            this.token = '';
        }

     // set current token //
    setCurrentToken(obj: any) {
            if (obj) {
                if (obj['token']) {
                    this.token = obj['token'];
                }
            }
    }

    // get current token //
    getCurrentToken() {
            return this.token;
    }
}