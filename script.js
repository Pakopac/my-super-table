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