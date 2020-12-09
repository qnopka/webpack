import * as $ from 'jquery';

function createStatistics() {
    let counter = 0;
    const listener = () => counter++;
    let isDestroyed = false;
    $(document).on('click', listener);

    return {
        destroy() {
            $(document).off('click', listener);
            isDestroyed = true;
        },

        getClicks() {
            if (isDestroyed) return 'Statistics is destroyed';
            return counter;
        }
    }
}

window.statistics = createStatistics();