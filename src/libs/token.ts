export class Token {
  static getToken(key: string) {
    return window.localStorage.getItem(key);
  }

  static setToken(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  static removeToken(key: string) {
    window.localStorage.removeItem(key);
  }
}
