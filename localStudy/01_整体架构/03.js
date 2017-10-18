// 获取无new的jquery对象

var aQuery = function(selector, context) {
  return new aQuery.prototype.init()
}

aQuery.prototype = {
  init: function() {
    // this只是指向aQuery类,会覆盖20
    this.num = 18
    return this
  },
  name: function() {
    return this
  },
  age: function() {

  },
  num: 20
}


test.prototype.my.prototype = test.prototype

console.log('start aQuery', aQuery()); // 此方法返回的是aQuery的实例

// console.log('start new aQuery', aQuery().name()); // 此方法返回的是aQuery的实例

console.log('num', aQuery().num) //输出18
