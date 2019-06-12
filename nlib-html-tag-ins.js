NHtml.Tag.ins = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'ins'
    }
    static create(parent) {
        return new NHtml.Tag.ins(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'ins', {
    get() {
        return NHtml.Tag.ins.create(this.parent);
    }
});
