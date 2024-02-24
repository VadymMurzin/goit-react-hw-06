// SearchBar.js
// import { useDispatch, useSelector } from 'react-redux';
// import { updateFilter } from '../../redux/filtersSlice';
// import css from './searchBar.module.css';

// export default function SearchBar() {
//   const dispatch = useDispatch();
//   const filter = useSelector((state) => state.filters.name);

//   const handleFilterChange = (value) => {
//     dispatch(updateFilter(value));
//   };

//   return (
//     <input
//       className= {css.input}
//       type="text"
//       placeholder="Search by name"
//       value={filter}
//       onChange={(e) => handleFilterChange(e.target.value)}
//     />
//   );
// }

import { useDispatch, useSelector } from 'react-redux';
import css from './searchBar.module.css';
import { filterFiltration } from '../../redux/filtersSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filter);
  console.log(filters);

  //   const fsdfsfg = contacts.map(contact => {
  //     return contact.name;
  //   });
  const filter = event => dispatch(filterFiltration(event.target.value));
  return (
    <div className={css.container}>
      <input name="filter" onChange={filter} value={filters} className={css.input} />
    </div>
  );
}
