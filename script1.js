var array_word = ['дом', 'тень', 'пень', 'дерево', 'ягода', 'степь', 'число', 'камень', 'кольцо', 'молот'],
    softSign = array_word.filter(function (el) {
        return /ь$/.test(el);
    });
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
function showTable(count_rows, count_cols) {
    var htmlcode = '';
    ROWS_SIZE = count_rows;
    COLS_SIZE = count_cols;
    for (var rows = 0; rows < count_rows; rows++) {
        htmlcode += '<tr>\n';
        for (var cols = 0; cols < count_cols; cols++) {
            htmlcode += '<td id="td' + rows + cols + '">' + array_word
 
            [getRandom(0, array_word.length - 1)] + '</td>'
        }
        htmlcode += '</tr>\n';
    }
    document.getElementById("main_table").innerHTML = htmlcode;
}
 
function toSearch() {
    var tbl = document.getElementById("main_table");
    for (var rows = 0; rows < ROWS_SIZE; rows++) {
        for (var cols = 0; cols < COLS_SIZE; cols++) {
            if (softSign.indexOf(tbl.rows[rows].cells[cols].innerHTML) != -1) {
                var elem = document.getElementById("td" + rows + cols);
                elem.setAttribute("class", "selected");
            }
        }
    }
}
 
function checkSymbol(symbol, str) {
    var checkArr = [];
    var sum = true;
    for (var i = 0; i < symbol.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (symbol[i] == str[j]) {
                checkArr[i] = true;
            }
        }
        sum = sum && checkArr[i];
    }
    return sum;
}
