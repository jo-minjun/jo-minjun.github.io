---
version: alpha
name: jo-minjun.github.io
description: 흰 배경 단색 디자인이다. 거의 검은 잉크(#141414)를 흰 바탕에 쓰고, 층은 그림자 대신 옅은 회색 배경과 1px 선으로 나눈다. 강조색이 없다. 버튼과 링크 목록은 알약 모양이고, 프로젝트 카드는 24px 모서리다. 글꼴은 Pretendard 가변 글꼴 하나를 652(제목), 456(본문), 300(소개 문장) 굵기로 쓴다. 한국어 페이지는 같은 값에 줄 간격만 넓다.

colors:
  ink: "#141414"
  ink-soft: "#262626"
  muted: "#707070"
  faint: "#adadad"
  canvas: "#ffffff"
  canvas-soft: "#f3f3f3"
  hairline-soft: "#f0f0f0"
  hairline: "#e0e0e0"

typography:
  fontFamily: Pretendard Variable
  weights:
    light: 300
    text: 456
    strong: 600
    heading: 652
  leading:
    heading: { en: 1, ko: 1.15 }
    prose: { en: 1.5, ko: 1.65 }
  display:
    fontSize: clamp(48px, 13vw, 80px)
    fontWeight: 652
    lineHeight: "{typography.leading.heading}"
  heading-1:
    fontSize: clamp(40px, 9vw, 56px)
    fontWeight: 652
    lineHeight: "{typography.leading.heading}"
  heading-doc:
    fontSize: clamp(32px, 7vw, 44px)
    fontWeight: 652
    lineHeight: "{typography.leading.heading}"
  heading-2:
    fontSize: 24px
    fontWeight: 652
    lineHeight: 1.25
  title:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
  lead:
    fontSize: 20px
    fontWeight: 300
    lineHeight: 1.38
  body:
    fontSize: 16px
    fontWeight: 456
    lineHeight: 1.38
  prose:
    fontSize: 16px
    fontWeight: 456
    lineHeight: "{typography.leading.prose}"
  body-sm:
    fontSize: 14px
    fontWeight: 456
    lineHeight: 1.43
  label:
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
  letterSpacing: 0

rounded:
  code: 6px
  sm: 16px
  md: 24px
  full: 9999px

spacing:
  scale: [4px, 8px, 12px, 16px, 24px, 32px, 48px, 80px, 120px]
  page-width: 760px
  page-gutter: 20px
  section-gap: { default: 80px, below-640px: 56px }
  footer-gap: 120px
  touch-target: 44px

components:
  nav-pill:
    backgroundColor: "{colors.canvas-soft}"
    hoverBackgroundColor: "{colors.hairline}"
    textColor: "{colors.ink}"
    fontWeight: "{typography.weights.strong}"
    rounded: "{rounded.full}"
    minHeight: "{spacing.touch-target}"
  button-primary:
    backgroundColor: "{colors.ink}"
    hoverBackgroundColor: "{colors.ink-soft}"
    textColor: "{colors.canvas}"
    fontWeight: "{typography.weights.strong}"
    rounded: "{rounded.full}"
    minHeight: "{spacing.touch-target}"
  kind-chip:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
  project-card:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    hoverBorderColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 24px
  row-list:
    rowBorder: "{colors.hairline-soft}"
    rowPadding: 16px 0
    typography: "{typography.prose}"
  link-list:
    backgroundColor: "{colors.canvas-soft}"
    hoverBackgroundColor: "{colors.hairline}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    minHeight: 64px
  table:
    borderColor: "{colors.hairline}"
    headerBackgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
    fontSize: 14px
    lineHeight: 1.5
  faq:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.sm}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    secondaryTextColor: "{colors.faint}"
    rounded: "{rounded.md} {rounded.md} 0 0"
  code:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.code}"
---

# jo-minjun.github.io 디자인

이 사이트는 흰 배경에 거의 검은 잉크만 쓰는 단색 디자인이다. 그림자와 강조색이 없고, 층은 옅은 회색 배경과 1px 선으로 나눈다. 버튼과 링크 목록은 알약 모양이다. 화면의 개성은 Pretendard의 굵기 차이(652 제목, 300 소개 문장)에서 나온다.

이 문서는 디자인의 기준이다. 실제 값은 `docs/assets/site.css` 맨 위 `:root`의 CSS 변수에 있다. 값을 바꾸면 이 문서와 `site.css`를 함께 고친다.

## 색상

| 토큰 | CSS 변수 | 값 | 용도 |
|---|---|---|---|
| `{colors.ink}` | `--ink` | `#141414` | 제목, 본문, 링크 글자. 검은 버튼과 푸터의 배경 |
| `{colors.ink-soft}` | `--ink-soft` | `#262626` | 검은 버튼에 마우스를 올렸을 때의 배경 |
| `{colors.muted}` | `--muted` | `#707070` | 흰 배경 위의 보조 글자(프로젝트 카드 설명, 정보 목록의 항목 이름, 시행일, 이름 옆 영문 이름) |
| `{colors.faint}` | `--faint` | `#adadad` | 링크 밑줄, 목록 글머리 기호, 푸터의 보조 글자 |
| `{colors.canvas}` | `--canvas` | `#ffffff` | 페이지 배경 |
| `{colors.canvas-soft}` | `--canvas-soft` | `#f3f3f3` | 알약 링크, 분류 칩, 링크 목록, 표 머리줄, 접는 질문, 인라인 코드의 배경 |
| `{colors.hairline-soft}` | `--hairline-soft` | `#f0f0f0` | 기능 목록과 정보 목록의 줄 구분선 |
| `{colors.hairline}` | `--hairline` | `#e0e0e0` | 프로젝트 카드와 표의 테두리. 회색 알약에 마우스를 올렸을 때의 배경 |

테마는 흰 배경 하나다. 다크 모드는 없다. `color-scheme: light`로 브라우저 기본 요소도 밝은 색으로 고정한다.

## 글꼴

글꼴은 Pretendard 1.3.9 가변 글꼴 하나다. 한글과 라틴 글자를 같은 글꼴로 쓴다. 글꼴 파일은 `docs/assets/fonts/pretendard/`에 있고, 글자 범위별로 나뉜 파일(dynamic subset)을 쓴다. 브라우저는 페이지에 나온 글자의 파일만 내려받는다.

굵기는 네 가지만 쓴다.

| 이름 | 값 | 용도 |
|---|---|---|
| `heading` | 652 | `h1`, `h2`, 푸터 이름 |
| `strong` | 600 | 알약 링크와 버튼의 글자, 카드 제목, 분류 칩, `<strong>`, 표 머리줄 |
| `text` | 456 | 본문 |
| `light` | 300 | 소개 문장(`.lead`), 홈의 직함, 이름 옆 영문 이름 |

| 토큰 | 크기 | 굵기 | 줄 간격 | 용도 |
|---|---|---|---|---|
| `display` | 48–80px | 652 | 제목 줄 간격 | 홈의 이름, 푸터 이름 |
| `heading-1` | 40–56px | 652 | 제목 줄 간격 | 프로젝트 페이지 제목 |
| `heading-doc` | 32–44px | 652 | 제목 줄 간격 | 정책 페이지 제목(`.doc`) |
| `heading-2` | 24px | 652 | 1.25 | 섹션 제목 |
| `title` | 20px | 600 | 1.3 | 프로젝트 카드 제목 |
| `lead` | 20px | 300 | 1.38 | 프로젝트 페이지의 소개 문장, 홈의 직함 |
| `body` | 16px | 456 | 1.38 | 짧은 글 |
| `prose` | 16px | 456 | 긴 글 줄 간격 | 기능 목록, 정책 페이지 본문 |
| `body-sm` | 14px | 456 | 1.43 | 링크 목록 설명, 시행일 |
| `label` | 12px | 600 | 1.33 | 분류 칩 |

크기가 범위로 적힌 토큰은 화면 너비에 따라 `clamp()`로 바뀐다.

### 한글 줄 간격

줄 간격은 페이지 언어(`<html lang>`)에 따라 다르다. 한글은 글자가 줄 높이를 꽉 채워서, 라틴 글자 기준 줄 간격에서는 줄이 서로 붙는다.

| 변수 | 영어 | 한국어 |
|---|---|---|
| `--leading-heading` (제목) | 1.0 | 1.15 |
| `--leading-prose` (긴 글) | 1.5 | 1.65 |

글자 간격(letter-spacing)은 모든 크기에서 0이다. 대문자 변환을 쓰지 않는다.

## 레이아웃

- 내용은 가운데 놓인 한 단(최대 760px)에 왼쪽 정렬로 둔다. 화면 양옆 여백은 20px이다.
- 섹션 사이는 80px을 띄운다. 화면 너비 640px 이하에서는 56px을 띄운다. 섹션 사이에 구분선을 넣지 않는다.
- 본문과 푸터 사이는 120px을 띄운다.
- 새 간격이 필요하면 4, 8, 12, 16, 24, 32, 48, 80, 120px 중에서 고른다.
- 프로젝트 카드 목록은 카드 너비가 300px 이상이 되도록 열 수를 정한다. 데스크톱에서는 2열, 모바일에서는 1열이다.
- 페이지는 화면 높이보다 짧아도 푸터가 화면 맨 아래에 붙는다.

## 층과 깊이

그림자를 쓰지 않는다. 층은 배경색 차이와 1px 선으로 나타낸다.

| 단계 | 처리 | 쓰는 곳 |
|---|---|---|
| 0 | `{colors.canvas}` 배경 | 페이지 대부분 |
| 1 | `{colors.canvas-soft}` 배경, 테두리 없음 | 알약 링크, 분류 칩, 링크 목록, 접는 질문, 표 머리줄 |
| 2 | 흰 배경에 1px `{colors.hairline}` 테두리 | 프로젝트 카드, 표 |
| 반전 | `{colors.ink}` 배경, `{colors.canvas}` 글자 | 검은 버튼, 푸터 |

푸터는 위쪽 모서리만 24px로 둥글게 하고, 모든 본문 페이지와 404 페이지의 끝을 닫는다.

## 모양

| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| `{rounded.full}` | 9999px | 상단 링크, 버튼, 연락처 링크, 링크 목록, 분류 칩 |
| `{rounded.md}` | 24px | 프로젝트 카드, 푸터 위쪽 모서리 |
| `{rounded.sm}` | 16px | 표, 접는 질문 |
| `{rounded.code}` | 6px | 인라인 코드 |

## 컴포넌트

**상단 링크(`nav-pill`)**: 뒤로 가기와 언어 전환 링크다. 회색 알약이고 높이는 44px 이상이다. 뒤로 가기는 왼쪽, 언어 전환은 오른쪽에 둔다. 페이지 위쪽에 고정하지 않는다.

**검은 버튼(`button-primary`)**: 페이지에서 가장 중요한 행동 하나에만 쓴다. 홈에서는 이메일 링크, 404 페이지에서는 홈으로 가는 링크다.

**연락처 링크**: 홈의 이메일, LinkedIn, Instagram 링크다. 이메일은 검은 버튼이고, 나머지는 회색 알약이다.

**분류 칩(`kind-chip`)**: 프로젝트의 종류(예: "모바일 퍼즐 게임")를 보여 준다. 누를 수 없고, 12px 글자의 회색 알약이다.

**프로젝트 카드(`project-card`)**: 흰 배경에 1px 테두리, 24px 모서리다. 마우스를 올리면 테두리가 `{colors.ink}`로 바뀐다. 제목, 분류 칩, `{colors.muted}` 설명 순으로 쌓는다.

**기능 목록과 정보 목록(`row-list`)**: 줄마다 위쪽에 1px `{colors.hairline-soft}` 선을 긋는다. 기능 목록은 굵은 항목 이름 뒤에 설명을 잇는다. 정보 목록은 왼쪽에 `{colors.muted}` 항목 이름, 오른쪽에 값을 둔다.

**링크 목록(`link-list`)**: 문서 링크, 외부 링크, 언어 선택, 404 페이지의 프로젝트 목록에 쓴다. 높이 64px 이상의 회색 알약이고, 제목과 설명 두 줄을 담는다. 오른쪽 끝 표시는 링크 종류를 나타낸다. 사이트 안 링크는 `›` 모양 꺾쇠, 새 탭 링크는 `↗`다.

**표(`table`)**: 1px 테두리와 16px 모서리다. 글자는 14px, 줄 간격은 1.5다. 머리줄은 회색 배경이다. 줄 사이는 1px 선으로 나눈다. 첫 열은 8em보다 좁아지지 않는다.

**접는 질문(`faq`)**: 지원 페이지의 자주 묻는 질문이다. 회색 배경에 16px 모서리이고, 오른쪽 꺾쇠가 열림 상태를 보여 준다.

**푸터(`footer`)**: 검은 배경에 이름을 `display` 크기로 쓰고, 직함과 GitHub 링크를 둔다.

**인라인 코드(`code`)**: 회색 배경에 6px 모서리이고, 고정폭 글꼴을 쓴다.

## 아이콘과 공유 이미지

세 이미지는 사이트와 같은 색상과 Pretendard로 그린 화면을 캡처해 만들었다. 글자나 값을 바꾸려면 아래 값으로 다시 그린다.

| 파일 | 크기 | 구성 |
|---|---|---|
| `docs/favicon.ico` | 16·32·48px | `{colors.ink}` 원 안에 흰색 "조"를 652 굵기로 쓴다. 글자 너비는 원 지름의 약 54%이고, 글자는 원의 가운데에 둔다. |
| `docs/apple-touch-icon.png` | 180px | 같은 글자를 꽉 찬 `{colors.ink}` 정사각형에 쓴다. iOS가 모서리를 직접 둥글게 자르기 때문에 모서리를 둥글게 하지 않는다. |
| `docs/assets/og-image.png` | 1200×630 | 푸터와 같은 반전 화면이다. `{colors.ink}` 배경에 "조민준"(184px, 652), "Jo Minjun"(64px, 300, `{colors.faint}`)을 쌓는다. 아래 줄 왼쪽에 "Product Engineer"(34px, `{colors.faint}`), 오른쪽에 "jo-minjun.github.io"(34px, 600)를 둔다. 안쪽 여백은 위와 좌우 96px, 아래 80px이다. |

## 접근성

- 글자와 배경의 명도 대비는 아래와 같다. 본문 글자의 조합은 모두 WCAG AA 기준(4.5:1)을 넘는다.

  | 글자 | 배경 | 대비 |
  |---|---|---|
  | `{colors.ink}` | `{colors.canvas}` | 18.42:1 |
  | `{colors.ink}` | `{colors.canvas-soft}` | 16.60:1 |
  | `{colors.muted}` | `{colors.canvas}` | 4.95:1 |
  | `{colors.faint}` | `{colors.ink}` | 8.21:1 |
  | `{colors.canvas}` | `{colors.ink}` | 18.42:1 |

- `{colors.muted}` 글자는 `{colors.canvas-soft}` 배경 위에 쓰지 않는다. 대비가 4.46:1이어서 기준에 못 미친다.
- `{colors.faint}`는 흰 배경 위의 글자에 쓰지 않는다. 대비가 2.24:1이다. 흰 배경에서는 밑줄과 글머리 기호에만 쓴다.
- 키보드 초점은 2px `{colors.ink}` 테두리로 보여 준다. 푸터 안에서는 `{colors.canvas}` 테두리를 쓴다.
- 누를 수 있는 알약은 높이 44px 이상이다.
- 움직임은 마우스 올림 색 변화와 접는 질문의 꺾쇠 회전뿐이다. 사용자가 움직임 줄이기를 켜면 이 전환도 끈다.

## 지킬 것과 하지 않을 것

### 지킬 것

- 배경은 흰색으로 두고, 층은 `{colors.canvas-soft}` 배경과 1px 선으로 나눈다.
- 버튼과 링크 목록은 알약 모양(`{rounded.full}`)으로 만든다. 카드처럼 내용을 담는 링크만 `{rounded.md}`를 쓴다.
- 제목은 652, 소개 문장은 300 굵기로 써서 색 없이 위계를 만든다.
- 새 색상, 굵기, 모서리 값이 필요하면 `site.css`의 `:root`에 변수를 먼저 추가하고 이 문서에 적는다.
- 한국어와 영어 페이지를 같은 컴포넌트로 만든다.

### 하지 않을 것

- 그림자를 넣지 않는다.
- 강조색을 넣지 않는다. 링크는 글자색과 밑줄로 구분한다.
- 다크 모드를 넣지 않는다.
- 그러데이션, 색 있는 섹션 배경, 장식 그림을 넣지 않는다.
- 글자 간격을 바꾸거나 대문자 변환을 쓰지 않는다.
- 페이지마다 `<style>`이나 `style` 속성으로 디자인을 바꾸지 않는다.
- 내용이 순서가 아닌데 번호 표시를 붙이지 않는다.
