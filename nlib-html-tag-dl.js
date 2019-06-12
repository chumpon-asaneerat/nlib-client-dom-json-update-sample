NHtml.Tag.dl = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'dl'
    }
    static create(parent) {
        return new NHtml.Tag.dl(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'dl', {
    get() {
        return NHtml.Tag.dl.create(this.parent);
    }
});
