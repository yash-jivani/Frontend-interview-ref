// LRU - Least recetly used

class LRU {
    constructor(max = 5) {
        this.max = max;
        this.cache = new Map();
    }

    get(key) {
        /*
            LOGIC: 
            - find key in cache 
                - if exist thn first delete thn add again (marking as a recently used)
        */
        let item = this.cache.get(key);

        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }

    set(key, value) {
        /*
            LOGIC: 
            - if already exists thn first remove it thn add in cache (so that we can get update value as a recently used / marking as recently used)
            - if not exists thn check cache size 
                - if cache reachs the limit thn remove-first ele from cache thn add in cache
        */

        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size === this.max) {
            this.cache.delete(this.removeFirst());
        }

        this.cache.set(key, value);
    }

    // getting 1st key from cache(map object)
    removeFirst() {
        // console.log(this.cache.keys().next().value);
        return this.cache.keys().next().value;
    }
}

const LruCache = new LRU(3);
LruCache.set("name", "yash");
LruCache.set("age", 19);
LruCache.set("email", "yash@gmail.com");

console.log(LruCache.cache);        // order: name, age, email
LruCache.get("name");               // accessing age -> set name as recently used
console.log(LruCache.cache);        // order: age, email, name
LruCache.set("location", "Gujrat"); // adding location -> add location + set location as recently used
console.log(LruCache.cache);        // order: email, name, location 
