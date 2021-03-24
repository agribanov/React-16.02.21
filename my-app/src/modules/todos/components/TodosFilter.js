import React from 'react';

export default function TodosFilter({ filter, setFilter, search, setSearch }) {
    function onChange(e) {
        setFilter(e.target.value);
    }

    function onSearchChange(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <select style={{ margin: 20 }} value={filter} onChange={onChange}>
                <option value="all">All</option>
                <option value="done">Done</option>
                <option value="notdone">Not done</option>
            </select>
            <input type="text" value={search} onChange={onSearchChange} />
        </>
    );
}
