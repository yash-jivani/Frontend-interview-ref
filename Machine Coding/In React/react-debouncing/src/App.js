import React from "react";

function debounce(cb, d) {
    let timer;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb(...args);
        }, d);
    };
}

const handleOnChange = debounce((e) => {
    console.log(e.target.value);
}, 1000);

const App = () => {
    return (
        <div>
            <input onChange={handleOnChange} />
        </div>
    );
};

export default App;
