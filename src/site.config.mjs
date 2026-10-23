// 사이트 전역 설정. 도메인을 연결하면 url을 바꾸고 base를 '/'로 바꾼다.
export const SITE = {
  url: 'https://aisiljeonnote.com',
  base: '/',
  name: 'AI 실전노트',
  description: 'AI 도구와 IT 서비스를 실제로 써먹는 방법을 단계별로 정리합니다. 사용법, 비교, 문제 해결까지.',
  author: 'AI 실전노트 편집팀',
  email: 'lag3480@naver.com',
  googleSiteVerification: 'bPVb91GryZ4Z9GssP06t8XCqXXfVs4viR0yW8nXVlfM', // 서치 콘솔 HTML 태그의 content 값
  naverSiteVerification: '',
  // 쿠팡 파트너스 가입·애드센스 승인 후 true. 꺼져 있으면 글에 쿠팡 링크가 있을 때 빌드가 실패한다.
  coupangPartners: false,
  adsenseClient: '', // 예: 'ca-pub-0000000000000000' (승인 후 입력)
};
