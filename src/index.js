module.exports = function check(str, bracketsConfig) {

    let config = bracketsConfig.map(function(element) {
        return element.join("")
    });

    for (let i = 0; i < config.length; i++) {
        if (str.includes(config[i])) {
            str = str.replace(config[i], "");
        }
    }

    return str == '';
}

