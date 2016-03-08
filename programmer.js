function createProgrammer() {
    var languagesKnown = [];

    return {
        learnNewLanguage: function (lang) {
            languagesKnown.push(lang);
        },
        isPragmatic: function () {
            return languagesKnown.length >= 3;
        }
    }
}

/*function Programmer() {
    this.languagesKnown = [];
}

Programmer.prototype.learnNewLanguage = function (lang) {
    this.languagesKnown.push(lang);
};


Programmer.prototype.isPragmatic = function () {
    return this.languagesKnown.length >= 3;
};
//var programmer = createProgrammer();
var programmer = new Programmer();

programmer.learnNewLanguage("JS");
programmer.learnNewLanguage("Java");
programmer.learnNewLanguage("Clojure");
*/

var programmer  = createProgrammer();

["JS", "Java", "Clojure"].forEach(programmer.learnNewLanguage);

if (programmer.isPragmatic()) {
    console.log("Pragmatic programmer");
} else {
    console.log("Noob!");
}



