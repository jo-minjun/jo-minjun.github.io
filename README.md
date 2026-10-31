# jo-minjun.github.io

조민준의 사이드 프로젝트 카탈로그 사이트다. 주소는 https://jo-minjun.github.io/ 다.

빌드 도구 없이 정적 HTML을 이 저장소에서 직접 고친다.

## 구조

| 경로 | 내용 |
|---|---|
| `index.html` | 메인 화면. 사이드 프로젝트 카드 목록 |
| `<프로젝트>/index.html` | 프로젝트 소개 페이지 (`honey-bloom`, `petrify`, `claude-mermaid-view`, `work-log`, `dotfiles`) |
| `honey-bloom/privacy/`, `honey-bloom/support/` | Honey Bloom 개인정보처리방침과 지원 페이지 |
| `assets/site.css` | 카탈로그와 프로젝트 페이지의 공통 스타일 |
| `404.html` | 없는 주소로 들어왔을 때 보여 주는 페이지 |
| `sitemap.xml`, `robots.txt` | 검색 엔진용 파일 |
| `app-ads.txt` | AdMob 앱 확인 파일 |
| `naver22e8fb10ccdb32540bda493104bf37fe.html` | 네이버 사이트 소유 확인 파일 |
| `archive/` | 예전 Hugo 블로그의 글 원본. 화면에서 링크하지 않는다 |

모든 페이지는 한국어와 영어를 함께 적는다.

## 주소를 바꾸면 안 되는 파일

아래 주소는 외부 서비스와 앱 코드에 등록되어 있다. 파일을 옮기거나 이름을 바꾸지 않는다.

| 주소 | 등록된 곳 |
|---|---|
| `/honey-bloom/privacy/` | Honey Bloom 앱 설정 화면, App Store Connect, Play Console |
| `/honey-bloom/support/` | App Store Connect |
| `/app-ads.txt` | AdMob. 도메인 최상위 경로에서만 찾는다 |

Honey Bloom이 새 정보를 수집·저장·전송하거나 새 알림·권한을 쓰면 `honey-bloom/privacy/index.html`도 함께 고친다.

## 배포

`main`에 push하면 GitHub Pages가 저장소 최상위(`/`)를 그대로 게시한다. `.nojekyll` 파일이 있어서 Jekyll 변환은 하지 않는다.

## 로컬에서 확인하기

1. 저장소 최상위에서 `python3 -m http.server 8000`을 실행한다.
2. 브라우저에서 http://localhost:8000/ 을 연다.

## 프로젝트 추가하기

1. `index.html`의 `<ul class="projects">`에 카드를 추가한다.
2. 기존 프로젝트 페이지를 복사해 `<프로젝트>/index.html`을 만든다.
3. `sitemap.xml`에 새 주소를 추가한다.

## Archive

`archive/`에는 예전 블로그의 글(Markdown)과 그림을 보관한다. 자세한 출처는 [`archive/README.md`](archive/README.md)에 있다.

- 화면에서 링크하지 않지만, `/archive/notes/kafka.md` 같은 직접 주소로는 열린다.
- 원본 저장소 [jo-minjun/my-blog](https://github.com/jo-minjun/my-blog)는 배포 워크플로를 끄고 보관(archive) 상태로 두었다.
