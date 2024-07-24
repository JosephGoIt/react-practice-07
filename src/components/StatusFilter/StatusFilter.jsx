import {Button} from '../Button/Button';
import css from './StatusFilter.module.css';
//import the hook
import { useSelector, useDispatch } from 'react-redux';
//import the filter value object
import { statusFilters } from '../../redux/constants';
import { setStatusFilter } from '../../redux/actions';

export const StatusFilter = () => {
    // Get a link to the action dispatch function
    const dispatch = useDispatch();

    //get filter value from redux state
    const filter = useSelector(state => state.filters.status);

    //  Call the action generator and pass the filter value
    // Sending the result - filter change action
    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

    return(
        <div className={css.wrapper}>
            <Button 
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}
            >
                All
            </Button>
            <Button 
                selected={filter === statusFilters.active}
                onClick={() => handleFilterChange(statusFilters.active)}
            >
                Active
            </Button>
            <Button 
                selected={filter ===statusFilters.completed}
                onClick={() => handleFilterChange(statusFilters.completed)}
            >
                Completed
            </Button>
        </div>
    );
};