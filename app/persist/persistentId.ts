export function uuidv4() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

function cookieSet(name: string, value: string, days = 3650) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie =
    `${name}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
}

function cookieGet(name: string) {
  const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return m ? decodeURIComponent(m[2]) : null;
}

export function getPersistentIdStrict(KEY = 'web_id_v1') {
  try {
    const fromLocal = localStorage.getItem(KEY);
    if (fromLocal) return fromLocal;
  } catch { }

  const fromCookie = cookieGet(KEY);
  if (fromCookie) {
    try { localStorage.setItem(KEY, fromCookie); } catch { }
    return fromCookie;
  }

  const newId = uuidv4();

  try { localStorage.setItem(KEY, newId); } catch { }
  try { cookieSet(KEY, newId); } catch { }

  return newId;
}

export function clearPersistentId(KEY = 'web_id_v1') {
  try { localStorage.removeItem(KEY); } catch { }
  document.cookie = `${KEY}=; Max-Age=0; path=/`;
}
