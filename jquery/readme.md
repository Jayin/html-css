#learn it in 30mins  

## jQuery 语法

jQuery 语法是为 HTML 元素的选取编制的，可以对元素执行某些操作。  
>基础语法是：$(selector).action()

* 美元符号定义 jQuery
* 选择符（selector）“查询”和“查找” HTML 元素
* jQuery 的 action() 执行对元素的操作

```javascript
//演示 jQuery hide() 函数，隐藏当前的 HTML 元素。
$(this).hide()

//演示 jQuery hide() 函数，隐藏 id="test" 的元素。
$("#test").hide()

//演示 jQuery hide() 函数，隐藏所有 <p> 元素。
$("p").hide()

//演示 jQuery hide() 函数，隐藏所有 class="test" 的元素。
$(".test").hide()

```


### 文档就绪函数
```javascript
$(document).ready(function(){
    //write jQuery functions   here 
    //这是为了防止文档在完全加载（就绪）之前运行 jQuery 代码。 
});
```

如果在文档没有完全加载之前就运行函数，操作可能失败。例如：
* 试图隐藏一个不存在的元素
* 获得未完全加载的图像的大小


### jQuery 选择器

**jQuery 元素选择器**
jQuery 使用 CSS 选择器来选取 HTML 元素
```javascript  
//选取 <p> 元素。
$("p")

// 选取所有 class="intro" 的 <p> 元素
$("p.intro")

//选取所有 id="demo" 的 <p> 元素
$("p#demo") 
```

**jQuery 属性选择器**
jQuery 使用 XPath 表达式来选择带有给定属性的元素
```javascript
//选取所有带有 href 属性的元素
$("[href]") 

//选取所有带有 href 值等于 "#" 的元素
$("[href='#']") 

// 选取所有带有 href 值不等于 "#" 的元素
$("[href!='#']")

//选取所有 href 值以 ".jpg" 结尾的元素
$("[href$='.jpg']") 
```

更多实例：

选择器|实例|选取
:------ | :------ | :------
*	         | $("*")           | 所有元素
#id          | $("#lastname")	| id="lastname" 的元素
.class	     | $(".intro")      | 所有 class="intro" 的元素
element      | $("p")           | 所有 <p> 元素
.class.class | $(".intro.demo")	| 所有 class="intro" 且 class="demo" 的元素
|||
[attribute]	$("[href]")	|所有带有             |  href 属性的元素
[attribute=value]	    |$("[href='#']")     | 	所有 href 属性的值等于 "#" 的元素
[attribute!=value]	    |$("[href!='#']") 	 |  所有 href 属性的值不等于 "#" 的元素
[attribute$=value]	    |$("[href$='.jpg']") |	所有 href 属性的值包含以 ".jpg" 结尾的元素




