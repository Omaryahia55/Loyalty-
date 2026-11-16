import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";
const app = initializeApp({
  apiKey: "AIzaSyB15Yptk8xGSvmNjp_6e9IUyNORUy0jh2M",
  authDomain: "loyalty-omacine.firebaseapp.com",
  projectId: "loyalty-omacine",
  storageBucket: "loyalty-omacine.firebasestorage.app",
  messagingSenderId: "193717455724",
  appId: "1:193717455724:web:d5911004b72f6939934149"
});
export const db = getFirestore(app);
export const auth = getAuth(app);
export const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
export const norm = p => { let d = String(p).replace(/\D/g, ''); if (d.startsWith('00')) d = d.slice(2); if (d.startsWith('0')) d = '213' + d.slice(1); return d; };
export const wa = (p, t) => 'https://wa.me/' + p + '?text=' + encodeURIComponent(t);
export const css = `:root{--ac:#0f766e;--bg:#f6f4ef;--cd:#fff;--tx:#1d1d1b;--mu:#6b6b66;--bd:#e3dfd6;color-scheme:light dark}
@media(prefers-color-scheme:dark){:root{--bg:#15171a;--cd:#202327;--tx:#f1efe9;--mu:#a3a39b;--bd:#33373d}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--tx);font-family:system-ui,Tahoma,Arial,sans-serif;line-height:1.5}
.w{max-width:560px;margin:0 auto;padding:16px}.c{background:var(--cd);border:1px solid var(--bd);border-radius:14px;padding:14px;margin-bottom:12px}
label{display:block;font-size:13px;color:var(--mu);margin:8px 0 4px}input,select,textarea{width:100%;padding:11px;border:1px solid var(--bd);border-radius:10px;background:var(--bg);color:var(--tx);font:inherit}
.b{display:block;width:100%;margin-top:10px;padding:12px;border:0;border-radius:10px;background:var(--ac);color:#fff;font:inherit;font-weight:600;cursor:pointer;text-align:center;text-decoration:none}
.b.g{background:transparent;color:var(--ac);border:1px solid var(--ac)}.b.w2{background:#25a244}.b.s{display:inline-block;width:auto;margin:0;padding:8px 12px}
.g5{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin:12px 0}.s5{aspect-ratio:1;border:2px dashed var(--bd);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;color:var(--mu)}
.s5.f{background:var(--ac);border:2px solid var(--ac);color:#fff}.mu{color:var(--mu);font-size:13px}.ok{background:var(--bd);padding:10px;border-radius:10px;text-align:center;font-weight:600;margin-top:8px}
.tabs{display:flex;gap:6px;margin-bottom:12px}.tabs button{flex:1;padding:10px 2px;border:1px solid var(--bd);background:var(--cd);color:var(--tx);border-radius:10px;font:inherit;font-size:14px}.tabs .on{background:var(--ac);color:#fff;border-color:var(--ac)}
.r{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid var(--bd)}[hidden]{display:none!important}`;
export const stamps = (n, t) => '<div class="g5">' + Array.from({length: t}, (_, i) => `<div class="s5${i < n ? ' f' : ''}">${i < n ? '★' : i + 1}</div>`).join('') + '</div>';
