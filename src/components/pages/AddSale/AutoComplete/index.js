import { useState, useEffect, useRef } from "react";
import { getAllItems } from "../../../../controllers/items";

const AutoCompleteItemName = ({ stateAccess }) => {
    const [display, setDisplay] = useState(false)
    const [options, setOptions] = useState([])
    const [search, setSearch] = useState("")
    const wrapperRef = useRef(null);

    useEffect(() => {
        getAllItems().then((data) => setOptions(data));
    }, []);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });
    
    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };

    useEffect(() => {
        parentStates(search)
    }, [search]);

    const parentStates = (name) => {
        stateAccess(name)
    }

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
            <div ref={wrapperRef}>
                <input
                    id="item-name"
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
                                <div onClick={() => {
                                    setSearch(value.name);
                                    setDisplay(!display)
                                }}
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