NHtml.Tag.abbr = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'abbr'
    }
    static create(parent) {
        return new NHtml.Tag.abbr(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'abbr', {
    get() {
        return NHtml.Tag.abbr.create(this.parent);
    }
});