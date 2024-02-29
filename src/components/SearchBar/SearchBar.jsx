import { useDispatch, useSelector } from 'react-redux';
import css from './searchBar.module.css';
import { filterFiltration } from '../../redux/filtersSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filter.text);
  const filter = event => dispatch(filterFiltration(event.target.value));
  return (
    <div className={css.container}>
      <input name="filter" onChange={filter} value={filters} className={css.input} />
    </div>
  );
}
