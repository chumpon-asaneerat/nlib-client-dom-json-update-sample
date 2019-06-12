NHtml.Tag.mark = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'mark'
    }
    static create(parent) {
        return new NHtml.Tag.mark(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'mark', {
    get() {
        return NHtml.Tag.mark.create(this.parent);
    }
});