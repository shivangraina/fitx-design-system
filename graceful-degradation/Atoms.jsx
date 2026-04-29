/* global React */
/* Components specific to Graceful Degradation feature.
   Builds on FitX tokens from ../colors_and_type.css.
   All inline styles, no shared 'styles' object. */

const { useState } = React;

// ─── shared atoms ───────────────────────────────────────────
const gdEyebrow = (text, color = '#C04E26') => (
  <div style={{
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
    textTransform: 'uppercase', color,
  }}>{text}</div>
);

const gdSerif = (text, opts = {}) => (
  <div style={{
    fontFamily: '"Fraunces", Georgia, serif',
    fontWeight: opts.weight ?? 500,
    fontSize: opts.size ?? 26,
    lineHeight: opts.lh ?? 1.15,
    letterSpacing: '-0.015em',
    color: opts.color ?? '#11332A',
    textWrap: 'balance',
  }}>{text}</div>
);

// ─── iOS-ish frame (just the dimensions, simple chrome) ─────
const GDPhone = ({ children, label }) => (
  <div style={{ width: 390, fontFamily: 'Inter, system-ui, sans-serif' }}>
    {label && <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A8074', marginBottom: 10, paddingLeft: 4 }}>{label}</div>}
    <div style={{
      width: 390, height: 844, borderRadius: 44,
      background: '#1A1815', padding: 8,
      boxShadow: '0 28px 60px rgba(31,24,15,0.18), 0 0 0 1px rgba(0,0,0,0.5) inset',
      position: 'relative',
    }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden',
        background: '#F4EDE2', position: 'relative',
      }}>
        {/* dynamic island */}
        <div style={{
          position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
          width: 124, height: 36, borderRadius: 99, background: '#000', zIndex: 30,
        }}/>
        {/* status bar */}
        <div style={{
          position: 'absolute', top: 16, left: 0, right: 0, height: 24, padding: '0 32px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 20,
          fontSize: 15, fontWeight: 600, color: '#1A1815',
        }}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <svg width="18" height="11" viewBox="0 0 18 11"><rect x="0" y="7" width="3" height="4" rx="0.6" fill="#1A1815"/><rect x="5" y="5" width="3" height="6" rx="0.6" fill="#1A1815"/><rect x="10" y="2" width="3" height="9" rx="0.6" fill="#1A1815"/><rect x="15" y="0" width="3" height="11" rx="0.6" fill="#1A1815"/></svg>
            <svg width="22" height="11" viewBox="0 0 26 12"><rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="#1A1815" fill="none" opacity="0.4"/><rect x="2" y="2" width="18" height="8" rx="1.5" fill="#1A1815"/></svg>
          </span>
        </div>
        <div style={{ position: 'absolute', inset: 0, paddingTop: 54 }}>
          {children}
        </div>
      </div>
    </div>
  </div>
);

// ─── small icons (stroke 1.5, adjusted for older eyes) ──────
const GDi = (props, paths) => (
  <svg width={props.size ?? 22} height={props.size ?? 22} viewBox="0 0 24 24" fill="none"
       stroke={props.color ?? 'currentColor'} strokeWidth={props.sw ?? 1.5} strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
);
const Ico = {
  clock: (p={}) => GDi(p, <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>),
  battery: (p={}) => GDi(p, <><rect x="3" y="8" width="15" height="9" rx="2"/><path d="M19 11v3"/><path d="M6 12h2"/></>),
  fridge: (p={}) => GDi(p, <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M5 11h14"/><path d="M9 7v1"/><path d="M9 14v2"/></>),
  check: (p={}) => GDi(p, <path d="M20 6 9 17l-4-4"/>),
  arrow: (p={}) => GDi(p, <><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></>),
  chevR: (p={}) => GDi(p, <path d="m9 6 6 6-6 6"/>),
  shield: (p={}) => GDi(p, <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>),
  swap: (p={}) => GDi(p, <><path d="M16 3l4 4-4 4"/><path d="M20 7H10a4 4 0 0 0-4 4"/><path d="M8 21l-4-4 4-4"/><path d="M4 17h10a4 4 0 0 0 4-4"/></>),
  sparkle: (p={}) => GDi(p, <><path d="M12 3v6"/><path d="M12 15v6"/><path d="M3 12h6"/><path d="M15 12h6"/></>),
};

// ─── time chips, energy chips ───────────────────────────────
const GDChip = ({ active, onClick, children, big }) => (
  <button onClick={onClick} style={{
    minHeight: big ? 56 : 48,
    padding: big ? '10px 18px' : '10px 16px',
    borderRadius: 14, border: '1.5px solid ' + (active ? '#11332A' : '#D7CDB9'),
    background: active ? '#11332A' : '#FBF7EE',
    color: active ? '#F4EDE2' : '#1F4D3F',
    fontFamily: 'Inter,sans-serif', fontSize: 15, fontWeight: 600,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    cursor: 'pointer', flex: 1,
  }}>{children}</button>
);

// ─── attribution bar (reviewed by …) ────────────────────────
const GDAttribution = ({ name, role, color = '#1F4D3F' }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 12px', borderRadius: 10,
    background: 'rgba(31,77,63,0.06)', border: '1px solid rgba(31,77,63,0.10)',
  }}>
    <div style={{ width: 28, height: 28, borderRadius: 99, background: color, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
      <Ico.shield size={14} color="#F4EDE2" sw={1.8}/>
    </div>
    <div style={{ minWidth: 0 }}>
      <div style={{ fontSize: 12, color: '#1F4D3F', fontWeight: 600 }}>Reviewed by {name}</div>
      <div style={{ fontSize: 11, color: '#6B6359' }}>{role} · pre-approved swap library</div>
    </div>
  </div>
);

Object.assign(window, { GDPhone, GDChip, GDAttribution, gdEyebrow, gdSerif, Ico });
