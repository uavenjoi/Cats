angular.module("catService", []).factory("catsStub", function() {
    return [{
        src: "img/cat1.jpg",
        clicks: 0,
        name: "cat1"
    }, {
        src: "img/cat2.jpg",
        clicks: 0,
        name: "cat2"
    }, {
        src: "img/cat3.jpg",
        clicks: 0,
        name: "cat3"
    }, {
        src: "img/cat4.jpg",
        clicks: 0,
        name: "cat4"
    }, {
        src: "img/cat5.jpg",
        clicks: 0,
        name: "cat5"
    }]
}).config(function(megaCatsServiceProvider) {
    megaCatsServiceProvider.changeIgnoredCats(["2"])
}).provider("megaCatsService", function() {
    var ignoredCats = ["3"];
    this.changeIgnoredCats = function(_ignoredCats) {
        ignoredCats = _ignoredCats
    };
    this.$get = function(catsStub) {
        return catsStub.filter(function(cat) {
            return ignoredCats.every(function(ignoredNamePart) {
                return cat.name.indexOf(ignoredNamePart) < 0
            })
        })
    }
});