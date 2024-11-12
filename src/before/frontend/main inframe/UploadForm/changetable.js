// 요일 정의
const daysOfWeek = ['월', '화', '수', '목', '금'];
let data = {};  // 데이터를 저장할 변수

// JSON 데이터 불러오기
async function loadData() {
  try {
    const response = await fetch('../myschedule.json');
    data = await response.json();
    displayStudentInfo();
    displaySchedule();
    renderDayButtons();
  } catch (error) {
    console.error("데이터를 불러오는 중 오류 발생:", error);
  }
}

// 학생 정보 표시
function displayStudentInfo() {
  document.getElementById('studentName').textContent = data.info.name;
  document.getElementById('studentNumber').textContent = data.info.number;
}

// 수업 목록 표시
function displaySchedule() {
  const scheduleList = document.getElementById('scheduleList');
  scheduleList.innerHTML = '';

  data.schedule.forEach((classInfo, index) => {
    const classDiv = document.createElement('div');
    classDiv.classList.add('class-item');
    classDiv.innerHTML = `
      <p><strong>과목명:</strong> ${classInfo.class_name}</p>
      <p><strong>요일:</strong> ${classInfo.class_days.map(day => daysOfWeek[day - 1]).join(', ')}</p>
      <p><strong>시간:</strong> ${classInfo.start_time} - ${classInfo.end_time}</p>
      <p><strong>위치:</strong> ${classInfo.location}</p>
      <button onclick="deleteClass(${index})">삭제</button>
    `;
    scheduleList.appendChild(classDiv);
  });
}

// 새로운 수업 추가
function addClass() {
  const className = document.getElementById('newClassName').value;
  const startTime = document.getElementById('newStartTime').value;
  const endTime = document.getElementById('newEndTime').value;
  const location = document.getElementById('newLocation').value;
  const classDays = [...document.querySelectorAll('.day-button.selected')].map(button => parseInt(button.dataset.day));

  if (className && startTime && endTime && location) {
    data.schedule.push({
      class_name: className,
      class_days: classDays,
      start_time: startTime,
      end_time: endTime,
      location: location
    });
    displaySchedule();
  }
}

// 수업 삭제
function deleteClass(index) {
  data.schedule.splice(index, 1);
  displaySchedule();
}

// 요일 버튼 렌더링
function renderDayButtons() {
  const daysDiv = document.getElementById('newClassDays');
  daysDiv.innerHTML = '';
  daysOfWeek.forEach((day, index) => {
    const button = document.createElement('button');
    button.classList.add('day-button');
    button.dataset.day = index + 1;
    button.textContent = day;
    button.onclick = () => button.classList.toggle('selected');
    daysDiv.appendChild(button);
  });
}

// 시간표 저장 함수 추가
async function saveSchedule() {
  try {
    const response = await fetch('changetable.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // 현재 `data` 변수가 수정된 시간표 데이터를 저장 중임
    });

    if (response.ok) {
      console.log("시간표가 성공적으로 저장되었습니다.");
    } else {
      console.error("시간표 저장 중 오류 발생:", response.statusText);
    }
  } catch (error) {
    console.error("시간표 저장 중 오류 발생:", error);
  }
}

// 시간표 수정완료 버튼 클릭 이벤트 함수
document.getElementById('saveScheduleButton').addEventListener('click', saveSchedule);

// 초기 데이터 로드
loadData();
