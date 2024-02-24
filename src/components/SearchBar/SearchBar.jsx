// SearchBar.js
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/filtersSlice';
import css from './searchBar.module.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilterChange = (value) => {
    dispatch(updateFilter(value));
  };

  return (
    <input
      className= {css.input}
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={(e) => handleFilterChange(e.target.value)}
    />
  );
}
