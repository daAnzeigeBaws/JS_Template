function createElement(tag, parameters) {
    var element = document.createElement(tag);

    if (parameters.content){
        element.appendChild(document.createTextNode(parameters.content));
    }
    if (parameters.attributes){
        for (var i = 0; i < parameters.attributes.length; i++){
            element.setAttribute(parameters.attributes[i][0], parameters.attributes[i][1]);
        }
    }

    return element;
}

/**
 * This function builds a table from a given data set.
 *
 * @param content - the data to populate the table, which is expected to have a certain format:
 *                      - values: an array containing the data in arrays either in rows or in columns
 *                      - rows: set to true when the content is arranged in rows
 *                      - columns: set to true when the content is arranged in columns
 */
function createTable(content) {
    if (content.rows) {
        var table = createElement('table');
        var row = createElement('tr');

        //insert all the table headers
        for (var value in content.values[0]) {
            row.appendChild(createElement('th', {content: value}));
        }
        //add the header row to the table
        table.appendChild(row);


        //process the remaining rows with the table's content
        for (var i = 1; i < content.values; i++) {
            row = createElement('tr');
            for (var value in content.values[i]) {
                row.appendChild(createElement('td', {content: value}));
            }

            table.appendChild(row)
        }

        return table;
    }
    else if (content.columns) {

    }
    else {
        //return an empty table
        return createElement('table');
    }
}

/**
 * Creates and displays a message. The message levels are: error, warning, success, info
 *
 * @param message - array, which contains the levels to be deleted. This is more dominant than exclude
 * @param level - the
 */
function createMessage(message, level) {
    var msgParent = document.getElementById("message-parent");

    if (level.toLowerCase() == 'error'){
        msgParent.appendChild(createElement('message', {content: message, attributes: [['class', 'alert alert-danger'], ['role', 'alert']]}));
    }
    else {
        msgParent.appendChild(createElement('message', {content: message, attributes: [['class', 'alert alert-' + level.toLowerCase()], ['role', 'alert']]}));
    }
}

/**
 * Deletes the messages specified. The message levels are: error, warning, success, info
 *
 * @param include - array, which contains the levels to be deleted. This is more dominant than exclude
 * @param exclude - array, which contains the levels to not be deleted
 */
function clearMessages(include, exclude) {
    var msgParent = document.getElementById("message-parent");
    //remove all messages when nothing is specified
    if (!include && !exclude) {
        while (msgParent.firstChild) {
            msgParent.removeChild(msgParent.firstChild);
        }
    }
    //remove all included messages
    else if (!exclude) {

    }
    //remove all excluded messages
    else if (!include) {

    }
}