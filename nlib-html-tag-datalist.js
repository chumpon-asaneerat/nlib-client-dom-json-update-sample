NHtml.Tag.datalist = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'datalist'
    }
    static create(parent) {
        return new NHtml.Tag.datalist(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'datalist', {
    get() {
        return NHtml.Tag.datalist.create(this.parent);
    }
});