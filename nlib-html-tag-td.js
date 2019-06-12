NHtml.Tag.td = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'td'
    }
    static create(parent) {
        return new NHtml.Tag.td(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'td', {
    get() {
        return NHtml.Tag.td.create(this.parent);
    }
});
