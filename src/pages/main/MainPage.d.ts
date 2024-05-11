// MainPage.d.ts

// MainPage 모듈의 타입 선언
declare module "@pages/main/MainPage" {
  // MainPage 컴포넌트의 props 타입
  export interface MainPageProps {
    // props 정의
  }

  // MainPage 컴포넌트의 타입
  export default function MainPage(props: MainPageProps): JSX.Element;
}
