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

    //console.log(model2.data);    
    //console.log(model2.toJson());
    let appElem = document.getElementById('app')
    let el = model2.render();
    appElem.appendChild(el);
})();