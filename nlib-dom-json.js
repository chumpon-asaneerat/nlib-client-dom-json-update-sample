(() => {
    console.clear();

    let model2 = new NHtml.Tag.div();
    model2
        .add.h1.content('Header 1').end
        .add.img
                .attribute('alt', 'This is image.')
                .attr
                    .src('image.png')
                    .width('auto')
                    .height(100)
            .end
        .end
        .add.div
            .content('The end div')
        .end

    //console.log(model2);
    //console.log(model2.data);
    let child0 = model2.children(0);
    console.log(child0);
    console.log('content:', child0.content())
    //let child1 = model2.children(1);
    //console.log(child1);
    //console.log('alt:', child1.attribute('alt'))
    //console.log('src:', child1.attribute('src'))
    //console.log('height:', child1.attribute('height'))
    //console.log('width:', child1.attribute('width'))

    //console.log(model2.toJson());
    let appElem = document.getElementById('app')
    let el = model2.render();
    appElem.appendChild(el);
})();