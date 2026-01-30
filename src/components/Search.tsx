import {useState, type FC, type ChangeEventHandler} from "react";

export const Search:FC = () => {
    const [search, setSearch] = useState<string>("");

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <label htmlFor="search-input">Search</label>
            <input id="search-input" type="text" value={search} onChange={handleChange} />   
            <p>Searches for {search ? search : "..."}</p>
        </>
    );
}