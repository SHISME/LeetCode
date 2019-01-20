## 动态规划

首先我们假设 S(n) 为前 n 个的最大面积

显然 S(0) = 0, S(1) = heights[0];

当 heights[1] >= heights[0], S(2) = Max((S(1) + heights[0]), heights[1]);
当 heights[1] < heights[0], S(2) = Max()


这题的思路比较特殊，这里单独记录一下

暴力法的思路就不再做解释了，应该每个人都可以想到

## 单调栈

之前一直不知道有单调栈这种数据结构，一直没有想出什么比较好的算法解决这题，google 了一下才知道这题需要用到单调栈这种
数据结构才能够较好的解决问题。

首先我们先了解一下什么是单调栈
> 单调栈是一种单调递增或者单调递减的栈结构
我们可以先自己实现一个简单的单调栈构造函数，

```javascript

// 这里我们构造一个单调递增的栈,始终保持栈是单调递增的
function create_dull_stack(arr) {
    let stack = [];
    for (let i = 0; i< arr.length; i++) {
        // 如果栈为空或者栈顶的值小于当前值则入栈
        if (stack.length === 0 || stack[stack.length - 1] < arr[i]) {
            stack.push(arr[i]);
        } else {
            // 将比当前元素大的元素出栈
            while (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
                stack.pop();
            }
            // 最后再入栈
            stack.push(arr[i]);
        }
    }
}

```

然后我们再来看看如何使用单调栈来解决这个问题

我们计算从 0 ~ i, 以每一个柱子为基准时的最大面积，然后比较每一个面积，最后取最大值

从左往右可能会出现两种情况，一种是heights[i] >= heights[i - 1],一种是heights[i] < heights[i - 1]

当 heights[i] >= heights[i - 1] 的时候，则说明我们当左边为最大面积的时候，我们任然可以向右不断的扩张来使面积增大，

当 heights[i] < heights[i - 1] 的时候，我们则不能保证向右扩张的时候面积能够不断的变大，这时候我们需要计算向左扩张的最大面积，
stack 存储的是一个单调递增的栈

以 [0,1,0,2] 为例子,因为可能会出现[1,2,3]这种单调递增的情况导致无法出栈，所以我们会一开始在数组末尾加一个0保证能够出栈

第一步 数组会变成 [0,1,0,2,0]
stack 一开始是[0, 1], 当 i = 2的时候, heights[2] = 0,



