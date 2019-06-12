NHtml.Tag.samp = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'samp'
    }
    static create(parent) {
        return new NHtml.Tag.samp(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'samp', {
    get() {
        return NHtml.Tag.samp.create(this.parent);
    }
});
