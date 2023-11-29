# JavaScript
## 2023/11/21(화) ~

### HTML :: 정적 

### CSS :: 
style 안에 정의해서 사용 \
class는 무언가를 그룹핑하는것, id는 무언가를 식별한다. \
class 선택자: . 광범위하게 효과를 줌 \
id 선택자 : #  예외처리할 효과를 줌 \
id > class > 태그 순으로 우선순위로 효과가 적용된다. \
span 태그는 div 태그처럼 무색무취이지만 div는 화면 전체를 다씀 \ 


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

refactoring :: 코드 재정비, 가독성 높이고, 유지보수 높이고, 중복을 낮추는 행위 \
1. this(자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수)를 사용하여 효율을 높인다. \
`document.querySelector('#night_day').value === this.value`
2. 변수를 사용하여 효율을 높인다. \
```javascript
    var target = document.querySelector('body');
    target.style.backgroundColor = 'black';
    target.style.color = 'white';```