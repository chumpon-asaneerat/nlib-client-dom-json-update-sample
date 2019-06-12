NHtml.Tag.audio = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'audio'
    }
    static create(parent) {
        return new NHtml.Tag.audio(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'audio', {
    get() {
        return NHtml.Tag.audio.create(this.parent);
    }
});
