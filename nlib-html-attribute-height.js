NHtml.Attribute.height = class {
    static set(parent, value) { parent.attribute('height', value) }
}

Object.assign(NHtml.Attribute.Attributes.prototype, {
    height(value) { 
        NHtml.Attribute.height.set(this.parent, value);
        return this;
    }
});
