import React from 'react';
import Header from './components/Header';
import StickersList from './components/StickersList';
import useStickers from './hooks/useStickers';

function App() {
    const { stickers, addSticker, deleteSticker } = useStickers();

    function addNewSticker() {
        addSticker();
    }

    function onDeleteSticker(sticker) {
        deleteSticker(sticker.id);
    }

    function changeSticker(id, updatedData) {}

    function saveSticker(id) {}

    return (
        <>
            <Header onAddClick={addNewSticker} />
            <StickersList
                stickers={stickers}
                onDelete={onDeleteSticker}
                onChange={changeSticker}
                onSave={saveSticker}
            />
        </>
    );
}

export default App;
