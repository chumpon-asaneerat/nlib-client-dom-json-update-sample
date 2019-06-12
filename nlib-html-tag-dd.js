NHtml.Tag.dd = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'dd'
    }
    static create(parent) {
        return new NHtml.Tag.dd(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'dd', {
    get() {
        return NHtml.Tag.dd.create(this.parent);
    }
});
