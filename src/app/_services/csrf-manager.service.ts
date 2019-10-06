import { CSRFCookieModel } from '../_models/csrf-cookie.model';

export class CSRFManagerService {
    getToken() {
        return CSRFCookieModel.csrfToken;
    }

    setToken(token: string) {
        CSRFCookieModel.csrfToken = token;
    }
}