import type { AtomicState } from "../index"

const cache = <T>(state: AtomicState<T>, key: string, storage?: Storage) => {
    const _storage = storage || localStorage

    // load from cache
    const value = _storage.getItem(key)
    if (value) {
        state.publish(JSON.parse(value))
    } else {
        const data = state.unwrap()
        if (typeof data !== "undefined")
            _storage.setItem(key, JSON.stringify(data))
    }

    state.subscribe((x) => {
        // Save to cache
        _storage.setItem(key, JSON.stringify(x))
    })

    return state
}

export { cache }
