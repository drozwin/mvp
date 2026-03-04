import { useEffect } from 'react';
import { getPersistentIdStrict } from '../lib/persistentIdweb';

export default function InitPersistentId() {
    useEffect(() => {
        let mounted = true;

        (async () => {
            const id = await getPersistentIdStrict();

            if (!mounted) return;

            // Exponerlo globalmente si lo necesitas
            (window as any).__PERSISTENT_ID = id;

            console.log('Persistent ID:', id);
        })();

        return () => {
            mounted = false;
        };
    }, []);

    return null; // no renderiza nada
}
