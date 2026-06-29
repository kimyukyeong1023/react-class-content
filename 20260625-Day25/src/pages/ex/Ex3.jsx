import { useState } from "react";

function ImageSlider() {
  const [이미지배열] = useState([   // ① 이미지 경로 배열
    "/project1.webp",
    "/project2.webp",
    "/project3.webp",
  ]);
  const [순서, set순서] = useState(0); // ② 현재 보여줄 인덱스

  function handleNext() {
    if (순서 == 이미지배열.length - 1) {  // ③ 마지막 순서면
      set순서(0);                        //    처음으로 되돌림
    } else {
      set순서(순서 + 1);                  // ④ 아니면 다음 순서로
    }
  }

  return (
    <div>
      <img src={이미지배열[순서]} alt="" onClick={handleNext} /> {/* ⑤ */}
      <p>{순서 + 1} / {이미지배열.length}</p>
    </div>
  );
}

export default ImageSlider;
