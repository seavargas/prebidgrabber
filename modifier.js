var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var input = new Array();
    var output = new Array();

    input.push(new RegExp('Campaign', "gi")); //
    input.push(new RegExp('Placement', "gi")); //localStorage.getItem("input0")
    output.push('Eddie');//localStorage.getItem("output0")
    output.push('Danielle');

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(input[0], output[0]);
            replacedText = replacedText.replace(input[1], output[1]);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}