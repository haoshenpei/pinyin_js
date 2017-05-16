/**
 * Created by Alex on 2016/3/7.
 */
var pinyin=require("../src/pinyin");
console.log(pinyin.pinyin("你好"," "));
console.log(pinyin.isChineseWord("你好"));//true
console.log(pinyin.isChineseWord("!你好"));//true
console.log(pinyin.isChineseWord("!你好",true));//false
//***没有音调的
pinyin.pinyinWithOutYin("你好"," ");
var users = [
    { 'user': '123',   'age': 48 },
    { 'user': '张三',   'age': 48 },
    { 'user': '李四', 'age': 36 },
    { 'user': '张三丰',   'age': 40 },
    { 'user': '张三炮', 'age': 34 }
];
var sortResult = pinyin.sort(users, "user");
console.log(sortResult)

