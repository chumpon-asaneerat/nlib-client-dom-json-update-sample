NHtml.Tag.address = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'address'
    }
    static create(parent) {
        return new NHtml.Tag.address(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'address', {
    get() {
        return NHtml.Tag.address.create(this.parent);
    }
});
