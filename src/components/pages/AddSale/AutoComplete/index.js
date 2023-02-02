import { useState, useEffect } from "react";
import { getAllItems } from "../../../../controllers/items";

const AutoCompleteItemName = () => {
    const [display, setDisplay] = useState(false)
    const [options, setOptions] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getAllItems().then((data) => setOptions(data));
    }, []);

    const result = () => {
        const filteredResults = options.filter(element => element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        if (filteredResults.length === 0) {
            return []
        }
        else {
            return filteredResults
        }
    }

    return (
        <>
            <div >
                <input
                    id="itemName"
                    name="itemName"
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    onFocus={() => {
                        setDisplay(true);
                    }}
                />
                <div id="item-names" >
                    {display && (<>
                        {result().map((value, id) => {
                            return (
                                <div
                                    key={id}
                                    tabIndex="0"
                                >
                                    <span>{value.name}</span>
                                </div>
                            )
                        })}
                    </>)}
                </div>
            </div>
        </>
    )
}
export default AutoCompleteItemName