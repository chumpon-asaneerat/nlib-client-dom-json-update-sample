NHtml.Tag.figure = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'figure'
    }
    static create(parent) {
        return new NHtml.Tag.figure(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'figure', {
    get() {
        return NHtml.Tag.figure.create(this.parent);
    }
});