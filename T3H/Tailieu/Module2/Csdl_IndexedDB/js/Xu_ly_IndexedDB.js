let db = `Ban_Dien_thoai`;
let objStore = `Dien_thoai`;
let dbPromise;

function Tao_Co_so_Du_lieu_indexedDB() {
    dbPromise = idb.open(db, 1, upgradeDB => {
        if (!upgradeDB.objectStoreNames.contains(objStore)) {
            upgradeDB.createObjectStore(objStore);
        };
    });
};

function Xoa_Co_so_Du_lieu_indexedDB() {
    dbPromise = idb.delete(db);
};

function Tao_Du_lieu_indexedDB(Du_lieu) {
    Du_lieu.forEach(Dien_thoai => {
        idbDienthoai.set(Dien_thoai.Ma_so, Dien_thoai);
    });
};


const idbDienthoai = {
    get(key) {
        return dbPromise.then(db => {
            return db.transaction(objStore).objectStore(objStore).get(key);
        });
    },
    set(key, val) {
        return dbPromise.then(db => {
            const tx = db.transaction(objStore, 'readwrite');
            tx.objectStore(objStore).put(val, key);
            return tx.complete;
        });
    },
    delete(key) {
        return dbPromise.then(db => {
            const tx = db.transaction(objStore, 'readwrite');
            tx.objectStore(objStore).delete(key);
            return tx.complete;
        });
    },
    clear() {
        return dbPromise.then(db => {
            const tx = db.transaction(objStore, 'readwrite');
            tx.objectStore(objStore).clear();
            return tx.complete;
        });
    },
    keys() {
        return dbPromise.then(db => {
            const tx = db.transaction(objStore);
            const keys = [];
            const store = tx.objectStore(objStore);
            // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
            // openKeyCursor isn't supported by Safari, so we fall back
            (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
                if (!cursor) return;
                keys.push(cursor.key);
                cursor.continue();
            });
            return tx.complete.then(() => keys);
        });
    },
    getAll() {
        return dbPromise.then(db => {
            var tx = db.transaction(objStore, 'readonly');
            var store = tx.objectStore(objStore);
            return store.getAll();
        });
    },
};
