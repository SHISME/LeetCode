思路：

这题需要用到一些比较高效的排序算法，我们可以用的有快排，希尔，归并，堆排序

快排 和 希尔需要知道每个元素的index才能比较好处理，堆排序需要构造堆，这里就只有归并排序比较适用我们现在的情况了。我们先看看什么是归并排序。

### 归并排序

归并排序的基本思想是，将已有序的子序列合并成一个有序的序列。

算法流程
- 把长度为n的输入序列分成两个长度为n/2的子序列
- 对这两个子序列分别采用归并排序；
- 将两个排序好的子序列合并成一个最终的排序序列
  
数组的代码实现

```javascript
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left_arr = mergeSort(arr.slice(0, middle));
    const right_arr = mergeSort(arr.slice(middle, arr.length));
    return merge(left_arr, right_arr);
}

function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }
    result = result.concat(left);
    result = result.concat(right);
    return result;
}

```

在来看看这题，思路也是一样的
- 把链表拆成两段
- 分别对两段归并排序
- 把排序的结果合为一个链表

这题有个麻烦的地方就是，我们用的是链表不是数组，无法像数组那样快速的对半分

我们这里用了一个快指针和慢指针来解决这个问题

快指针一次走两步，慢指针一次走一步，当快指针走完的时候，慢指针就是刚好一半的位置了。
这里有个要注意的地方就是慢指针会多走一步，所以我们需要多记录一个慢指针的上一步
[源码](./index.js)