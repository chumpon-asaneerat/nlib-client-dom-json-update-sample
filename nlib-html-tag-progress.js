NHtml.Tag.progress = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'progress'
    }
    static create(parent) {
        return new NHtml.Tag.progress(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'progress', {
    get() {
        return NHtml.Tag.progress.create(this.parent);
    }
});