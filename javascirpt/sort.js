"use strict"

/**
 * 插入排序
 * 时间复杂度O(n2)
 * 空间复杂度O(1)
 */
const insert_sort = list => {
    // 忽略不正确的参数
    if (list && list.length > 1) {
        for (let i = 0; i < list.length; i++) {
            // 创建一个中间变量避免被覆盖
            let tmp = list[i];
            let j = i;
            //  移位 且忽略已排序数列只有一个的情况
            while (j > 0 && list[j - 1] > tmp) {
                list[j] = list[j - 1];
                j--;
            }
            // 将当前变量插入空位中
            list[j] = tmp
        }
    }
    return list;
}

/**
 * 选择排序
 * 时间复杂度O(n2)
 * 空间复杂度O(1)
 */
const select_sort = list => {
    if (list && list.length > 1) {
        let result = [];
        for (let i = 0; i < list.length; i++) {
            let index = undefined;
            let min = undefined;
            list.forEach((v, i, arr) => {
                min = min < v ? min : v
                index = min < v ? index : i
            });
            result.push(min);
            // 从元素列删除已经选择出的元素
            delete (list[index]);
        }
        list = result;
    }
    return list;
}

/**
 * 冒泡排序 
 */
const bubble_sort = list => {
    list = list || []
    list.forEach((v, have_sorted) => {
        for (let i = 0; i < list.length - have_sorted; i++) {
            if (list[i] > list[i + 1]) {
                let tmp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = tmp;
            }
        }
    });
    return list;
}


/**
 * 快速排序
 * 
 * 
 */
const quick_sort = (array) => {

    /**
     * swap 2 nums in array
     */
    const swap = (array, left, right) => {
        const tmp = array[left];
        array[left] = array[right];
        array[right] = tmp;
        return array;
    }

    /**
     * partition
     */
    const partition = (array, left, right) => {
        let center_index = left;
        const pivot = array[right];
        for (let i = left; i < right; i++) {
            if (array[i] < pivot) {
                swap(array, center_index, i)
                center_index++;
            }
        }
        swap(array, right, center_index);
        return center_index;
    }

    /**
     * 递归排序
     */
    const sort = (array, left, right) => {
        if (left > right) return;
        const center = partition(array, left, right);
        sort(array, left, center - 1);
        sort(array, center + 1, right);
        return array
    }

    return sort(array, 0, array.length - 1);

}

console.log(insert_sort([3, 42, 5, 23, 43, 52, 43, 2, 3, 51, 43, 5]));
console.log(bubble_sort([3, 42, 5, 23, 43, 52, 43, 2, 3, 51, 43, 5]))
console.log(select_sort([3, 42, 5, 23, 43, 52, 43, 2, 3, 51, 43, 5]));
console.log(quick_sort([3, 42, 5, 23, 43, 52, 43, 2, 3, 51, 43, 5]));
