webix.ready( function() {
    webix.ui({
        type: "line",
        container: "app",
        id: 'root',
        height: 400,
        rows: [
            { template: "Row 1" },
            { template: "Row 2"},
            { cols: [
                { template: "Col 1" },
                { template: "Col 2"}
                ]
            }
        ]
    });
})