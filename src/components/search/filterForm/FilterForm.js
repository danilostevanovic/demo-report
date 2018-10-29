import React from 'react';
import CurrentDataView  from './currentDataView/CurrentDataView';
import DatePicker from './datePicker/DatePicker';
import ResetFilterButton from '../buttons/ResetFilterButton';


const FilterForm = () => (
     <div>
       <div>
            <CurrentDataView />
            <DatePicker />
            <ResetFilterButton />
       </div>
     </div>
)

export default FilterForm;