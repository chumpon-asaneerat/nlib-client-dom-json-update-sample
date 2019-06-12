NHtml.Tag.tfoot = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'tfoot'
    }
    static create(parent) {
        return new NHtml.Tag.tfoot(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'tfoot', {
    get() {
        return NHtml.Tag.tfoot.create(this.parent);
    }
});
