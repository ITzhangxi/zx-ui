# Popup
# 属性
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

# 事件
| 名字 | 参数 | 说明 |
| ---- | ----- | ------ |
| select | -- | 将选中的数据作为参数传出去 |
