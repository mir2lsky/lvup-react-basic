export type Item = {
  name: string;
  slug: string;
}

export const menus: { name: string; items: Item[]}[] = [
  {
    name: 'Next.js를 위한 리액트 개요',
    items: [
      // html은 404 에러 남 -> 근데 브라우저에서 바로 실행은 됨
      { name: '바닐라 자바스크립트', slug: 'html/vanilla.html' },
      { name: '리액트 변환', slug: 'html/react.html' },
      { name: '리액트 함수형 컴포넌트', slug: 'html/react-component.html' },
      { name: 'next.js에서 실행', slug: '/' },
    ],
  },
  {
    name: '리액트 컴포넌트와 속성',
    items: [
      { name: '서버/클라이언트 컴포넌트', slug: 'server-component', },
      { name: '이펙트 훅', slug: 'effect', },
      { name: '컴포지션', slug: 'composition', },
      { name: '상태 끌어올리기', slug: 'lifting-stateup', },
    ],
  },
  {
    name: '리액트 사용자 상호작용과 상태 관리',
    items: [
      { name: '이벤트 처리', slug: 'event', },
      { name: '버튼 이벤트', slug: 'button', },
      { name: '폼 입력 기본', slug: 'input', },
      { name: '폼 입력 최신기법', slug: 'form-state', },
      { name: '리듀서', slug: 'reducer', },
      { name: '컨텍스트', slug: 'context', },
    ],
  },
  {
    name: '리액트의 고급 개념과 패턴',
    items: [
      { name: 'Ref 생성/사용', slug: 'ref', },
      { name: 'Ref 전달하기', slug: 'ref-forward', },
      { name: '조건부 렌더링', slug: 'conditional-rendering', },
      { name: '리스트 렌더링', slug: 'list-rendering', },
      { name: '메모 훅: 과도한 재렌더링 방지', slug: 'memo', },
      { name: '콜백 훅: 큰 리스트 재렌더링 방지', slug: 'list-callback', },
      { name: '사용자 정의 훅', slug: 'custom-hook', },
      // TODO: 책에는 없는 내용인데 깃헙 소스에는 있어서 추가했으나 ssgod일때 에러 존재
      // 실행은 일단 되지만 뭔 내용인지는 모르겠음 --> 뒤에 나오면 확인 예정
      { name: '랜더링 타임 측정', slug: 'rendering-time', },
    ],
  },
]