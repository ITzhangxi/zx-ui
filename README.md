# zx-ui之layout

## Row 属性
| 名称 | 类型 | 默认值 | 说明 | 是否必传 | 
| :----: | :----: | :----: | :----: | :----: |
| gutter | Number / String | --- | 栅格间隔 | 否 |

## Col属性
| 名称 | 类型 | 默认值 | 说明 | 是否必传 | 
| :----: | :----: | :----: | :----: | :----: |
| span | Number / String | 24 | 栅格占据的列数 | 否 |
| offset | Number / String | 0 | 栅格左侧的间隔格数 | 否 |
| push | Number / String | 0 | 栅格向右移动格数 | 否 |
| pull | Number / String | 24 | 栅格向左移动格数 | 0 |
| xs | Number / String | --- | <768px 响应式栅格数或者栅格属性对象 | 否 |
| sm | Number / String | --- | >=768px 响应式栅格数或者栅格属性对象 | 否 |
| md | Number / String | --- | >=992px 响应式栅格数或者栅格属性对象 | 否 |
| lg | Number / String | --- | >=1200px 响应式栅格数或者栅格属性对象 | 否 |


# zx-ui之ModuleList

## 属性
| 名称 | 类型 | 默认值 | 说明 | 是否必传 | 
| ---- | ---- | ----- | ----- | ----- |
| title | String | --- | 模块标题 | 是 | 
| dataList | Array | --- | 模块内的列表 | 是 | 

## dataList 属性
| 名称 | 说明 |
| ---- | ---- |
| name | 名称 |
| num | 数量 |
| amount | 金额 |


# zx-ui之loading

## 属性
| 名称 | 类型 | 默认值 | 说明 | 是否必传 | 
| ---- | ---- | ----- | ----- | ----- |
| text | String | --- | loading显示的文字 | 否 | 

## 事件
| 名字 | 参数 | 说明 |
| ---- | ----- | ------ |
| show | -- | 显示loading |
| hidden | -- | 关闭loading |


# zx-ui之Toast

## 属性
 | 名称 | 类型 | 默认值 | 说明 | 是否必传 | 
 | ---- | ---- | ----- | ----- | ----- |
 | time | Number | 2000ms | 显示时间| 否 | 
 | icon | String | —— | 字体图标| 否 | 
 | iconColor | String | #ffffff | 字体图标颜色| 否 | 
 | text | String | —— | 展示的内容| 否 | 
 | textColor | String | #ffffff | 提示内容的样色| 否 | 
 | contentColor | String | #ffffff | 内容的颜色| 否 | 
 | isSHowMask | Boolean | #ffffff | 是否显示遮罩| 否 | 
 | type | String | —— | 显示类型 | 否 | 
 
 ### type 属性
 | 名称 | 说明 |
 | ---- | ---- |
 | success | 成功 |
 | fail | 失败 |
 | cancel | 取消 |
 | warning | 警告 |
 
 # zx-ui之Popup
 
 ## 属性
 |   名字   |   类型   |   默认值   |   说明   | 是否必传 | 
 |   ----  |   -----   |   ------   |   ------   |   ------   |
 | value |  Boolean | -- | 是否关闭，使用v-model绑定 |  是 |
 | headerText |  String | 选择支付方式 | 头部标题 |    否 |
 | selectOptions |  Arrary | [] | 选择的内容 |    是 |
 
 ### selectOptions属性
 |   名字   |   类型   |   默认值   |   说明   |是否必传 | 
 |   ----  |   -----   |   ------   |   ------   |  ------   | 
 |   logo   |   String   |   --   |   选项的logo   | 是 |
 |   selectText   |  String    |   --   |   选项的文字   | 是 |
 |   disabled   |  String    |   --   |   选项的文字   |否 |
 
 ## 事件
 | 名字 | 参数 | 说明 |
 | ---- | ----- | ------ |
 | select | -- | 将选中的数据作为参数传出去 |
