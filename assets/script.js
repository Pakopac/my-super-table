window.onload = function() {
    var superTable = document.querySelector('#super-table');
    /**
     * element: html element containing our generated super table
     * data: an array of objects, the data we want to show
     * options: options of the super table
     */
    initSuperTable({
        element: superTable,
        data: users,
        options: {
            firstColumn: 'id',
            rowHeight: 30,
            rowMouseOver: true,
            rowStyle: 'free',
            fixedHeader: true,
            fixedColumn: true,
            darkTheme: false,
            cellMouseOver : true
        }
    });

    function initSuperTable(table) {
        createLineKeys(table);
        createTable(table);
        firstColumn(table);
        rowHeight(table);
        var getFirstColumn = document.querySelectorAll('.' + table.options.firstColumn);
        if(table.options.rowMouseOver !== false) {
            rowMouseOver(table, getFirstColumn)
        }
        if(table.options.rowStyle === "line" || table.options.rowStyle === "zebra") {
            rowStyleLine()
        }
        if(table.options.rowStyle === "zebra"){
            rowStyleZebra(table)
        }
        if(table.options.fixedHeader !== false) {
            fixedHeader()
        }
        if(table.options.fixedColumn === true){
            fixedColumn(table, getFirstColumn)
        }
        else if(table.options.fixedColumn !== true && table.options.fixedColumn !== false){
            var id = document.querySelectorAll('.id');
            fixedColumn(table, id)
        }
        if(table.options.darkTheme === true){
            darkTheme()
        }
        if(table.options.cellMouseOver !== false) {
            cellMouseOver(table)
        }
    }
    function createLineKeys(table) {
        var divKeys = document.createElement('div');
        divKeys.classList.add("divKeys");
        table.element.appendChild(divKeys);
        var user = table.data[0];
        for (var j in user) {
            var item = document.createElement('div');
            divKeys.appendChild(item);
            item.classList.add(j);
            item.innerHTML += j;
        }
    }

    function createTable(table) {
        var allUsers = document.createElement('div');
        allUsers.classList.add('allUsers');
        table.element.appendChild(allUsers);
        for (var i in table.data) {
            user = table.data[i];
            var line = document.createElement('div');
            line.classList.add('divUser');

            for (var j in user) {
                allUsers.appendChild(line);
                item = document.createElement('div');
                line.appendChild(item);
                item.innerHTML += user[j];
                item.classList.add(j, 'item')
            }
        }
    }

    function firstColumn(table) {
        var getFirstColumn = document.querySelectorAll('.' + table.options.firstColumn);
        for (var i = 0; i < getFirstColumn.length; i++) {
            getFirstColumn[i].classList.add('firstColumn');
        }
    }

    function rowHeight(table) {
        allLines = document.querySelectorAll('.divUser');
        for (var i=0; i < allLines.length; i++) {
            allLines[i].style.height = table.options.rowHeight + "px";
        }
    }

    function rowMouseOver(table, getFirstColumn) {
        allLines = document.querySelectorAll('.divUser');
        for (var i = 0; i < allLines.length; i++) {
                allLines[i].onmouseover = function() {
                    if (table.options.fixedColumn !== false && typeof(getFirstColumn[i]) !== 'undefined') {
                        for (j = 0; j < getFirstColumn.length; j++) {
                            getFirstColumn[j].classList.add('inherit')
                        }
                    }
                    else {
                        var id = document.querySelectorAll('.id');
                        for (j = 0; j < id.length; j++) {
                            id[j].classList.add('inherit')
                        }
                    }
                    this.style.background = '#5B5A55';
                };
                if (table.options.darkTheme === true) {
                    allLines[i].onmouseout = function () {
                        this.style.background = '#000'
                    }
                }
                else allLines[i].onmouseout = function () {
                    this.style.background = '#fff'
                }
            }
    }

    function rowStyleLine() {
        allLines = document.querySelectorAll('.divUser');
        for (var i=0; i < allLines.length; i++) {
            allLines[i].classList.add('styleLine');
        }
    }

    function rowStyleZebra(table) {
            var evenLine = document.querySelectorAll('.divUser:nth-child(2n+1)');
            for (var j=0; j < evenLine.length; j++){
                evenLine[j].style.background = '#989898';
                if (table.options.rowMouseOver === true){
                    evenLine[j].onmouseout = function () {
                        this.style.background = '#989898'
                    }
                }
            }
    }

    function fixedHeader(){
        var LineKeys = document.querySelector('.divKeys');
        LineKeys.classList.add('fixedHeader')
    }

    function fixedColumn(table, getFirstColumn) {
        LineKeys = document.querySelector('.divKeys');
        for (var i=0; i < getFirstColumn.length; i++){
            getFirstColumn[i].classList.add('fixedColumn');
            getFirstColumn[i].style.background = getFirstColumn[i].parentElement.style.background;
            LineKeys.style.zIndex = '1';
        }
    }

    function darkTheme(){
        LineKeys = document.querySelector('.divKeys');
        LineKeys.classList.add('darkThemeKeys');
        allLines = document.querySelectorAll('.divUser');
        for (var i=0; i < allLines.length; i++) {
            allLines[i].classList.add('darkThemeLines')
        }
    }
    
    function cellMouseOver(table) {
        item = document.querySelectorAll('.item');
        for (var i in item){
            item[i].onmouseover = function () {
                if (table.options.darkTheme === true){
                    this.style.background = 'white';
                    this.style.color = 'black';
                }
                else {
                    this.style.background = 'black';
                    this.style.color = 'white'
                }
            };
            item[i].onmouseout = function () {
                this.style.color = 'inherit';
                this.style.background = 'inherit'
            }
        }
    }
};