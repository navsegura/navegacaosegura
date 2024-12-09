import { TOKEN_KEY } from "../utils/system";

export function save(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function get() {
    return localStorage.getItem(TOKEN_KEY);
}

export function remove() {
    localStorage.removeItem(TOKEN_KEY);
}