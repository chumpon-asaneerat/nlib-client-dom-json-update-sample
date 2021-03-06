// To run this file
// 1. Open terminal
// 2. type: node index.js

const dot = require('dot');
dot.templateSettings.strip = false; // preserve space.

const beautify = require('js-beautify').js
const fs = require('fs');

console.log('starting..generate js file for HTML tags.')

let tags = [
    // a tags.
    'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
    // b tags.
     'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
    // c tags.
    'canvas', 'caption', 'center', 'code', 'col', 'colgroup',
    // d tags.
    'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt',
    // e tags.
    'em', 'embed',
    // f tags.
    'fieldset', 'figcaption', 'figure', 'footer', 'form',
    // h tags.
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 
    // i tags.
    'i', 'iframe', 'img',  'input', 'ins',
    // k tags.
    'kbd',
    // l tags.
    'label', 'legend', 'li', 'link', 
    // m tags.
    'main', 'map', 'mark', 'meta', 'meter',
    // n tags.
    'nav', 'noscript', 
    // o tags.
    'object', 'ol', 'optgroup', 'option', 'output',
    // p tags.
    'p', 'param', 'picture', 'pre', 'progress', 
    // q tags.
    'q',
    // s tags.
    's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 
    'style', 'sub', 'summary', 'sup', 'svg', 
    // t tags.
    'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 
    'title', 'tr', 'track',
    // u tags.
    'u', 'ul', 
    // v tags.
    'var', 'video',
    // w tags.
    'wbr'
]

// Generate js file for each tags.
/*
let tagTmpl = `
NHtml.Tag.{{=it.tagName}} = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = '{{=it.tagName}}'
    }
    static create(parent) { return new NHtml.Tag.{{=it.tagName}}(parent); }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, '{{=it.tagName}}', {
    get() { return NHtml.Tag.{{=it.tagName}}.create(this.parent); }
});
`

let tagTmplFn = dot.template(tagTmpl.toString());
let compileTmpl, jsText;

tags.forEach(tag => {
    console.log(`generate file for tag: ${tag}`);
    compileTmpl = tagTmplFn({tagName: tag});
    jsText = beautify(compileTmpl, { indent_size: 4, space_in_empty_paren: true });
    fs.writeFileSync(`./nlib-html-tag-${tag}.js`, jsText + '\n');
});
*/

// Generate html script tag for update in index.html
/*
let scriptTmpl = `
    <script src="nlib-html-tag-{{=it.tagName}}.js" type=""></script>
`
let scriptTmplFn = dot.template(scriptTmpl.toString());
let sriptText = ''
tags.forEach(tag => {
    sriptText = sriptText + scriptTmplFn({tagName: tag}) + '\n';
});
console.log(sriptText);
*/

// Generate array for paste in gulpfile.js
/*
let gulpArrTmpl = `'nlib-html-tag-{{=it.tagName}}.js',`
let gulpArrTmplFn = dot.template(gulpArrTmpl.toString());
let arrText = ''
tags.forEach(tag => {
    arrText = arrText + gulpArrTmplFn({tagName: tag}) + '\n';
});
console.log(arrText);
*/

console.log('finished..generate js file for HTML tags.')