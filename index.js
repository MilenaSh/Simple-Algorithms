const arrayToSort = [1, 20, 3, 67, 15, 140, 600, 12, 78, 1, 0, 1000, 78];

const index = 0;

function bublesort(items) {
    for (let i = 0; i < arrayToSort.length; i += 1) {
        for (let j = 0; j < arrayToSort.length - i - 1; j += 1) {
            const numberToCompare = arrayToSort[j];
            if (items[j] > items[j + 1]) {
                const temp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = temp;
            }
        }

    }
}

bublesort(arrayToSort);

console.log(arrayToSort);
