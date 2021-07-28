class localStorageService {
  storage = window.localStorage

  setItem(key, value) {
    value = JSON.stringify(value)
    this.storage.setItem(key, value)
    return true
  }

  getItem(key) {
    let value = this.storage.getItem(key)
    try {
      return JSON.parse(value)
    } catch (e) {
      return null
    }
  }

}

export default new localStorageService();
