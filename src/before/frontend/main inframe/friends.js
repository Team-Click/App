// JSON 파일을 불러오는 함수
async function loadSchedules() {
  try {
    const response = await fetch("friends.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const schedules = await response.json();
    return schedules;
  } catch (error) {
    console.error("Failed to load schedules:", error);
    return [];
  }
}

// 친구 이름에 맞는 시간표를 표시하는 함수
async function showSchedule(friendName) {
  const schedules = await loadSchedules();
  const friendSchedule = schedules.find((schedule) => schedule.info.name === friendName);
  if (friendSchedule) {
    renderSchedule(friendSchedule);
  } else {
    console.error("Schedule not found for:", friendName);
  }
}

// 시간표를 화면에 표시
function renderSchedule(friendSchedule) {
  const scheduleContainer = document.getElementById("schedule-container");
  const schedule = friendSchedule.schedule;

  const tableHTML = `
    <table class="schedule-table">
      <tr>
        <th>시간</th>
        <th>월</th>
        <th>화</th>
        <th>수</th>
        <th>목</th>
        <th>금</th>
      </tr>
      ${generateTimeRows(schedule)}
    </table>
  `;

  scheduleContainer.innerHTML = `<h2>${friendSchedule.info.name} (${friendSchedule.info.number})</h2>` + tableHTML;
}

// 시간표 행을 생성
function generateTimeRows(schedule) {
  const rows = [];
  for (let hour = 7; hour < 24; hour++) {
    for (let half = 0; half < 2; half++) {
      const time = `${String(hour).padStart(2, "0")}:${half === 0 ? "00" : "30"}`;
      rows.push(`<tr><td>${time}</td>${generateDayCells(schedule, time)}</tr>`);
    }
  }
  return rows.join("");
}

// 요일 셀 생성
function generateDayCells(schedule, time) {
  const cells = [];
  for (let day = 1; day <= 5; day++) {
    const classInfo = schedule.find(
      (item) =>
        item.class_days.includes(day) &&
        time >= item.start_time &&
        time < item.end_time
    );
    if (classInfo) {
      cells.push(`<td class="class-cell">${classInfo.class_name}<br>${classInfo.location}</td>`);
    } else {
      cells.push("<td></td>");
    }
  }
  return cells.join("");
}

// 모달 열기 및 닫기 함수 예시 (추가/삭제용)
function showAddFriendModal() {
  document.getElementById("addFriendModal").style.display = "block";
}

function showRemoveFriendModal() {
  document.getElementById("removeFriendModal").style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}


/*
const schedules = {
  friend1: [
    { day: "월", start: "09:00", end: "10:30", class: "수학", professor: "김교수" },
    { day: "화", start: "13:00", end: "15:30", class: "과학", professor: "박교수" },
    { day: "수", start: "14:00", end: "16:30", class: "영어", professor: "최교수" },
    { day: "목", start: "10:30", end: "12:00", class: "철학", professor: "이교수" },
    { day: "금", start: "08:30", end: "10:00", class: "역사", professor: "정교수" },
  ],
  friend2: [
    { day: "월", start: "11:00", end: "13:30", class: "프로그래밍", professor: "홍교수" },
    { day: "화", start: "15:00", end: "17:00", class: "데이터베이스", professor: "이교수" },
    { day: "수", start: "08:30", end: "10:00", class: "컴퓨터 네트워크", professor: "최교수" },
    { day: "목", start: "13:00", end: "14:30", class: "운영체제", professor: "정교수" },
    { day: "금", start: "09:30", end: "11:00", class: "소프트웨어 공학", professor: "박교수" },
  ],
  // 다른 친구들의 시간표도 비슷하게 추가
};

// 시간 포맷을 24시간제로 변환
function timeToIndex(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return (hours - 7) * 2 + (minutes >= 30 ? 1 : 0);
}

// 요일을 인덱스로 변환
function dayToIndex(day) {
  return ["월", "화", "수", "목", "금"].indexOf(day);
}

// 친구 시간표를 표시
function showSchedule(friendId) {
  const scheduleContainer = document.getElementById("schedule-container");
  const schedule = schedules[friendId];
  
  const tableHTML = `
    <table class="schedule-table">
      <tr>
        <th>시간</th>
        <th>월</th>
        <th>화</th>
        <th>수</th>
        <th>목</th>
        <th>금</th>
      </tr>
      ${generateTimeRows(schedule)}
    </table>
  `;
  
  scheduleContainer.innerHTML = tableHTML;
}

// 시간표 행을 생성
function generateTimeRows(schedule) {
  const rows = [];
  for (let hour = 7; hour < 24; hour++) {
    for (let half = 0; half < 2; half++) {
      const time = `${String(hour).padStart(2, "0")}:${half === 0 ? "00" : "30"}`;
      rows.push(`<tr><td>${time}</td>${generateDayCells(schedule, time)}</tr>`);
    }
  }
  return rows.join("");
}

// 요일 셀 생성
function generateDayCells(schedule, time) {
  const cells = [];
  for (let day = 0; day < 5; day++) {
    const classInfo = schedule.find(
      (item) =>
        dayToIndex(item.day) === day &&
        time >= item.start &&
        time < item.end
    );
    if (classInfo) {
      cells.push(`<td class="class-cell">${classInfo.class}<br>${classInfo.professor}</td>`);
    } else {
      cells.push("<td></td>");
    }
  }
  return cells.join("");
}
*/