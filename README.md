# NodeJS + React (feat. TypeScript)

Node.js 와 React를 이용한, TypeScript를 곁들인 미니 프로젝트

# TypeScipt

타입스크립트(TypeScript)는 자바스크립트(JavaScript)를 기반으로 정적 타입 문법을 추가한 프로그래밍 언어입니다.

## [타입스크립트 특징]

**컴파일 언어, 정적 타입 언어**

자바스크립트는 동적 타입의 인터프리터 언어로 런타임에서 오류를 발견할 수 있습니다. 이에 반해 타입스크립트는 정적 타입의 컴파일 언어이며 타입스크립트 컴파일러 또는 바벨(Babel)을 통해 자바스크립트 코드로 변환됩니다. 코드 작성 단계에서 타입을 체크해 오류를 확인할 수 있고 미리 타입을 결정하기 때문에 실행 속도가 매우 빠르다는 장점이 있습니다. 하지만 코드 작성 시 매번 타입을 결정해야 하기 때문에 번거롭고 코드량이 증가하며 시간이 오래 걸린다는 단점이 있습니다.

**자바스크립트 슈퍼셋(Superset)**

타입스크립트는 자바스크립트의 슈퍼셋, 즉 자바스크립트 기본 문법에 타입스크립트의 문법을 추가한 언어입니다. 따라서 유효한 자바스크립트로 작성한 코드는 확장자를 .js에서 .ts로 변경하고 타입스크립트로 컴파일해 변환할 수 있습니다.

**객체지향 프로그래밍 지원**

타입스크립트는 ES6에서 새롭게 사용된 문법을 포함하고 있으며 클래스, 인터페이스, 상속, 모듈 등과 같은 객체지향 프로그래밍 패턴을 제공합니다.

## [타입스크립트를 쓰는 이유]

자바스크립트는 동적 타입의 인터프리터 언어이기 때문에 런타임에서 오류를 발견할 수 있다. 이에 반해 타입스크립트는 정적 타입의 컴파일 언어이며 타입스크립트 컴파일러 또는 바벨(Babel)을 통해 자바스크립트 코드로 변환된다. 코드 작성 단계에서 타입을 일일이 지정해 주기 때문에 실행속도가 빠르다는 장점이 있지만, 코드 작성시 타입을 지정해주는 것이 번거롭다는 단점이 있다.

타입스크립트는 자바스크립트의 기본 문법에 타입스크립트 문법을 추가한 언어이기 때문에 유효한 자바스크립트로 작성한 코드의 확장자를 .js에서 .ts로 변경하고 타입스크립트로 컴파일해 변환할 수 있다.

---

<br>

# 기본 문법

```jsx
let 이름: string = "kim";
```

변수 만들때 타입지정을 해준다.

변수명: 타입명 으로 쓴다.

타입으로 가능한 것들: string, number, boolean, bigint, null, undefined,[], {}

<br>
<br>

```jsx
let 이름: string[] = ["kim", "park"];
let 나이: { age: number } = { age: number };
```

array 혹은 object 자료는 이렇게 타입 지정을 한다.
<br>
<br>
<br>

```jsx
let 이름: string | number = "kim";
```

변수에 여러가지 타입이 들어올 수 있다면 | 기호를 이용해 or 연산자를 표현한다.
<br>
<br>
<br>

-   ## type

```tsx
type nameType = string | number;
let 이름: nameType = "kim";
```

type 키워드를 사용해 타입을 변수처럼 담아서 사용가능하다.
<br>
<br>
<br>

-   ## literal type

```tsx
type NameType = 'kim' | 'park;
let 이름 :NameType = 'kim';
```

string number 이런 것 뿐만 아니라 나만의 타입을 만들어 사용가능하다.

저렇게 원하는 글자나 숫자를 입력하면 이름이라는 변수엔 앞으로 'kim' 또는 'park'만 들어올 수 있습니다.

literal type이라고 부른다.
<br>
<br>
<br>

-   ## 함수

```tsx
function 함수명(x: number): number {
    return x * 2;
}
```

함수는 파라미터와 return 값이 어떤 타입일지 지정가능합니다.

실수로 다른 타입이 파라미터로 들어오거나 return될 경우 에러를 내줍니다.

함수는 return 타입으로 void를 설정가능한데 return이 없는지 체크할 수 있는 타입입니다.
<br>
<br>
<br>

-   ## 함수에는 타입을 확실히 지정해 줘야함

```tsx
//에러
function 함수명(x: number | string) {
    return x * 2;
}

//가능
function 함수명(x: number | string) {
    if (typeof x === "number") {
        return x * 2;
    }
}
```

타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없습니다.

항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 허락해줍니다.
<br>
<br>
<br>

-   ## array 타입 지정

```tsx
type Member = [number, boolean];
let john: Member = [100, false];
```

array 자료 안에 순서를 포함해서 어떤 자료가 들어올지 정확히 지정하고 싶으면

tuple 타입을 쓰면 됩니다. 대괄호 [ ] 안에 들어올 자료의 타입을 차례로 적어주면 됩니다.
<br>
<br>
<br>

-   ## object 타입 지정

```tsx
type MyObject = {
    name?: string;
    age: number;
};
let 철수: MyObject = {
    name: "kim",
    age: 50,
};
```

object 타입도 정의가 너무 길면 type 키워드로 변수에 담아 사용가능합니다.

특정 속성이 선택사항이면 물음표를 기입가능하다 ( → 무슨 의민지 모르겠음 )
<br>
<br>
<br>

-   ## object 타입 지정 - index signature

```tsx
type MyObject = {
    [key: string]: number;
};
let 철수: MyObject = {
    age: 50,
    weight: 100,
};
```

object안에 어떤 속성이 들어갈지 아직 모른다면

그냥 전부 싸잡아서 타입지정도 가능합니다.

index signature라고 합니다.
<br>
<br>
<br>

-   ## class 타입 지정

```tsx
class Person {
    name;
    constructor(name: string) {
        this.name = name;
    }
}
```

class도 타입설정이 가능합니다.

다만 중괄호 내에 미리 name 이렇게 변수를 만들어놔야 constructor 안에서 [this.name](http://this.name/) 이렇게 사용가능합니다.

**참조: [https://codingapple.com/unit/how-to-install-typescript-in-local-vue-react/](https://codingapple.com/unit/how-to-install-typescript-in-local-vue-react/)**

# styled-component

CSS in JS

기존 웹사이트는 HTML, CSS, JavaScript를 각자 별도의 파일에 두었다. 하지만 최근 React나 Vue, Anhular와 같은 모던 자바스크립트 라이브러리가 인기를 끌면서 웹개발의 패러다임이 바뀌고 있다. 웹 어플리케이션을 여러개의 재활용이 가능한 빌딩 블록으로 분리하여 개발하는 컴포넌트 기반 개발 방법이 주류가 되고있다.

따라서, 웹페이지를 HTML, CSS, JavaScript 3개로 분리하는것이 아니라, 여러 개의 컴포넌트로 분리하고 각 컴포넌트에 HTML,CSS,JavaScript를 포함하는 패턴으로 사용한다.

React는 JSX를 사용해서 이미 JavaScript가 HTML을 포함하고 있는 형태를 취하고 있고, 여기에 CSS-in-JS라이브러리만 사용하면 CSS도 손쉽게 JavaScript에 삽입할 수 있다.

# npm VS yarn

npm - nodeJS 의 기본 패키지 매니저 <br>
yarn - 페이스북에서 개발했고 , npm의 단점을 보안한 패키지 매니저

# npx

npm 5.2버전 이상에서 지원하는 패키지 실행 도구이다. npx로 패키지를 실행하면 로컬 → 글로벌 순으로 패키지 를 찾고 있다면 해당 범위에서 패키지를 실행하고 로컬 또는 글로벌에 없다면 원격 npm에서 찾아 최신 버전으로 실행한다. 그리고 npx로 실행된 패키지는 실행하기 위해 설치되었다가 실행 후 삭제된다.

npx create-react-app [패키지 이름]
