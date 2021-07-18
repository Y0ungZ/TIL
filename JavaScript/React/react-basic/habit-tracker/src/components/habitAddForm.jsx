
import React, { memo } from 'react';

const HabitAddForm = memo(props => {   
    const formRef = React.createRef();
    const inputRef = React.createRef();
    
    const onSubmit = event => {
        event.preventDefault();
        //console.log(this.inputRef.current.value);
        const name = inputRef.current.value;
        name && props.onAdd(name);
        // this.inputRef.current.value = '';
        formRef.current.reset();
    }
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" placeholder="Habit" className="add-input" />
            <button className="add-button">Add</button>
      </form>      
    );
}
);

export default HabitAddForm;
