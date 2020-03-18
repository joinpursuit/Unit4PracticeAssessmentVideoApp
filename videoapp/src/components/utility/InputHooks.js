import { useState } from "react";

//destructure when calling in other pages and import 

//use for inputs, will change on every letter
export const useInputs = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return { value, onChange: handleChange}
}