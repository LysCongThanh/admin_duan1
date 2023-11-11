if (document.getElementById('categories-list')) {
    const dataTableSearch = new simpleDatatables.DataTable("#categories-list", {
        searchable: true,
        fixedHeight: false,
        perPage: 7
    });

    document.querySelectorAll(".export").forEach(function (el) {
        el.addEventListener("click", function (e) {
            var type = el.dataset.type;

            var data = {
                type: type,
                filename: "soft-ui-" + type,
            };

            if (type === "csv") {
                data.columnDelimiter = "|";
            }

            dataTableSearch.export(data);
        });
    });
};

if (document.getElementById('publisher-list')) {
    const dataTableSearch = new simpleDatatables.DataTable("#publisher-list", {
        searchable: true,
        fixedHeight: false,
        perPage: 7
    });

    document.querySelectorAll(".export-publisher-list").forEach(function (el) {
        el.addEventListener("click", function (e) {
            var type = el.dataset.type;

            var data = {
                type: type,
                filename: "soft-ui-" + type,
            };

            if (type === "csv") {
                data.columnDelimiter = "|";
            }

            dataTableSearch.export(data);
        });
    });
};

if (document.getElementById('authors-list')) {
    const dataTableSearch = new simpleDatatables.DataTable("#authors-list", {
        searchable: true,
        fixedHeight: false,
        perPage: 7
    });

    document.querySelectorAll(".export-authors-list").forEach(function (el) {
        el.addEventListener("click", function (e) {
            var type = el.dataset.type;

            var data = {
                type: type,
                filename: "soft-ui-" + type,
            };

            if (type === "csv") {
                data.columnDelimiter = "|";
            }

            dataTableSearch.export(data);
        });
    });
};