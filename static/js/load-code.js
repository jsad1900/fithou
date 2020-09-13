(() => {
  const { Prism, PerfectScrollbar } = window;

  // $('.js-area-code > pre').each(function () {
  //   const ps = new PerfectScrollbar($(this)[0], {
  //     wheelSpeed: 1.2
  //   });
  // });

  $('.js-single-src').each(function () {
    const $src = $(this);
    const filename = $src.children('.js-filename-code').attr('value');
    let lang = 'cpp';
    if (filename && filename.split('.').length > 0) {
      lang = filename.split('.')[1];
    }

    $.get(`https://vnspoj.github.io/solution/src/${filename}`, (code) => {
      const highlightCode = Prism.highlight(code, Prism.languages[lang]);
      $src.find('.js-source-code')
        .addClass(`language-${lang}`)
        .html(highlightCode);
    });

    $src.find('.js-toggle-code').click(function () {
      $src.children('.js-area-code').slideToggle(500, 'linear');
      const $this = $(this);
      if ($this.attr('data-visible') == '1') {
        $this.attr('data-visible', '0');
        $this.children('span.text').text('Show');
        $this.children('i.fa').removeClass('fa-eye-slash').addClass('fa-eye');
      } else {
        $this.attr('data-visible', '1');
        $this.children('span.text').text('Hide');
        $this.children('i.fa').removeClass('fa-eye').addClass('fa-eye-slash');
      }
    });
  });

  (function (Prism) {

    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  
    Prism.languages.css = {
      'comment': /\/\*[\s\S]*?\*\//,
      'atrule': {
        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
        inside: {
          'rule': /^@[\w-]+/,
          'selector-function-argument': {
            pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
            lookbehind: true,
            alias: 'selector'
          },
          'keyword': {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
          // See rest below
        }
      },
      'url': {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
        greedy: true,
        inside: {
          'function': /^url/i,
          'punctuation': /^\(|\)$/,
          'string': {
            pattern: RegExp('^' + string.source + '$'),
            alias: 'url'
          }
        }
      },
      'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
      'string': {
        pattern: string,
        greedy: true
      },
      'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      'important': /!important\b/i,
      'function': /[-a-z0-9]+(?=\()/i,
      'punctuation': /[(){};:,]/
    };
  
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  
    var markup = Prism.languages.markup;
    if (markup) {
      markup.tag.addInlined('style', 'css');
  
      Prism.languages.insertBefore('inside', 'attr-value', {
        'style-attr': {
          pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
          inside: {
            'attr-name': {
              pattern: /^\s*style/i,
              inside: markup.tag.inside
            },
            'punctuation': /^\s*=\s*['"]|['"]\s*$/,
            'attr-value': {
              pattern: /.+/i,
              inside: Prism.languages.css
            }
          },
          alias: 'language-css'
        }
      }, markup.tag);
    }
  
  }(Prism));

})();
