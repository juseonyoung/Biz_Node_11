let strNum = "3";
let sum = Number(strNum) + 5; //이렇게 넘버로 묶어서 문자열을 숫자로 변환
console.log(sum);

sum = 5 + parseInt(strNum); //parseInt보다는 위 방법 권장
console.log(sum);

// 원둘레 연산
let circle = 3 * 3.141592;
console.log("지름이 3인 원의 둘레길이:" + circle);
circle = 3 * Math.PI;
console.log(circle);

for (i = 0; i < 10; i++) {
  let rnd = Math.floor(Math.random() * 10) + 1; // 1부터 10꺄ㅏ지의 난수
  console.log(rnd);
}

let str1;
let str2 = null;
let str3 = "";
let str4 = 0;
let str5 = NaN; // not a number : 문자열형태의 값이 숫자로 변환가능한가?
let str6 = undefined;

let result = str1 || str2 || str3 || str4 || str5 || str6 || "overwatch";
//            f        f      f         f      f      f         TRUE
// 이중에 하나만 true라도 트루
// str붙은거 다 false이기 때문에 맨 마지막 문자열 출력
// str1이 true라면 뒤에코드는 볼것도 없이 true가 나온다
// overwatch가 왜 true냐면 위에 전시된 것 빼고는 다 true이다
// 활용하면 복잡한 if문 쓸 필요가 없다

// 임의의 변수들에 담길 예정인 값중에
// 실제 문자열, 숫자 형태인 값이 담긴 변수를 찾아 그 변수값을 다른변수에 담고싶을 때
// if 사용하지 않고 || 연산자 사용하여 구현할 수 있다.

console.log("문자열3", Number("3"));
console.log("문자열3A", Number("3A")); // java에서는 numberformatexcepntion이 나옴

let 어떤값 = "3A";
if (!Number(어떤값)) {
  console.log(어떤값, "은 숫자가 아니다");
}

console.log("parseInt", parseInt(어떤값)); // ??? 얘는 3이 나옴
