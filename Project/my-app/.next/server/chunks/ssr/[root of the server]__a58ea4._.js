module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/page.jsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
const { jsxDEV: _jsxDEV, Fragment: _Fragment } = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
return /*#__PURE__*/ _jsxDEV(_Fragment, {
    children: [
        /*#__PURE__*/ _jsxDEV("h1", {
            className: "text-center text-4xl font-bold",
            children: "Book Tracker"
        }, void 0, false, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this),
        /*#__PURE__*/ _jsxDEV("div", {
            id: "form",
            className: "flex justify-center",
            children: /*#__PURE__*/ _jsxDEV("form", {
                className: "flex flex-col gap-2 w-50 p-3",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ _jsxDEV("input", {
                        required: true,
                        placeholder: "Book Title",
                        value: form.name,
                        onChange: (e)=>setForm({
                                ...form,
                                name: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ _jsxDEV("input", {
                        required: true,
                        placeholder: "Author",
                        value: form.author,
                        onChange: (e)=>setForm({
                                ...form,
                                author: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 13,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ _jsxDEV("select", {
                        required: true,
                        placeholder: "Choose status",
                        className: "text-black",
                        value: form.status,
                        onChange: (e)=>setForm({
                                ...form,
                                status: e.target.value
                            }),
                        children: [
                            /*#__PURE__*/ _jsxDEV("option", {
                                value: "Reading",
                                children: "Reading"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 15,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ _jsxDEV("option", {
                                value: "Completed",
                                children: "Read"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 16,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ _jsxDEV("option", {
                                value: "Wishlist",
                                children: "Want to Read"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 17,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        children: "Add Book"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this),
        /*#__PURE__*/ _jsxDEV("hr", {}, void 0, false, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 25,
            columnNumber: 11
        }, this),
        /*#__PURE__*/ _jsxDEV("hr", {}, void 0, false, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 26,
            columnNumber: 11
        }, this),
        /*#__PURE__*/ _jsxDEV("hr", {
            className: "p-4"
        }, void 0, false, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 27,
            columnNumber: 11
        }, this),
        /*#__PURE__*/ _jsxDEV("div", {
            className: "flex flex-col justify-center ",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    id: "reading",
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-3xl  text-center",
                            children: "📖 Currently Reading"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 38,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex flex-wrap justify-center gap-4 p-8",
                            children: books.filter((book)=>book.status === 'Reading').map((book)=>/*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex flex-row gap-16 border p-4 rounded",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    children: book.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 46,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    children: [
                                                        "by ",
                                                        book.author
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 47,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    children: [
                                                        "Status: ",
                                                        book.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 48,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 45,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex flex-col justify-center items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    className: "border rounded p-1 bg-red-600",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 51,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    className: "border rounded p-1 bg-blue-600",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 52,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 50,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, book.id, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 44,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 40,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 36,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    id: "read",
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-3xl text-center",
                            children: "✅ Read"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex flex-wrap justify-center gap-4 p-8",
                            children: books.filter((book)=>book.status === 'Completed').map((book)=>/*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex flex-row gap-16 border p-4 rounded w-fit",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    children: book.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 71,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    children: [
                                                        "by ",
                                                        book.author
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 72,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    children: [
                                                        "Status: ",
                                                        book.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 73,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 70,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex flex-col justify-center items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    className: "border rounded p-1 bg-red-600",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 76,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    className: "border rounded p-1 bg-blue-600",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 75,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, book.id, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 69,
                                    columnNumber: 23
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 61,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    id: "want to read",
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-3xl text-center",
                            children: "🕒 Want to Read"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex flex-wrap justify-center gap-4 p-8",
                            children: books.filter((book)=>book.status === 'Wishlist').map((book)=>/*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex flex-row gap-16 border p-4 rounded w-fit",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    children: book.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    children: [
                                                        "by ",
                                                        book.author
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    children: [
                                                        "Status: ",
                                                        book.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 95,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex flex-col justify-center items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    className: "border rounded p-1 bg-red-600",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    className: "border rounded p-1 bg-blue-600",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.jsx",
                                            lineNumber: 100,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, book.id, true, {
                                    fileName: "[project]/app/page.jsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 90,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 86,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 32,
            columnNumber: 11
        }, this)
    ]
}, void 0, true);
}}),
"[project]/app/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__a58ea4._.js.map