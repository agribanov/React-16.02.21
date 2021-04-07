import { useCallback, useEffect, useState } from 'react';
import useBoolean from '../../common/hooks/useBoolean';
import { create, getList, remove, update } from '../services/contactsService';

export default function useContacts() {
    const [list, setList] = useState([]);
    const [isLoading, toggleIsLoading] = useBoolean(false);

    const refresh = useCallback(() => {
        toggleIsLoading(true);

        getList().then(({ data }) => {
            setList(data);
            toggleIsLoading(false);
        });
    }, [toggleIsLoading]);

    const save = useCallback(
        (data) => {
            toggleIsLoading(true);

            if (data.id) {
                update(data).then(({ data }) => {
                    setList((list) =>
                        list.map((item) => (item.id === data.id ? data : item))
                    );
                    toggleIsLoading(false);
                });
            } else {
                create(data).then(({ data }) => {
                    setList((list) => [...list, data]);
                    toggleIsLoading(false);
                });
            }
        },
        [toggleIsLoading]
    );

    const removeContact = useCallback(
        (id) => {
            toggleIsLoading(true);

            remove(id).then(() => {
                setList((list) => list.filter((item) => item.id !== id));
                toggleIsLoading(false);
            });
        },
        [toggleIsLoading]
    );

    useEffect(refresh, [refresh]);

    return {
        list,
        isLoading,
        refresh,
        save,
        remove: removeContact,
    };
}
