# 可达性检测


## 说明

偶然发现了更好的开源项目[MyIP](https://github.com/lissettecarlr/ReachabilityCheck/releases)，之前版本宣告破产，之后该仓库将使用MyIP，进行一些私有化修改。

[历史版本](https://github.com/lissettecarlr/ReachabilityCheck/releases)，界面如下图:
![image-1](file/1.gif)

[当前版本]()，界面如下图：

![image-2](file/2.png)
![image-2](file/3.png)


## 修改连通性测试的站点

在`src/res/app.js`中修改`connectivityTests`，示例如下：
```js
    {
        id: 'HuggingFace',
        name: 'HuggingFace',
        icon: 'ticket-detailed-fill',
        url: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg?',
        status: ''
    }
```
其中icon图标在[getbootstrap](https://icons.getbootstrap.com/)中选取。
url和之前那个版本一样，也是选取目标站点中的一个图片，通过加载图片来判断连通性。

