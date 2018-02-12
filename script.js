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
            rowHeight : 30,
            rowMouseOver: true,
            rowStyle: 'zebra',
            fixedHeader: true,
            fixedColumn: true,
            color : 'black'
        }
    });
    function initSuperTable(table){
        var divKeys = document.createElement('div');
        divKeys.style.background = 'black';
        divKeys.classList.add("divKeys");
        table.element.appendChild(divKeys);


        for (var i in table.data) {
            var user = table.data[i];
        }
            for (var j in user) {
                var item = document.createElement('div');
                item.classList.add(j);
                divKeys.appendChild(item);
                item.innerHTML += j;
            }
        var users = document.createElement('div');
        table.element.appendChild(users);
        users.classList.add('users');

        for (var i in table.data) {
            user = table.data[i];

            var divUser = document.createElement('div');
            divUser.classList.add("divUser");

            users.appendChild(divUser);
            divUser.innerHTML += '<br>';

            for (var j in user){
                var itemUser = document.createElement('div');
                itemUser.classList.add(j);
                divUser.appendChild(itemUser);
                itemUser.innerHTML = user[j];
            }
        }


       var firstColumn = document.querySelectorAll('.'+table.options.firstColumn);
        for (var i=0; i < firstColumn.length; i++){
            firstColumn[i].style.order = "-1";
        }


        var allLines = document.querySelectorAll('.divUser');
         for (var i=0; i < allLines.length; i++){
             allLines[i].style.background = 'white';
            allLines[i].style.height = table.options.rowHeight + "px";


             if (table.options.rowMouseOver === true){
                allLines[i].onmouseover = function mouseOver() {
                    this.style.background = '#5B5A55'
                };
                allLines[i].onmouseout = function () {
                    this.style.background = '#fff'
                }
             }


             if (table.options.rowStyle === "line" || table.options.rowStyle === "zebra"){
                 allLines[i].style.borderTop = '1px solid rgba(98, 98, 98, 0.30)'
             }
             if (table.options.rowStyle === "zebra"){
                var evenLine = document.querySelectorAll('.divUser:nth-child(2n)');
                for (var j=0; j < evenLine.length; j++){
                    evenLine[j].style.background = '#989898';
                    if (table.options.rowMouseOver === true){
                        evenLine[j].onmouseout = function () {
                            this.style.background = '#989898'
                        }
                    }
                }
             }
             allLines[i].style.color = table.options.color;
        }

        if(table.options.fixedHeader === true) {
            var LineKeys = document.querySelector('.divKeys');
            LineKeys.style.position = 'sticky';
            LineKeys.style.top = '-1px'
        }

        if(table.options.fixedColumn === true){
             for (var i=0; i < firstColumn.length; i++){
                 firstColumn[i].style.position = 'sticky';
                 firstColumn[i].style.borderRight = '1.5px solid rgba(98, 98, 98, 0.30)';
                 firstColumn[i].style.background = firstColumn[i].parentElement.style.background;
                 console.log(firstColumn[i].parentElement.style.background.onchange);
                 if (firstColumn[i].parentElement.onmouseover === null){
                     firstColumn[i].style.background = firstColumn[i].parentElement.style.background
                 }
                 divKeys.style.zIndex = '1';
                 firstColumn[i].style.left = '-1px';
             }
        }
    }
};