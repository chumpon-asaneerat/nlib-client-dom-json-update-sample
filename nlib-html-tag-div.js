NHtml.Tag.div = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'div'
    }
    static create(parent) { return new NHtml.Tag.div(parent); }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'div', {
    get() { return NHtml.Tag.div.create(this.parent); }
});
