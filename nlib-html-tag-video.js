NHtml.Tag.video = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'video'
    }
    static create(parent) {
        return new NHtml.Tag.video(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'video', {
    get() {
        return NHtml.Tag.video.create(this.parent);
    }
});