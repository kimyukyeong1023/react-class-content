import React from "react";

export default function Signup() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "360px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          position: "relative",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            border: "none",
            background: "transparent",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          X
        </button>

        <h2 style={{ marginTop: "0", marginBottom: "16px" }}>회원가입</h2>

        <div style={{ marginTop: "16px" }}>
          <div style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>이름</label>
            <input type="text" style={{ width: "100%", padding: "8px" }} />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>이메일</label>
            <input type="email" style={{ width: "100%", padding: "8px" }} />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>생년월일</label>
            <input type="date" style={{ width: "100%", padding: "8px" }} />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "6px" }}>가입 경로</label>
            <select style={{ width: "100%", padding: "8px" }}>
              <option value="">선택하세요</option>
              <option value="지인 추천">지인 추천</option>
              <option value="인터넷 검색">인터넷 검색</option>
              <option value="SNS 광고">SNS 광고</option>
              <option value="기타">기타</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
