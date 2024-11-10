# App
앱 개발 레포지터리입니다.

/App
├── /src             # 소스 코드 폴더
│   ├── /components  # 재사용 가능한 컴포넌트들
│   ├── /screens     # 화면 컴포넌트
│   ├── /navigation  # 네비게이션 설정
│   ├── /services    # API 호출 및 비즈니스 로직
│   ├── /context     # Context API 관련 파일
│   ├── /hooks       # 커스텀 훅
│   ├── /store       # 상태 관리
│   ├── /utils       # 유틸리티 함수 및 상수
│   └── App.js       # 앱의 메인 엔트리 파일
├── /assets          # 이미지, 폰트 등의 정적 파일
│   ├── /images      # 이미지 파일
│   ├── /fonts       # 폰트 파일
│   └── ...
├── /config          # 환경 설정 파일 (예: API 키나 환경 변수 관리)
│   └── apiConfig.js
├── /tests           # 테스트 코드
│   ├── unit         # 유닛 테스트 파일
│   ├── integration  # 통합 테스트 파일
│   └── ...
├── package.json
└── README.md
