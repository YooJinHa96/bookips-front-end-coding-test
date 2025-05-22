# 📘 Bookips 프론트엔드 과제

해당 과제는 Bookips 프론트엔드 과제를 기반으로, 컴포넌트 단위 UI 설계 및 조합 구현 능력을 확인하기 위해 진행한 프로젝트입니다.



## ▶ 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# Storybook 실행 
npm run storybook
```
## 🛠 기술 스택

- **React (with Vite)**
  - **Vite**: 빠른 빌드 속도와 가벼운 번들링에 이점을 가지고 있기 때문에 선택  
- **TypeScript**
- **Tailwind CSS**
- **Storybook**
- **lucide-react**
  - React 컴포넌트 형태로 SVG용 아이콘을 사용할려고 설치
---

🧩 구현한 컴포넌트 목록 및 설명

| 컴포넌트       | 설명                                                                 |
|----------------|----------------------------------------------------------------------|
| **Button**     | 크기, 색상, 상태(hover, disabled, selected) 지원                       |
| **Checkbox**   | 기본 / 비활성 / 인디터미넌트 상태 지원                                  |
| **Select**     | 단일/다중 선택, fillContainer 옵션 구현                                |
| **Menu**       | Select와 연결되는 옵션 리스트, scrollable 옵션 포함                     |
| **TextField**  | 다양한 상태 및 아이콘, helperText, error 지원                          |
| **signupForm** | Figma 화면 시안을 기반으로 공통 컴포넌트들을 조합하여 구현한  컴포넌트    |

## ❓ 기타
Figma에서는 컴포넌트의 상태(`states`)가 Properties로 정의되어 있지만,  
실제 구현에서는 대부분의 상태를 `props`로 직접 전달하지 않고,  
Tailwind의 상태 modifier (`hover:`, `focus:`, `disabled:` 등)를 통해 CSS 레벨에서 처리했습니다.

예를 들어, `Button` 컴포넌트는 `hovered`, `focused` 같은 상태를 props로 받지 않고,  
내부적으로 `clsx`를 활용해 해당 상태에 맞는 스타일이 적용되도록 구현했습니다.



