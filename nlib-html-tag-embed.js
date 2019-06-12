NHtml.Tag.embed = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'embed'
    }
    static create(parent) {
        return new NHtml.Tag.embed(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'embed', {
    get() {
        return NHtml.Tag.embed.create(this.parent);
    }
});