# 方法
## 查找
+ 方法：get
+ 函数名：query+...
##  插入
+ 方法：post
+ 函数名：insert+...
## 更新
+ 方法：put
+ 函数名：update+...
## 删除
+ 方法：delete
+ 函数名：delete+...
---
# LinkPart
## 字段
+ id int not null auto_increment primary key
+ label varchar(10) unique (属于的topic)
+ part varchar(10) (属于哪一部分)
+ date timestamp (时间)
+ content text (内容)
## Select
### 选择所有
+ /linkPartAll
+ 无参数
### 根据label选择
+ /linkPart
+ 参数label，类型String
+ 返回查找结果的链表形式
## Insert
### 插入linkPart
+ /linkPart
+ 参数label, 注意必须是topicBlock中存在的label, 否则会插入失败
+ 参数part, 该label下你想要插入的分区名
+ 参数content, 该分区下你想要插入的内容
## Update
### 根据id更新
+ /linkPart
+ 参数id，label，part，content
## Delete
### 根据id删除
+ /linkPart
+ 参数id
### 根据label删除
+ /linkPart
+ 参数label
---