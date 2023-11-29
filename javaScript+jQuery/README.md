# JavaScript
## 2023/11/21(화) ~

### HTML :: 정적 

### CSS :: 
style 안에 정의해서 사용 \
class는 무언가를 그룹핑하는것, id는 무언가를 식별한다. \
class 선택자: . 광범위하게 효과를 줌 \
id 선택자 : #  예외처리할 효과를 줌 \
id > class > 태그 순으로 우선순위로 효과가 적용된다. \
span 태그는 div 태그처럼 무색무취이지만 div는 화면 전체를 다씀 


### JavaScript :: 동적, 상호작용 , 프로그래밍 언어
시간에 순서에 따라서 실행되어야 할 기능을 프로그래밍 언어의 문법에 맞게 글로 적어두는 방식 \
program :: 순서 \
programming :: 순서를 만드는 행위 \
programer :: 순서를 만드는 사람\
eventHandler에 JS를 사용하여 상호작용시킨다. \

JS DataType :: `String, Number, Boolean, Symbol , null, undefined, BigInt`\
비교 연산자 Comparison operatiors & Boolean ::  `== === != !== < & |`\
조건문 Conditional statements :: `if , else if , else `\
반복문 Loop:: `while, for, map, foreach`\
배열 Array :: `var fruits = ["apple","banana","avocado"]`\
함수 function 

Refactoring :: 코드 재정비, 가독성 높이고, 유지보수 높이고, 중복을 낮추는 행위 
1. this(자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수)를 사용하여 효율을 높인다. \
`document.querySelector('#night_day').value === this.value`
단, 함수를 생성할 경우 this는 전역 객체를 가르키게 된다. 
2. 변수를 사용하여 효율을 높인다. \
```javascript
    var target = document.querySelector('body');
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
```

매개변수와 인자\
left와 right는 parameter (매개변수)\
sum의 2, 5는 argument(인자)
```javascript 
    function sum(left, right) {
        document.write(left + right);
    }
    sum(2, 5);
```

함수의 활용 ::return을 통해 원자화 된 기능을 다양한 용도로 활용하기 위해 만든다 
```javascript 
    function sum(left, right) {
        return(left+right)
    }
    document.write(sum(2, 5));
    document.write('<div style="color:powderblue">'+sum(2, 5)+'</div>');
```

객체 \
복잡도의 한계 속에서 서로 연관 된 함수와 변수를 같은 이름으로 그룹핑해서 잘 정돈하기 위한 것 \
프로퍼티 :: 객체에 소속 된 변수
```javascript 
        var coworkers={
            "programmer":"Ginttone",
            "designer":"Yuna"
        } //생성
        document.write("<div>Programmer : "+coworkers.programer+"</div>");
        document.write("<div>Designer : "+coworkers.designer+"</div>");
        coworkers.bookkeeper="Yoon" //추가 1
        document.write("<div>Bookkeepper : "+coworkers.bookkeeper+"</div>");
        coworkers["data scientist"]="Kyuhyun" //추가 2
        document.write("<div>Data Scientist : "+coworkers["data scientist"]+"</div>");
```

객체와 반복문 :: 해당 key의 value 가져오는 방법 
```javascript 
    var coworkers={
        "programer":"Ginttone",
        "designer":"Yuna"
    } 
    coworkers.bookkeeper="Yoon" 
    coworkers["data scientist"]="Kyuhyun" 
    
    for(var key in coworkers){
        document.write('<div>'+coworkers[key]+'</div>');
    }
```
메소드:: 객체에 소속 된 함수
```javascript
    var coworkers={
        "programer":"Ginttone",
        "designer":"Yuna",
        "bookkeeper":"Yoon",
        "data scientist":"Kyuhyun" 
    } 
    coworkers.showAll = function () {
        for (var key in this) {
            document.write('<div>' + this[key] + '</div>');
        }
    }
    coworkers.showAll();
``` 

객체의 활용
```javascript 
var BodyColors = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};

function dayNightHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "Night") {
    BodyColors.setBackgroundColor("black");
    BodyColors.setColor("white");
    self.value = "Day";
  } else if (self.value === "Day") {
    BodyColors.setBackgroundColor("white");
    BodyColors.setColor("black");
    self.value = "Night";
  }
}
```