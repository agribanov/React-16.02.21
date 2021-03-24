import React from 'react';

function Sticker({ sticker, onChange, onDelete, onSave }) {
    function onValueChange(e) {
        onChange(sticker.id, { [e.target.name]: e.target.value });
    }

    function saveSticker() {
        onSave(sticker.id);
    }

    return (
        <div style={getStickerStyle()}>
            <div style={stickerHeaderStyle}>
                <span
                    style={deleteBtnStyle}
                    onClick={onDelete.bind(null, sticker)}
                >
                    x
                </span>
            </div>
            <div style={stickerBodyStyle}>
                <textarea
                    name="description"
                    style={desciptionInputStyle}
                    value={sticker.description}
                    onChange={onValueChange}
                    onBlur={saveSticker}
                />
            </div>
        </div>
    );
}

function getStickerStyle() {
    return {
        width: '200px',
        height: '200px',
        border: '1px solid black',
        backgroundColor: 'lightyellow',
        float: 'left',
    };
}

// const stickerStyle = {
//     width: '200px',
//     height: '200px',
//     border: '1px solid black',
//     backgroundColor: 'lightyellow',
//     float: 'left',
// };

const stickerHeaderStyle = {
    padding: '5px',
};

const deleteBtnStyle = {
    cursor: 'pointer',
    float: 'right',
    fontWeight: 'bold',
};

const stickerBodyStyle = {
    padding: '5px',
};

const desciptionInputStyle = {
    width: '180px',
    height: '150px',
};

export default Sticker;
