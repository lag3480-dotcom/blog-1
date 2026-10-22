# AI 실전노트

AI 도구와 IT 서비스 활용 가이드 블로그. Astro로 빌드하고 GitHub Pages로 배포한다.

- 글: `src/content/posts/*.md` (frontmatter 스키마는 `src/content.config.ts`)
- 사이트 설정(이름, 도메인, 애드센스 ID): `src/site.config.mjs`
- `pubDate`가 미래인 글은 그날 아침 7시(KST) 자동 빌드 때 공개된다.
- 로컬: `npm install && npm run dev`
