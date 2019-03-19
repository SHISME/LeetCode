![](https://img-blog.csdn.net/20160531104857723?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

如上图，每一轮我们都需要经历一个周期，即先往右走到尽头的前一个，重新设置启点，再往下走到尽头的前一个，重新设置启点，再往左走到尽头的前一个，重新设置启点，再往上走到尽头的前一个，重新设置启点

第一轮每次需要移动的距离为n - 1

移动完一个周期后我们需要重新设置启点，然后缩小移动距离，每次缩小2

注意基数个的时候，矩形中间那一项无法遍历到