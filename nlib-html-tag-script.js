NHtml.Tag.script = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'script'
    }
    static create(parent) {
        return new NHtml.Tag.script(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'script', {
    get() {
        return NHtml.Tag.script.create(this.parent);
    }
});
