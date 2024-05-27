const data = [
    {
        id: crypto.randomUUID(),
        title: "Learn React Native",
        subtitle:
            "  i want to",

        isFavorite: true,
    },
    {
        id: crypto.randomUUID(),
        title: "Learn React",
        subtitle:
            "  i want to",

        isFavorite: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Learn React with orun",
        subtitle:
            "  i want to",

        isFavorite: false,
    }


]


function getAllTask() {
    return data;
}

export { getAllTask }

