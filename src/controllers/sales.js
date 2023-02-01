export const addSale = (saleObj) => {
    fetch("http://localhost:7500/sales", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(saleObj),
    });
};
export const getAllSales = async () => {
    return fetch(`http://localhost:7500/sales/`)
        .then((res) => {
            return res.json()
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
};
export const getSingleItem = async (id) => {
    return fetch(`http://localhost:7500/sales/${id}`)
        .then((res) => {
            return res.json()
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
};
export const updateSale = (id, saleObj) => {
    return fetch(`http://localhost:7500/sales/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(saleObj),
    });
};
export const deletePage = (event, id) => {
    event.preventDefault();
    var answer = window.confirm("Delete content?");
    if (answer) {
        fetch(`http://localhost:7500/sales/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
};
export const getItemSales = async (id) => {
    return fetch(`http://localhost:7500/sales/?itemId=${id}`)
        .then((res) => {
            return res.json()
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
};