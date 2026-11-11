(function () {
  var KEY = 'lang';
  var LANGS = ['ko', 'en'];

  function preferred() {
    try {
      var saved = localStorage.getItem(KEY);
      if (LANGS.indexOf(saved) >= 0) return saved;
    } catch (e) {}
    var prefs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(code) >= 0) return code;
    }
    return 'en';
  }

  var root = document.documentElement;
  if (root.hasAttribute('data-lang-redirect')) {
    // 예전 링크의 #ko, #en은 언어 선택으로 처리한다.
    var hash = location.hash.slice(1);
    var lang = LANGS.indexOf(hash) >= 0 ? hash : preferred();
    location.replace(lang + '/' + location.search + (hash === lang ? '' : location.hash));
    return;
  }
  if (root.hasAttribute('data-lang-pick')) root.lang = preferred();

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[hreflang]');
    if (!a) return;
    try { localStorage.setItem(KEY, a.getAttribute('hreflang')); } catch (err) {}
  });
})();
