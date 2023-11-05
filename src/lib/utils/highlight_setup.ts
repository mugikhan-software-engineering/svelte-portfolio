import hljs from 'highlight.js/lib/core';
import shell from 'highlight.js/lib/languages/shell';
import 'highlight.js/styles/github-dark.css';

hljs.registerLanguage('shell', shell);

export { hljs };
