NHtml.Tag.time = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'time'
    }
    static create(parent) {
        return new NHtml.Tag.time(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'time', {
    get() {
        return NHtml.Tag.time.create(this.parent);
    }
});
