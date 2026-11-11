# jo-minjun.github.io

조민준의 프로젝트 카탈로그 사이트다. 주소는 https://jo-minjun.github.io/ 다.

빌드 도구 없이 정적 HTML을 이 저장소에서 직접 고친다. 사이트 파일은 모두 `docs/` 아래에 있다. 디자인 기준은 [`DESIGN.md`](DESIGN.md)에 있다.

## 구조

아래 경로는 `docs/` 기준이다.

| 경로 | 내용 |
|---|---|
| `ko/`, `en/` | 메인 화면. 프로필과 프로젝트 카드 목록 |
| `<프로젝트>/ko/`, `<프로젝트>/en/` | 프로젝트 소개 페이지 (`honey-bloom`, `petrify`, `claude-mermaid-view`, `claude-slack-pane`, `work-log`, `dotfiles`) |
| `honey-bloom/privacy/ko/`, `honey-bloom/privacy/en/` | Honey Bloom 개인정보처리방침 |
| `honey-bloom/support/ko/`, `honey-bloom/support/en/` | Honey Bloom 지원 페이지 |
| `assets/site.css` | 모든 페이지의 공통 스타일. 색상, 글꼴 굵기, 모서리 반경 값은 파일 맨 위 `:root`에 있다 |
| `assets/fonts/pretendard/` | Pretendard 글꼴 1.3.9 파일과 라이선스. `site.css`가 불러온다 |
| `assets/lang.js` | 언어 감지, 언어 이동, 고른 언어 기억 |
| `404.html` | 없는 주소로 들어왔을 때 보여 주는 페이지. 브라우저 언어에 맞는 문구만 보여 준다 |
| `sitemap.xml`, `robots.txt` | 검색 엔진용 파일 |
| `app-ads.txt` | AdMob 앱 확인 파일 |
| `naver22e8fb10ccdb32540bda493104bf37fe.html` | 네이버 사이트 소유 확인 파일 |
| `archive/` | 예전 Hugo 블로그의 글 원본. 화면에서 링크하지 않는다 |

## 언어

모든 페이지는 한국어(`ko/`)와 영어(`en/`) 파일로 나뉜다. 언어 폴더가 없는 기본 주소(`/`, `/honey-bloom/` 등)는 언어를 골라 이동하는 페이지다.

1. 주소 끝이 `#ko` 또는 `#en`이면 그 언어로 이동한다.
2. 사용자가 언어 전환 링크로 언어를 고른 적이 있으면 그 언어로 이동한다. 고른 언어는 `localStorage`의 `lang`에 저장한다.
3. 브라우저 언어 목록(`navigator.languages`)에서 먼저 나오는 `ko` 또는 `en`으로 이동한다.
4. 둘 다 없으면 영어로 이동한다.

JavaScript가 꺼져 있으면 기본 주소는 언어 선택 링크만 보여 준다.

두 언어 파일은 같은 내용을 담아야 한다. 한쪽을 고치면 다른 쪽도 함께 고친다.

## 주소를 바꾸면 안 되는 파일

아래 주소는 외부 서비스와 앱 코드에 등록되어 있다. 파일을 옮기거나 이름을 바꾸지 않는다. 개인정보처리방침과 지원 페이지의 기본 주소는 언어 이동 페이지이고, 본문은 `ko/`, `en/` 아래에 있다.

| 주소 | 등록된 곳 |
|---|---|
| `/honey-bloom/privacy/` | Honey Bloom 앱 설정 화면, App Store Connect, Play Console |
| `/honey-bloom/support/` | App Store Connect |
| `/app-ads.txt` | AdMob. 도메인 최상위 경로에서만 찾는다 |

Honey Bloom이 새 정보를 수집·저장·전송하거나 새 알림·권한을 쓰면 `docs/honey-bloom/privacy/ko/index.html`과 `docs/honey-bloom/privacy/en/index.html`도 함께 고친다.

## 배포

`main`에 push하면 GitHub Pages가 `docs/` 폴더를 사이트 최상위(`/`)로 게시한다. 저장소 최상위의 `README.md`, `CLAUDE.md`, `DESIGN.md`는 게시하지 않는다. `docs/.nojekyll` 파일이 있어서 Jekyll 변환은 하지 않는다.

GitHub Pages 설정의 게시 폴더는 `main` 브랜치의 `/docs`다. `docs/` 폴더의 이름을 바꾸면 사이트 전체가 게시되지 않는다.

## 로컬에서 확인하기

1. 저장소 최상위에서 `python3 -m http.server 8000 --directory docs`를 실행한다.
2. 브라우저에서 http://localhost:8000/ 을 연다.

로컬 서버는 없는 주소에 `404.html`을 보여 주지 않는다. 404 페이지는 http://localhost:8000/404.html 로 직접 연다.

## 프로젝트 추가하기

1. `docs/ko/index.html`과 `docs/en/index.html`의 `<ul class="projects">`에 카드를 추가한다.
2. `docs/` 안의 기존 프로젝트 폴더를 복사해 `<프로젝트>/index.html`(언어 이동), `<프로젝트>/ko/index.html`, `<프로젝트>/en/index.html`을 만든다.
3. `docs/sitemap.xml`에 `ko/`, `en/` 주소를 추가한다.

## Archive

`docs/archive/`에는 예전 블로그의 글(Markdown)과 그림을 보관한다. 자세한 출처는 [`docs/archive/README.md`](docs/archive/README.md)에 있다.

- 화면에서 링크하지 않지만, `/archive/notes/kafka.md` 같은 직접 주소로는 열린다.
- 원본 저장소 [jo-minjun/my-blog](https://github.com/jo-minjun/my-blog)는 배포 워크플로를 끄고 보관(archive) 상태로 두었다.
