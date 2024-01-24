export default [
    {
        context: [
            "/_framework",
            "/_content",
            "/_blazor"
        ],
        target: "http://localhost:5203",
        secure: false,
        ws: true,
        logLevel: "debug"
    }
]