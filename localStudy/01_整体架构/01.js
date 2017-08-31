// 获取无new的jquery对象

var aQuery = function(selector, context) {
    console.log('aQuery obj', aQuery.prototype.init())
    return aQuery.prototype.init()
}

aQuery.prototype = {
    init: function() {
        return this
    },
    name: function() {

    },
    age: function() {

    }
}

aQuery() // 此方法返回的是aQuery的实例
