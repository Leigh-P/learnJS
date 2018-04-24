<h2> javascript 高级程序设计</h2>
<h3>函数<br>4.8</h3>
<li>递归</li>
```javascript
function factorial (num) {
    if(num <= 1){
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}
/*
'use strict'
var factorial = (function f(num) {
	if (num <= 1){
		return 1;
	} else {
		return num * f(num - 1);
	}
})
*/
```

<li>闭包</li>
```javascript
function createComparisonFunction(propertyName){
    return function (object1,object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        
        if(value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    }
}
var compare = createComparisonFunction("name");
var result = compare({name: "Nicholas"},{name: "Greg"});
```
```javascript
function createFunctions(){
    var result = new Array();
    
    for (var i=0; i < 10; i++){
		result[i] = function (){
            return i;
		};
	}
	
	return result;	// [10,10,10,...]
}

function createFunctions(){
    var result = new Array();
    
    for (var i=0; i < 10; i++){
        result[i] = function(num){
            return function (){
                return num;
            };
        }(i);
    }
    return result;	// [1,2,3,...]
}
```

```javascript
var name = "The Window";

var object = {
	name: "My Object",
	
	getNameFunc: function(){
        return function(){
            return this.name;
        }
	}
};
alert(object.getNameFuc()());	// "My Window"

var name = "The Window";

var object = {
	name: "My Object",
	
	getNameFunc: function(){
		var that = this;
        return function(){
            return that.name;
        }
	}
};
alert(object.getNameFunc()());	// "My Object"

var name = "The Window";

var object = {
    name: "My Object",
    
    getName: function(){
        return this.name;
    }
}
object.getName();		// "My Object"
(object.getName)();		// "My Object"
(object.getName = object.getName)();	// "The Window"

```

```javascript
function assignHandler(){
    var element = document.getElementById("someElement");
    var id = element.id;
    
    element.onclick = function(){
        alert(id);
    };
    
    element = null;
    // 释放闭包内存
}
```
```javascript
function outputNumbers(count){
    (function(){
        for(var i=0; i < count; i++){
            alert(i)
        }
    })();
    
    alert(i);	// 报错
}
```

<li>私有变量</li>
```javascript
// 构造函数中定义特权方法
var privateVariable = 10;

function privateFunction(){
    return false;
}

this.publicMethod = function (){
    privateVariable++;
    return privateFunction();
}
function Person(name){
	this.getName = function(){
        return name;
	};
	this.setName(value){
        name = value;
	};
}
var person = new Person("Nicholas");
alert(person.getName());	// "Nicholas"
person.setName("Greg");
alert(person.setName());	// "Greg"
```

```javascript
// 静态私有变量
(function(){
    var privateVariable = 10;
    
    function privateFunction(){
        return false;
    }
    
    MyObject = function(){
        
    };
    
    MyObject.prototype.publicMethod = function (){
        privateVariable++;
        return privateFunction();
    }
})();

(function (){
    var name = "";
    
    Person = function(value){
    	name = value;
	};
	Person.prototype.getName = function(){
        return name;
	}
	Person.prototype.setName = function(value){
        name = value;
	}
})();
var person1 = new Person("Nicholas");
alert(person1.getName());	// "Nicholas"
person1.setName("Greg");
alert(person1.getName());	// "Greg"

var person2 = new Person("Michael");
alert(person1.getName());	// "Michael"
alert(person2.getName());	// "Michael"
```

```javascript
// 模块模式
var singleton = {
    name: value,
    method: function(){
        
    }
};
var singleton = function(){
    var privateVariable = 10;
    
    function privateFunction(){
        return false;
    }
    return {
		publicProperty: true,
		
		publicMethod: function(){
            privateVariable++;
            return privateFunction();
		}
	}
}()

var application = function(){
    var components = new Array();
    
    components.push(new BaseComponent());
    
    return {
        getComponentCount: function(){
        	return components.length;
		},
		
		registerComponent: function(component){
            if(typeof component == "object"){
                components.push(component);
            }
		}
    }
}()
```

```javascript
var singleton = function(){
    var privateVariable = 10;
    
    function privateFUnction(){
    	return false;
	}
	
	var object = new CustomType();
	
	object.publicProperty = true;
	
	object.publicMethod = function (){
		privateVariable++;
		return privateFunction();
	}
	return object;
}();

var application = function(){
	var components = new Array();
	
	components.push(new BaseComponent());
	
	var app = new BaseComponent();
	
	app.getComponentCount = function(){
        return components.length;
	}
	app.registerComponent = function(component){
        if(typeof component == "object"){
            components.push(component);
        }
	}
	return app;
}();
```
<h3>4.13</h3>

<li>Q：正则表达式<br>

A：字符串匹配的模式，用来检查一个串是否含有某种子串，将匹配的子串替换或者从某个串中取出某个条件的子串等

</li>

<li>Q：iframe富文本编辑</li>



<h3>Eloquent_Javascript</h3>

Abstract the functions, not reliable on others

function

+ pure function

  + no side effects & not rely on side effects from other code(not read global bindings)
  + when call with the same arguments, it produces the same value & not do anything else
  + return value
  + simly call it to test it

+ array & objects

  + array

    + push

    + pop

    + assign

    + keys

    + propertyName in arrayName

    + shift  & unshift

    + indexOf & lastindexOf

    + concat

    + slice(startindex(included),endindex(unincluded))

      + use to copy the entire array

      + ```javascript
        function phi([n00,n01,n10,n11]){
            return ()
        }
        ```

        ​

  + objects

    + array of objects

    + look inside

    + ```javascript
      let {name} = {name:"Faraji",age:23};
      console.log(name);
      // Faraji
      ```

      ​

  + strings(arraylike)

    + slice
    + indexOf (search for more than 1 char)
    + trim(remove spaces,newlines,tabs,similar char)
    + padStart(desired length,padding char)
    + split & join
    + repeat(times)

  + rest parameters

    + a array of arguments(…args)

  + math object

    + random
    + floor(down to the nearest whole number)
    + ceil(up to)
    + round(to)
    + abs(absolute of a number)

  + JSON

    + JSON.stringify(Javascript to JSON)
    + JSON.parse(JSON to Javascript)

+ higher-order functions

  ```javascript
  function greaterThan(n) {
      return m => m > n;
  }
  ```

  + filter

    arr.filter(callback[.thisArg])

    ```javascript
    function filter(array,test) {
        let passed = [];
        for (let element of array) {
            if (test(element)) {
                passed.push(element);
            }
        }
        return passed;
    }
    ```

    ​

  + map

    ```javascript
    function map(array, transform) {
    	let mapped = [];
        for (let element of array) {
    		mapped.push(transform(element));
        }
        return mapped;
    }
    ```

    ​

  + reduce

    arr.reduce(callback)

    ```javascript
    function reduce (array, combine, start) {
        let current = start;
        for (let element of array) {
    		current = combine(current,element);
        }
        return current;
    }
    ```

    ​

  + when running filter & map, it will build up new arrays

  + some

+ codePointAt(0)

  ```javascript
  function countBy(items, groupName) {
      let counts = [];
      for (let item of items) {
          let name = groupName(item);
          let known = counts.findIndex(c => c.name == name);
          if(known == -1) {
              counts.push({name,count:1});
          } else {
              counts[known]++;
          }
      }
      return counts;
  }

  function textScripts(text) {
      let scripts = countBy(text, char => {
          let script = characterScript(char.codePointAt(0));
          return script ? script.name : "none";
      }).filter({name} => name != "none");
      
      let total = scripts.reduce((n,{count}) => n + count,0);
      if (total == 0) return "No scripts found";
      
      return scripts.map({name,count} => {
          return `${Math.round(count * 100 / total)}% ${name}`;
      }).join(", ");
  }
  ```

  ​

+ Objects

  + ```javascript
    let rabbit = {};
    rabbit.speak = function(line) {
        console.log(`The rabbit says '${line}'`);
    };
    rabbit.speak("I'm alive");

    function speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
    let whiteRabbit = {type:"white", speak};
    whiteRabbit.speak("Oh my ears and whiskers, " +
                     "how late it's getting!");

    speak.call(hungryRabbit, "Burp!");

    let protoRabbit = {
        speak(line) {
            console.log(`The ${this.type} rabbit says '${line}'`);
        }
    };
    let killerRabbit = Object.create(protoRabbit);
    killerRabbit.type = "killer";
    killerRabbit.speak("SKREEEE!");
    ```

  + Classes

    ```javascript
    function makeRabbit(type) {
        let rabbit = Object.create(protoRabbit);
        rabbit.type = type;
        return rabbit;
    }
    // constructor
    function Rabbit(type) {
    	this.type = type;
    }
    Rabbit.prototype.speak = function(line) {
    	console.log(`The ${this.type} rabbit says '${line}'`);
    };

    let weirdRabbit = new Rabbit("weird");

    class Rabbit {
        // be bound to the name Rabbit
        constructor(type) {
            this.type = type;
        }
        // be packaged into that constructor's prototype
        speak(line) {
            console.log(`The ${this.type} rabbit says '${line}'`)
        }
    }

    let killerRabbit = new Rabbit("killer");

    let object = new class { getWord() {return "hello"}};
    console.log(object.getWord());
    ```

  + Maps

    ```js
    let ages = {
        Boris: 39.
        Liang: 22,
        Julia: 62
    };
    console.log(`Julia is ${ages["Julia"]}`);
    console.log("Is Jack's age known?","Jack" in ages);

    let ages = new Map();
    ages.set("Boris",39);
    ages.set("Liang",22);
    ages.set("Julia",62);

    console.log(`Julia is ${ages.get("Julia")}`);
    console.log("Is Jack's age known?",ages.has("Jack"));

    // overwrite the function of prototype Object toString
    Rabbit.prototype.toString = function() {
    	return `a ${this.type} rabbit`;
    }
    console.log(String(blackRabbit));
    ```

  + Symbol

    + can't create the same symbol twice

  + ```javascript
    let sym = Symbol("name");
    console.log(sym == Symbol)
    // false

    // already has Class Rabbit
    Rabbit.prototype[sym] = 55;
    console.log(blackRabbit[sym]);
    // 55
    ```

    ​

    compared with last function, overwrite the function of prototype

    ​

    ```js
    const toStringSymbol = Symbol("toString");
    Array.prototype[toStringSymbol] = function() {
    	return `${this.length} cm of blue yard`;
    };

    console.log([1,2].toString());
    console.log([1,2].[toStringSymbol]());

    let stringObject = {
    	[toStringSymbol]() {return "a jute rope";}
    }
    console.log(stringObject[toStringSymbol]());
    ```

    + iterable: return an object

  + ```js
    let okIterator = "OK"[Symbol.iterator]();
    console.log(okIterator.next());
    // {value: "O", done: false}

    console.log(okIterator.next());
    // {value: "K", done: false}

    console.log(okIterator.next());
    // {value: undefined, done: true}


    class Matrix {
        constructor(width, height, content = (x, y) => undefined) {
            this.width = width;
            this.height = height;
            this.content = [];
            
            for (let y = 0; y < height; y++) {
    			for (let x = 0; x < width; x++) {
    				this.content[y * width + x] = content(x,y);
                }
            }
            [Symbol.iterator] = function() {
        return new MatrixIterator(this);
    }
        }
        
        get(x, y) {
    		return this.content[y * this.width + x];
        }
        set(x, y, value) {
    		this.content[y * this.width + x] = value;
        }
    }
    // matrix 为 Matrix 的实例
    class MatrixIterator {
        constructor(matrix) {
            this.x = 0;
            this.y = 0;
            this.matrix = matrix;
        }
        
        next() {
            if (this.y == this.matrix.height) return{done:true};
            
            let value = {
    			x: this.x,
                y: this.y,
                value: this.matrix.get(this.x,this.y)
            };
            this.x++;
            if (this.x == this.matrix.width) {
    			this.x = 0;
                this.y++;
            }
            return {value, done: false};
        }
    }

    // return object value{x, y, value};
    let matrix = new Matrix(2,2,(x,y) => `value ${x}. ${y}`);
    for (let {x, y, value} of matrix) {
        console.log(x,y,value);
    }
    ```

    + getters, setters, statics

    ```js
    // get
    let varyingSize = {
    	get size() {
    		return Math.floor(Math.random() * 100);
        }
    };

    console.log(varyingSize.size);

    // set
    class Temperature {
    	constructor(celsius) {
    		this.celsius = celsius;
        }
        get fahrenheit() {
            return this.celsius * 1.8 + 32;
        }
        set fahrenheit(value) {
    		this.celsius = (value - 32) / 1.8;
        }
        
        static fromFahrenheit(value) {
    		return new Temperature((value - 32) / 1.8);
        }
    }

    let temp = new Temperature(22);
    // get fahrenheit
    console.log(temp.fahrenheit);
    // set fahrenheit
    temp.fahrenheit = 86;
    console.log(temp.celsius);
    // static: to create a temperature using degrees Fahrenheit
    Temperature.fromFahrenheit(100);
    ```

    + Inheritance

  + ```js
    class SymmetricMatrix extends Matrix {
    	constructor(size, content = (x, y) => undefined) {
            super(size, size, (x,y) => {
                if (x < y) return content(y, x);
            	else return content(x,y);
            })
        }
        
        set(x, y, value) {
    		super.set(x, y, value);
            if(x != y) {
    			super.set(y, x, value);
            }
        }
    }

    let matrix = new SymmetricMatrix(5,(x, y) => `${x}, ${y}`);
    console.log(matrix.get(2,3));
    // 3, 2
    ```

    ​