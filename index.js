const dot = require('dot');
const beautify = require('js-beautify').js
const fs = require('fs');

console.log('starting..generate js file for HTML tags.')

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

let tags = [
    // a tags.
    //'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
    // b tags.
    // 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
    // c tags.
    'canvas', 'caption', 'center', 'code', 'col', 'colgroup',
    //'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
]
tags.forEach(tag => {
    console.log(`generate file for tag: ${tag}`);
    compileTmpl = tagTmplFn({tagName: tag});
    jsText = beautify(compileTmpl, { indent_size: 4, space_in_empty_paren: true });
    //console.log(jsText);
    fs.writeFileSync(`./nlib-html-tag-${tag}.js`, jsText);
});

console.log('finished..generate js file for HTML tags.')