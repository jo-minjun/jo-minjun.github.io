# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개요

조민준의 프로젝트 카탈로그 사이트다. 주소는 https://jo-minjun.github.io/ 다. 빌드 도구, 테스트, 린트가 없다. 정적 HTML과 CSS를 이 저장소에서 직접 고친다.

사이트 파일은 모두 `docs/` 아래에 있다. 이 문서에 나오는 사이트 파일 경로(`assets/site.css`, `404.html` 등)는 `docs/` 기준이다. `README.md`, `CLAUDE.md`, `DESIGN.md`만 저장소 최상위에 있다.

## 명령

- 로컬 확인: 저장소 최상위에서 `python3 -m http.server 8000 --directory docs`를 실행하고 http://localhost:8000/ 을 연다.
- 404 페이지 확인: http://localhost:8000/404.html 을 직접 연다. 로컬 서버는 없는 주소에 `404.html`을 보여 주지 않는다.
- 배포: `main`에 push하면 GitHub Pages가 `docs/` 폴더를 사이트 최상위로 게시한다. 배포 명령은 따로 없다. GitHub Pages 설정의 게시 폴더는 `main` 브랜치의 `/docs`다.

주의: 공개하면 안 되는 파일은 이 저장소에 커밋하지 않는다. `docs/.nojekyll`이 있어서 GitHub Pages는 `docs/` 안의 파일을 `.md`까지 모두 원본 그대로 공개 주소로 내보낸다. `docs/` 밖의 파일은 사이트에 게시되지 않지만, 공개 저장소라서 GitHub에서 누구나 읽을 수 있다.

## 페이지 구조

템플릿이 없다. 본문 페이지 20개가 `<nav class="top">`, `<main>`, `<footer>`를 각자 가진다. 상단 링크나 푸터를 바꾸면 본문 페이지 20개를 모두 고친다.

| 종류 | 파일 | 동작 |
|---|---|---|
| 언어 이동 페이지 | `index.html`, `<프로젝트>/index.html`, `honey-bloom/{privacy,terms,support}/index.html` | `<html data-lang-redirect>`가 있다. `assets/lang.js`가 `ko/` 또는 `en/`으로 보낸다. JavaScript가 꺼져 있으면 언어 선택 링크만 보인다. `nav`와 `footer`는 없다 |
| 본문 페이지 | `ko/index.html`, `en/index.html`로 끝나는 파일 | 실제 내용을 담는다. 상단의 `a[hreflang]`을 누르면 `lang.js`가 고른 언어를 `localStorage`의 `lang`에 저장한다 |
| 404 페이지 | `404.html` | `<html data-lang-pick>`이 있다. `lang.js`가 `<html lang>`을 바꾸고, 페이지 안의 `<style>`이 다른 언어의 `<section>`을 숨긴다 |

- 두 언어 파일은 같은 내용을 담는다. 한쪽을 고치면 다른 쪽도 함께 고친다.
- 한국어 본문은 `~다`체로 쓴다. 지원 페이지의 자주 묻는 질문 답변만 `~습니다`체다.
- 언어를 고르는 순서와 프로젝트를 추가하는 절차는 `README.md`에 있다. 프로젝트를 추가하면 `sitemap.xml`도 고친다.
- `archive/`는 예전 블로그 글의 보관본이다. 화면에서 링크하지 않고, 사이트 스타일도 적용하지 않는다.

## 주소를 바꾸면 안 되는 파일

아래 주소는 외부 서비스와 앱 코드에 등록되어 있다. 파일을 옮기거나 이름을 바꾸지 않는다.

| 주소 | 등록된 곳 |
|---|---|
| `/honey-bloom/privacy/` | Honey Bloom 앱 설정 화면, App Store Connect, Play Console |
| `/honey-bloom/support/` | App Store Connect |
| `/app-ads.txt` | AdMob |

Honey Bloom이 새 정보를 수집·저장·전송하거나 새 알림·권한을 쓰면 `honey-bloom/privacy/ko/index.html`과 `honey-bloom/privacy/en/index.html`을 함께 고친다.

## 스타일

디자인 기준(색상, 글꼴, 간격, 컴포넌트, 접근성, 금지 사항)은 최상위 `DESIGN.md`에 있다. 디자인 값을 바꾸면 `DESIGN.md`와 `site.css`의 `:root`를 함께 고친다.

`assets/site.css` 하나가 모든 페이지의 스타일을 정한다. 페이지에 `<style>`이나 `style` 속성을 추가하지 않는다. `404.html`의 언어 숨김 규칙만 예외다.

- **디자인 값**: 색상, 글꼴 굵기, 모서리 반경, 줄 간격은 `site.css` 맨 위 `:root`의 변수로 쓴다. 새 색상이나 굵기를 규칙 안에 직접 적지 않는다.
- **글꼴**: Pretendard 1.3.9를 `assets/fonts/pretendard/`에 넣어 두었다. `site.css` 첫 줄의 `@import`가 이 글꼴을 불러온다. 외부 CDN은 쓰지 않는다.
- **한글 줄 간격**: `:lang(ko)`가 `--leading-heading`과 `--leading-prose`를 더 넓은 값으로 바꾼다. `<html lang>` 값에 따라 줄 간격이 달라진다.
- **정책 페이지**: 개인정보처리방침, 이용약관, 지원 페이지는 `<main class="doc">`를 쓴다. `.doc`는 제목 크기, 목록, 긴 글의 줄 간격을 바꾼다.
- **링크 모양은 속성이 정한다**: `target="_blank"`가 있는 `.contact`, `.list`, `footer`의 링크에는 CSS가 `↗`를 붙인다. `.contact` 안의 `mailto:` 링크는 검은 알약 모양 버튼이 된다. HTML에 화살표 글자를 직접 넣지 않는다.
- **표의 줄바꿈**: 표의 칸은 `overflow-wrap: break-word`를 쓴다. `body`의 `anywhere`를 그대로 물려받으면 짧은 열이 글자마다 줄바꿈된다.
