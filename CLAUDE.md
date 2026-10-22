# AI 실전노트 운영 지침

AI 도구·IT 활용 가이드 블로그. 목표는 Google AdSense 수익. 운영자(배경)가 글 작성·발행·운영을 Claude에게 맡겼고, **품질이 최우선** 이다.

## 글 작성 규칙
- 글은 `src/content/posts/<영문-slug>.md`. frontmatter 스키마는 `src/content.config.ts` (title, description, pubDate, category, tags, sources, updatedDate).
- 카테고리는 기존 것 우선: `AI 활용법`, `AI 도구 비교`, `엑셀·오피스`, `윈도우·PC`, `구글 서비스`, `스마트폰`.
- 모든 사실(메뉴 경로, 단축키, 함수 문법, 요금, 버전)은 **공식 문서를 직접 확인** 하고 `sources`에 넣는다. 확인 못 한 내용은 쓰지 않는다.
- 경험담을 지어내지 않는다("제가 써 보니" 금지). 광고 클릭 유도 문구 금지.
- 분량은 한국어 3,000~6,000자. 표·예시·단계별 설명·"안 될 때" 섹션을 넣어 실제로 문제를 해결해 주는 글로.
- 요금·기능처럼 바뀌는 정보는 기준 날짜를 본문에 적는다.
- 예시의 숫자 계산은 반드시 검산한다.
- 문체: 존댓말(~습니다/~요 혼용 X, ~습니다체), 짧은 문단, 한국어 UI 메뉴 이름을 굵게.
- 이미 있는 글과 주제가 겹치지 않게 `ls src/content/posts` 로 확인한다.

## 발행
- 하루 1편 꼴. `pubDate`를 `YYYY-MM-DDT07:00:00+09:00`으로 미래 날짜를 주면 매일 07:00 KST 빌드 때 자동 공개된다.
- 마지막 예약 글 다음 날짜부터 이어서 예약한다: `grep -h '^pubDate' src/content/posts/*.md | sort | tail -1`
- `npx astro build` 성공 확인 후 main에 바로 커밋·푸시.
- 주제 후보는 `docs/backlog.md`. 쓴 주제는 목록에서 지운다.

## 설정
- `src/site.config.mjs`: url, base, email, adsenseClient. 커스텀 도메인 연결 시 url을 도메인으로, base를 '/'로.
