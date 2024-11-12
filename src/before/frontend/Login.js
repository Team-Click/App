document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const studentId = document.getElementById("studentId").value;
  const name = document.getElementById("name").value;

  // 간단한 로그인 검증 (예시)
  if (studentId === "23011927" && name === "김태경") {
    alert("로그인 성공!");
    window.location.href = "main.html";
  } else {
    document.getElementById("message").textContent = "학번 또는 이름이 올바르지 않습니다.";
  }
});
