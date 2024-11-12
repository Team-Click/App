// JSON 파일을 불러오는 함수
async function loadSchedule() {
    try {
      const response = await fetch("myschedule.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const schedules = await response.json();
      showSchedule(schedules);
    } catch (error) {
      console.error("Failed to load schedule:", error);
    }
  }
  
  // 시간 포맷을 24시간제로 변환
  function timeToIndex(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours - 7) * 2 + (minutes >= 30 ? 1 : 0);
  }
  
  // 시간표를 표시
  function showSchedule(schedules) {
    const scheduleContainer = document.getElementById("schedule-container");
    const schedule = schedules.schedule;
  
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
  
  // 스케줄 데이터 로드
  loadSchedule();
  