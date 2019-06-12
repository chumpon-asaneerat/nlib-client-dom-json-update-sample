NHtml.Tag.br = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'br'
    }
    static create(parent) {
        return new NHtml.Tag.br(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'br', {
    get() {
        return NHtml.Tag.br.create(this.parent);
    }
});
