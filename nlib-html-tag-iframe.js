NHtml.Tag.iframe = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'iframe'
    }
    static create(parent) {
        return new NHtml.Tag.iframe(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'iframe', {
    get() {
        return NHtml.Tag.iframe.create(this.parent);
    }
});
