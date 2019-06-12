NHtml.Tag.table = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'table'
    }
    static create(parent) {
        return new NHtml.Tag.table(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'table', {
    get() {
        return NHtml.Tag.table.create(this.parent);
    }
});
