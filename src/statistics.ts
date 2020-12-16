import * as $ from 'jquery';

function createStatistics(): object {
    let counter: number = 0;
    const listener = (): number => counter++;
    let isDestroyed: boolean = false;

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

window['statistics']  = createStatistics();