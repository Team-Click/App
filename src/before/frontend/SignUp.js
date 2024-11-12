document.getElementById("signUpForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const studentId = document.getElementById("studentId").value;
  const name = document.getElementById("name").value;

  // 간단한 회원가입 완료 알림 및 로그인 페이지로 이동
  if (studentId && name) { // 값이 채워져 있으면 회원가입 성공으로 간주
    alert("회원가입이 정상적으로 완료되었습니다!");
    window.location.href = "Login.html";
  } else {
    document.getElementById("message").textContent = "모든 필드를 입력해 주세요.";
  }
});
