import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterService } from '../actions/actionsCreators';

const initialFilterValue = '';

export default function ServiceFilter() {
    const filterServiceValue = useSelector(state => state.filterServiceValue);
    const [filterValue, setFilterValue] = useState(initialFilterValue) 
    const dispatch = useDispatch();

    useEffect(() => {
        setFilterValue(initialFilterValue);
      }, []);

    useEffect(() => {
        setFilterValue(filterServiceValue);
      }, [filterServiceValue]);

    const handlerChange = event => {
        const {value} = event.target;
        dispatch(filterService(value));
    }

    const handleClear = event => {
        event.preventDefault();
        dispatch(filterService(initialFilterValue));
    }

    return(
        <label> Filter
            <input onChange={handlerChange} value={filterValue} id="filter" type="text" />
            <button onClick={handleClear}>Clear filter</button>
        </label>
    )
}
