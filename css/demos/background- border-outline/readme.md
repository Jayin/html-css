背景
background
设置元素的所有背景属性，包括background-color、background-image、background-repeat、background-attachment、background-position。设置属性时可以不设置其中的某些项，也没有顺序。上述5个属性可以在CSS中单独设置，但通常推荐统一在background中设置。

e.g.

[css] view plaincopy
background: #00ff00 url(bg.gif) no-repeatfixed top;  
background: repeat-y right url(1.PNG) #666;  
background: rgb(100, 100, 100);  
background-color
设置元素的背景颜色。支持所有CSS支持的颜色值，如颜色名称（red）、16进制颜色（#ff0000）、rgb颜色值（rgb(255, 0, 0)）。默认为transparent，透明。

background-image
设置元素的背景填充图像。值的格式是url(path)，其中path是图像的路径。默认为none，无图像填充。

e.g.

[css] view plaincopy
background-image: url(bg.jpg);  
background-repeat
设置元素的背景填充图像的平铺模式。填充图像由background-image指定，若无填充图像，则本属性亦无效。值可以是repeat（背景图像在水平和垂直方向上都重复填充）、repeat-x（背景图像只在水平方向上重复填充）、repeat-y（背景图像只在垂直方向上重复填充）、no-repeat（背景图像不重复）。默认为repeat。

background-position
设置元素的背景填充图像的起始位置。填充图像由background-image指定，若无填充图像，则本属性亦无效。可取的值如下表所示：


background-attachment
设置背景填充图像是否固定或者随着页面的其余部分滚动。填充图像由background-image指定，若无填充图像，则本属性亦无效。可取的值有scroll（图像随页面滚动轴而滚动）、fixed（图像固定，不随滚动轴滚动）。默认为scroll。

e.g.

[html] view plaincopy
<html>  
<head>  
<metahttp-equivmetahttp-equiv="Content-Type" content="text/html;charset=utf-8" />  
<title></title>  
<style type="text/css">  
body {  
         background-attachment:fixed;  
         background-image:url(bg.jpg);  
         background-repeat:no-repeat;  
         background-position:center;  
         height:1500px;  
}  
</style>  
</head>  
<body>  
</body>  
</html>  
图像始终固定在页面中央，不随滚动轴的滚动而移动。

边框
border
设置元素主要的边框属性，包括border-width、border-style、border-color，可缺省，无固定顺序。

e.g.

[css] view plaincopy
border: red 10px solid;  
border: 5px blue;  
border-style
统一设置元素各边框的格式，按照CSS顺序规则。可取的值如下表所示：


CSS顺序规则：当值有4个时，依次按照上、右、下、左设置；当值有3个时，依次按照上、左右、下设置；当值有2个时，依次按照上下、左右设置；当值只有1个时，则为4个方向设置为相同的值。以本属性为例：

[css] view plaincopy
border-style: soliddotted dashed double;  
/* 
上边框为实线 
右边框为点状 
下边框为虚线 
左边框为双线 
*/  
border-style: solid dotteddashed;  
/* 
上边框为实线 
左右边框为点状 
下边框为虚线 
*/  
border-style: soliddotted;  
/* 
上下边框为实线 
左右边框为点状 
*/  
border-style: solid;  
/* 
4个方向的边框都是实线 
*/  
border-style的默认值为border-style:none。

border-width
统一设置元素各边框的宽度，按照CSS顺序规则。只有当border-style不为none时才有效。不能设置为负值。值可以是thin（细）、medium（中等）、thick（粗），也可以是数值。默认为border-width: medium。

border-color
统一设置元素的各边框颜色，按照CSS顺序规则。当border-style为none或hidden时失效，所以在设置边框颜色前需要保证border-style的值不为none、hidden。值可以是任意CSS支持的颜色值。默认为border-color: transparent。

border-top、border-right、border-bottom、border-left
设置元素的上/右/下/左边框的主要属性，包括border-***-style、border-***-color、border-***-width，可缺省，无固定顺序。

border-top-style、border-right-style、border-bottom-style、border-left-style
设置元素上/右/下/左边框的样式，取值与border-style相同，默认为none。

border-top-width、border-right- width、border-bottom-width、border-left- width
设置元素上/右/下/左边框的宽度，取值与border-width相同。只有当border-***-style不为none时才有效，不能为负值，默认为medium。

border-top-color、border-right- color、border-bottom-color、border-left- color
设置元素上/右/下/左边框的颜色，取值与border-color相同。只有当border-***-style不为none和hidden时才有效。默认为transparent。

轮廓
outline
在元素边框边缘的外围绘制一条包围元素的线，包括outline-color、outline-style、outline-width三个子属性的设置，可缺省，无固定顺序。轮廓不占据页面空间，也不一定是矩形。

除了IE以外的浏览器都直接支持outline。只有规定了!DOCUMENT之后的IE8以上版本的浏览器才支持outline。

e.g.

[css] view plaincopy
outline: solid black;  
outline: dotted thin #0000ff;  
outline-style
设置元素轮廓的格式，其取值与border-style类似，但没有hidden值。默认为none，无轮廓。

outline-width
设置元素轮廓的宽度，其取值与border-width类似。只有当outline-style不为none时才有效。默认为medium。

outline-color
设置元素轮廓的颜色，其取值与border-color类似。只有当outline-style不为none时才有效。默认为transparent。
