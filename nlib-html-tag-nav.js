NHtml.Tag.nav = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'nav'
    }
    static create(parent) {
        return new NHtml.Tag.nav(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'nav', {
    get() {
        return NHtml.Tag.nav.create(this.parent);
    }
});
