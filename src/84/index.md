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

