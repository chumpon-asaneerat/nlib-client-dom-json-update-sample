NHtml.Tag.tbody = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'tbody'
    }
    static create(parent) {
        return new NHtml.Tag.tbody(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'tbody', {
    get() {
        return NHtml.Tag.tbody.create(this.parent);
    }
});
