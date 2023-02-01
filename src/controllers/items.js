export const addItem = (itemObj) => {
    fetch("http://localhost:7500/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itemObj),
    });
};
export const getAllItems = async () => {
    return fetch(`http://localhost:7500/items/`)
        .then((res) => {
            return res.json()
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
};
export const getSingleItem = async (id) => {
    return fetch(`http://localhost:7500/items/${id}`)
        .then((res) => {
            return res.json()
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
};
export const updateItem = (id, itemObj) => {
    return fetch(`http://localhost:7500/pages/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itemObj),
    });
};
export const deleteItem = (event, id) => {
    event.preventDefault();
    var answer = window.confirm("Delete content?");
    if (answer) {
        fetch(`http://localhost:7500/items/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
};