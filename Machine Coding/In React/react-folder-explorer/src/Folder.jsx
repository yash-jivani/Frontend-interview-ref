import React, { useState } from "react";

const Folder = ({ explorer }) => {
    const [expended, setExpended] = useState(false);
    if (explorer.isFolder) {
        return (
            <>
                <div
                    onClick={() => {
                        setExpended(!expended);
                    }}
                >
                    {explorer.name}
                </div>
                <div
                    style={{
                        display: expended ? "block" : "none",
                        paddingLeft: 15,
                    }}
                >
                    {explorer.items.map((item, index) => {
                        return (
                            <Folder key={index} explorer={item}>
                                {item.name} <br />
                            </Folder>
                        );
                    })}
                </div>
            </>
        );
    } else {
        return <span>{explorer.name}</span>;
    }
};

export default Folder;
