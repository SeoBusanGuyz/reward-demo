
| 1 |  
feat: PWA 기본 설정
manifest.json 추가
서비스 워커 등록
오프라인 캐시 전략 정의

| 2 |   
chore: 프로젝트 초기 설정 (Spring Boot + React)
Spring Boot 프로젝트 생성
React 앱 구조 생성 (create-react-app --template cra-template-pwa)

| 3 |  
feat: 위치 인식 로직 구현
최초 1회 navigator.geolocation.getCurrentPosition
상태 저장 및 타이머 시작

| 4 |  
feat: 주기적 위치 갱신 및 거리 계산
1분마다 getCurrentPosition 호출
Haversine 공식으로 거리 계산  

| 5 |   
feat: 방문 처리 알림                            
5분 경과 시 조건 만족 확인
alert('방문처리') 출력

| 6 |  
feat: 위치 벗어나면 초기화 로직                 
거리 >1km 감지 시 타이머/초기위치 리셋

| 7 |  
docs: 이슈 및 PR 템플릿 추가                  
.github/ISSUE_TEMPLATE/issue_template.md
.github/PULL_REQUEST_TEMPLATE/pull_request_template.md
