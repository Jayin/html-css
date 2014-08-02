### CSS 实践：两种实现下拉菜单的方法

CSS伪类的一个非常重要的应用就是下拉菜单。

最近在学习中发现网上纯粹用CSS实现的下拉菜单主要有两种思路：一种是通过visibility属性的切换，另一种是基于display属性的切换。二者在大体的结构上是一致的，只是对于二级子菜单的隐藏和显示的实现策略上有所不同。

下拉菜单的HTML代码如下：

[html] view plaincopy
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  
<html xmlns="http://www.w3.org/1999/xhtml">  
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
<title>CSS下拉菜单</title>  
<!-- <link rel="stylesheet" type="text/css" href="nav1.css" /> -->  
<!-- <link rel="stylesheet" type="text/css" href="nav2.css" /> -->  
</head>  
  
<body>  
<div class="menu">  
    <ul>  
        <li>  
            <a href="#">menu_0</a>  
            <ul>  
                <li><a href="#">item_0</a></li>  
                <li><a href="#">item_1</a></li>  
                <li><a href="#">item_2</a></li>  
                <li><a href="#">item_3</a></li>  
                <li><a href="#">item_4</a></li>  
            </ul>  
        </li>  
        <li>  
            <a href="#">menu_1</a>  
            <ul>  
                <li><a href="#">item_5</a></li>  
                <li><a href="#">item_6</a></li>  
                <li><a href="#">item_7</a></li>  
                <li><a href="#">item_8</a></li>  
                <li><a href="#">item_9</a></li>  
            </ul>  
        </li>  
        <li>  
            <a href="#">menu_2</a>  
            <ul>  
                <li><a href="#">item_10</a></li>  
                <li><a href="#">item_11</a></li>  
                <li><a href="#">item_12</a></li>  
                <li><a href="#">item_13</a></li>  
                <li><a href="#">item_14</a></li>  
            </ul>  
        </li>  
        <li>  
            <a href="#">menu_3</a>  
            <ul>  
                <li><a href="#">item_15</a></li>  
                <li><a href="#">item_16</a></li>  
                <li><a href="#">item_17</a></li>  
                <li><a href="#">item_18</a></li>  
                <li><a href="#">item_19</a></li>  
            </ul>  
        </li>  
        <li>  
            <a href="#">menu_4</a>  
            <ul>  
                <li><a href="#">item_20</a></li>  
                <li><a href="#">item_21</a></li>  
                <li><a href="#">item_22</a></li>  
                <li><a href="#">item_23</a></li>  
                <li><a href="#">item_24</a></li>  
            </ul>  
        </li>  
    </ul>  
</div>  
<div style="clear: left;">Content!</div>  
</body>  
</html>  
在不添加CSS的情况下，下拉菜单实际上就是二级无序列表。在CSS中通过对子列表的隐藏与显示的操作来达到下拉的效果。


两种实现下拉的方法的共同点在于：

1.        必须将最外层的ul元素的padding属性设为0，以保证整个下拉菜单中的没有无序列表中的自动缩进。同时，将list-style-type设为none，以去除列表项前的标记。

2.        如果主菜单需要横向，则需要把li元素设置为浮动元素，即float: left。

3.        使二级子菜单呈一列的方法是将二级列表的ul元素和li元素设置为相同的宽度。

4.        必须把二级列表的ul元素的position属性为absolute，以保证将该元素及其子元素从文件流中去除，这样一来当二级菜单显示的时候不会影响下面的其它元素。

5.        下拉菜单后面的页面元素，需要把clear属性设置为left或者both。这是因为下拉菜单被设为了浮动元素，如果不这样做的话后面的页面元素的位置将会不恰当。

6.        需要通过伪类:link、:visited以及:hover来设置元素有焦点和没有焦点时的颜色状态等。

 

不同点如前所述，即是：当一级菜单项没有焦点的时候，方法一会把二级菜单的ul元素的visibility属性设为hidden，使整个二级菜单不可见；当有焦点的时候，需要把相应的二级菜单的visibility属性改为visible，使其可见。而方法二则将需要不可见的二级菜单ul元素的display元素设为none，当需要可见的时候改为block。

上述状态的切换均通过伪类来完成而不调用JavaScript。

 

详细代码如下：

nav1.css（通过切换visibility属性）

[css] view plaincopy
.menu {  
    font-family: Arial, Helvetica, sans-serif;  
    width: 455px;  
    margin: 0 auto;  
}  
  
.menu ul {  
    padding: 0;  
    list-style-type: none;  
}  
  
.menu ul li {  
    float: left;  
    width: 90px;  
    text-align: center;  
    line-height: 30px;  
    background: #FC0;  
    border: #fff 1px solid;  
    border-width: 0 1px 0 0;  
      
}  
  
.menu ul li a:link, .menu ul li a:visited {  
    text-decoration: none;  
    color: #000;  
}  
  
.menu ul li:hover {  
    background: #F60;  
}  
  
.menu ul li:hover a {  
    color: #fff;  
}  
  
.menu ul li ul {  
    visibility: hidden;  
    position: absolute;  
    width: 90px;  
}  
  
.menu ul li:hover ul li {  
    visibility: visible;  
    background: #F96;  
    color: #000;  
    width: 90px;  
}  
  
.menu ul li ul li a:link, .menu ul li ul li a:visited {  
    color: #000;  
}  
  
.menu ul li ul li:hover {  
    background: #39F;  
}  
nav2.css（通过切换display属性）

[css] view plaincopy
.menu {  
    font-family: Georgia, "Times New Roman", Times, serif;  
    margin: 0 auto;  
    width: 505px;  
}  
  
.menu ul {  
    padding: 0;  
    list-style-type: none;  
}  
  
.menu ul li {  
    float: left;  
}  
  
.menu ul li a:link, .menu ul li a:visited {  
    background: #3CF;  
    color: #000;  
    text-decoration: none;  
    display: block;  
    width: 100px;  
    height: 30px;  
    text-align: center;  
}  
  
.menu ul li:hover a {  
    background: #009;  
    color: #fff;  
    font-weight: bold;  
}  
  
.menu ul li ul {  
    display: none;  
}  
  
.menu ul li:hover ul {  
    display: block;  
    width: 100px;  
    position: absolute;  
}  
  
.menu ul li ul li a:link, .menu ul li ul li a:visited {  
    background: #6FF;  
    color: #000;  
}  
  
.menu ul li ul li:hover a {  
    background: #60F;  
    color: #F60;  
    font-weight: bold;  
}   
二者在效果上并没有多大区别，个人感觉切换display属性的方法比较方便，而且将其扩展到三级下拉菜单也更简单。