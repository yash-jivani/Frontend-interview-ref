const folderExplorer = {
    name: "root",
    isFolder: true,
    items: [
        {
            name: "public",
            isFolder: true,
            items: [
                {
                    name: "public.html",
                    isFolder: false,
                    items: [],
                },
                {
                    name: "public.css",
                    isFolder: false,
                    items: [],
                },
            ],
        },
        {
            name: "src",
            isFolder: true,
            items: [
                {
                    name: "components",
                    isFolder: true,
                    items: [
                        {
                            name: "comp1.html",
                            isFolder: false,
                            items: [],
                        },
                        {
                            name: "comp2.html",
                            isFolder: false,
                            items: [],
                        },
                        {
                            name: "comp3.html",
                            isFolder: false,
                            items: [],
                        },
                    ],
                },
                {
                    name: "index.html",
                    isFolder: false,
                    items: [],
                },
            ],
        },
        {
            name: "pkg.json",
            isFolder: false,
            items: [],
        },
    ],
};

export default folderExplorer;
