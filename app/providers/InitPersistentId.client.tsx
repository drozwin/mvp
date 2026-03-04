'use client';

import React, { useEffect, useState } from 'react';
import { getPersistentIdStrict } from '../lib/persistentIdweb';

export default function InitPersistentId({ sendToServerOnInit = false }: { sendToServerOnInit?: boolean }) {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const pid = await getPersistentIdStrict();
        if (!mounted) return;
        setId(pid);
        // make available globally for other scripts
        try { (window as unknown as { __PERSISTENT_ID?: string }).__PERSISTENT_ID = pid; } catch (e) { }

        // Optionally send to backend on init (useful to register device immediately)
        if (sendToServerOnInit) {
          try {
            await fetch('/api/register-persistent-id', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ persistentId: pid }),
              credentials: 'include',
            });
          } catch (e) {
            // ignore network errors silently or handle them
            console.warn('failed to register persistent id', e);
          }
        }
      } catch (e) {
        console.error('failed to obtain persistent id', e);
      }
    })();

    return () => { mounted = false; };
  }, [sendToServerOnInit]);

  return (
    <React.Fragment>
      {/* Invisible element; you can show the id for debugging */}
      <div style={{ display: 'none' }} data-persistent-id={id ?? ''}></div>
    </React.Fragment>
  );
}