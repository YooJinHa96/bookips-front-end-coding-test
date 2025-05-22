# 📘 Bookips 프론트엔드 과제

안녕하세요. 해당 과제는 Bookips 프론트엔드 과제를 기반으로, 컴포넌트 단위 UI 설계 및 조합 구현 능력을 확인하기 위해 진행한 프로젝트입니다.

---

## 🛠 기술 스택

- **React (with Vite)**
- **TypeScript**
- **Tailwind CSS**
- **Storybook** (컴포넌트 문서화용)
- **clsx** (조건부 클래스 유틸)

---

## 📁 프로젝트 구조

src/
├── components/
│ ├── Button/
│ ├── Checkbox/
│ ├── Select/
│ ├── Menu/
│ ├── TextField/
│ └── ...
├── pages/ # 컴포넌트 조합 UI

## ▶ 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# Storybook 실행 (선택)
npm run storybook
```

🧩 구현한 컴포넌트
컴포넌트 설명
Button 크기, 색상, 상태(hover, disabled, selected) 지원
Checkbox 기본 / 비활성 / 인디터미넌트 상태 지원
Select 단일/다중 선택, fillContainer 옵션 구현
Menu Select와 연결되는 옵션 리스트, scrollable 옵션 포함
TextField 다양한 상태 및 아이콘, helperText, error 지원

지원

🧪 Storybook
각 컴포넌트의 다양한 상태(Props)를 시각적으로 확인할 수 있습니다.

```bash
복사
편집
npm run storybook
```
