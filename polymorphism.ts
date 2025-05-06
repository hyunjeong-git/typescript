interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key:string, value:T) {
        this.storage[key] = value;
    }
    remove(key:string) {
        delete this.storage[key]
    }
    get(key:string) {
        return this.storage[key]
    }
    clear() {
        this.storage = {}
    }
}


// T => value값 string 지정
const stringStorage = new LocalStorage<string>();
stringStorage.set('temp', 'value');
console.log(stringStorage.get('temp'));

//boolean
const boolStroage = new LocalStorage<boolean>();