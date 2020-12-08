function createStatistics() {
    let counter = 0;
    const listener = () => counter++;
    let isDestroyed = false;
    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },

        getClicks() {
            if (isDestroyed) return 'Statistics is destroyed';
            return counter;
        }
    }
}

window.statistics = createStatistics();