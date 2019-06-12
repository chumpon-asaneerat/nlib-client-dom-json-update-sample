NHtml.Tag.tr = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'tr'
    }
    static create(parent) {
        return new NHtml.Tag.tr(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'tr', {
    get() {
        return NHtml.Tag.tr.create(this.parent);
    }
});
