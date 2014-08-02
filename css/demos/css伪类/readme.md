CSS的元素选择器除了根据id（#）、class（.）、属性（[ ]）选取元素以外，还有很重要的一类，就是根据元素的特殊状态来选取元素。它们就是伪类和伪元素。跟id选择器、类选择器、属性选择器以及派生选择器等等这些从HTML文档层次结构（DOM树）中获取元素不同的是，伪类和伪元素是预定义的、独立于文档元素的。它们获取元素的途径也不是基于id、class、属性这些基础的元素特征，而是在处于特殊状态的元素（伪类），或者是元素中特别的内容（伪元素）。当然，伪类和伪元素的表示形式也使用“:”（英文冒号）与其它选择器相区分。

伪类
伪类选择元素基于的是当前元素处于的状态，或者说元素当前所具有的特性，而不是元素的id、class、属性等静态的标志。由于状态是动态变化的，所以一个元素达到一个特定状态时，它可能得到一个伪类的样式；当状态改变时，它又会失去这个样式。由此可以看出，它的功能和class有些类似，但它是基于文档之外的抽象，所以叫伪类。

 

:link

伪类将应用于未被访问过的链接，与:visited互斥。

:hover

伪类将应用于有鼠标指针悬停于其上的元素。

:active

伪类将应用于被激活的元素，如被点击的链接、被按下的按钮等。

:visited

伪类将应用于已经被访问过的链接，与:link互斥。

 

下面的示例是对上述4个伪类效果的展示：

```html
<html>  
<head>  
<meta content="text/html"charset="utf-8" />  
<style type="text/css">  
a:link {color: #FF0000}  
a:visited {color: #00FF00}  
a:hover {color: #FF00FF}  
a:active {color: #0000FF}  
</style>  
</head>  
<body>  
<ahrefahref="http://www.baidu.com">百度</a>  
</body>  
</html>  
```
需要注意的是在CSS的定义中，同一个元素的:hover必须位于:link、:visited之后才能生效，:active必须位于:hover之后才能生效。

 

:focus

伪类将应用于拥有键盘输入焦点的元素。

:first-child

伪类将应用于元素在页面中第一次出现的时候。

:lang

伪类将应用于元素带有指定lang的情况。

 

下面的示例展示了上述3个伪类的效果：

```html 
<!DOCTYPE html PUBLIC "-//W3C//DTDXHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  
<html>  
<head>  
<meta charset="utf-8"content="text/html" />  
<title></title>  
<style type="text/css">  
div:first-child {  
         background:#0F0;  
}  
   
textarea:focus {  
         background:#F00;  
}  
   
div:lang(zh) {  
         background:#00F;  
}  
</style>  
</head>  
<body>  
<div>  
         <textarea></textarea>  
</div>  
<div>  
         <textarea></textarea>  
</div>  
<div lang="zh">  
         <textarea></textarea>  
</div>  
</body>  
</html>  
```

伪元素
与伪类针对特殊状态的元素不同的是，伪元素是对元素中的特定内容进行操作，它所操作的层次比伪类更深了一层，也因此它的动态性比伪类要低得多。实际上，设计伪元素的目的就是去选取诸如元素内容第一个字（母）、第一行，选取某些内容前面或后面这种普通的选择器无法完成的工作。它控制的内容实际上和元素是相同的，但是它本身只是基于元素的抽象，并不存在于文档中，所以叫伪元素。

 

:first-letter

伪元素的样式将应用于元素文本的第一个字（母）。

:first-line

伪元素的样式将应用于元素文本的第一行。

:before

在元素内容的最前面添加新内容。

:after

在元素内容的最后面添加新内容。
