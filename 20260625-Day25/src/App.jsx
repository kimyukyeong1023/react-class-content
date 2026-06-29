import "./App.css";

function App() {
  let number = 20;
  console.log("개발자확인");

  let counter = 0;

  //입력한 검색어 저장!
  let search = "";

  return (
    <>
      <h1>useState?</h1>
      <p>현재 변수 number : {number}</p>
      <br />
      <h2>입력값 받기</h2>
      <input
        type="text"
        onChange={(event) => {
          console.log(event.target);
          console.log(event.target.value);
          search=event.target.value;
        }}
      />
      <br />
      <h3>입력한값:{search}</h3>
      <br />
      <hr />

      <h2>버튼을 클릭하면 화면에 증가하기</h2>
      <h3>{counter}</h3>
      <button
        onClick={() => {
          counter = counter + 1;
          console.log("증가함:", counter);
        }}
      >
        눌러봐!
      </button>
    </>
  );
}

export default App;

// {변수명} HTML 태그에 값을 넣어주는 형태
// - 데이터 바인딩

// () => {} 화살표함수
// 버튼을 실행했을때 한번 즉시 실행하기 때문에
// 굳이 길게 function 이름(){}
// 불편하다는 거다! ()=>{} 키워드하고 함수명
// 없애라 그리고 최대한 간단하게 실행하는 내용만
// {}중괄호 안에 넣어라!
// 다른 태그들이 사용하지 않고 눌러봐 버튼에서만
// 한번 사용한다.!

// onChange={(event)
// event는 리액트에서 어떤 이벤트가 발생했는지
// 저장하고 있는 변수다! event , e (실무함)