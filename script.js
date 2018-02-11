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
            firstColumn: 'email',
            rowMouseOver: true,
            rowStyle: 'zebra',
            fixedHeader: true,
            fixedColumn: true
        }
    });
    function initSuperTable(table){
        var divKeys = document.createElement('div');
        divKeys.classList.add("divKeys");
        table.element.appendChild(divKeys);

        for (var i in table.data){
            var user = table.data[i];
            for (var j in user ){
                var item = document.createElement('div');
                item.classList.add(j);
                divKeys.appendChild(item);
                item.innerHTML += j;
            }
            table.element.innerHTML += '<br>'
        }
    }
};