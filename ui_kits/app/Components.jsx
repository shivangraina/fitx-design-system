/* global React */

// ---------- Lucide-style icons (1.75 stroke) ----------
const Icon = ({ d, children, size = 22, color = 'currentColor', fill = 'none', strokeWidth = 1.75 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color}
       strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const I = {
  home: (p) => <Icon {...p}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/></Icon>,
  dumbbell: (p) => <Icon {...p}><path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/></Icon>,
  utensils: (p) => <Icon {...p}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2c-3 0-5 3-5 6v6c0 1 1 2 2 2h3z"/><path d="M21 15v7"/></Icon>,
  message: (p) => <Icon {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></Icon>,
  user: (p) => <Icon {...p}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></Icon>,
  arrowRight: (p) => <Icon {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></Icon>,
  arrowLeft: (p) => <Icon {...p}><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></Icon>,
  play: (p) => <Icon {...p} fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></Icon>,
  check: (p) => <Icon {...p}><path d="M20 6 9 17l-5-5"/></Icon>,
  flame: (p) => <Icon {...p}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></Icon>,
  clock: (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></Icon>,
  shield: (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></Icon>,
  send: (p) => <Icon {...p}><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></Icon>,
  bell: (p) => <Icon {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></Icon>,
  trending: (p) => <Icon {...p}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></Icon>,
  chevronRight: (p) => <Icon {...p}><polyline points="9 18 15 12 9 6"/></Icon>,
  settings: (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></Icon>,
};

// ---------- Building blocks ----------
const Pill = ({ children, tone = 'cream' }) => {
  const tones = {
    cream: { bg: 'var(--fx-cream-300)', fg: 'var(--fx-ink-800)' },
    saffron: { bg: 'var(--fx-saffron-100)', fg: 'var(--fx-saffron-600)' },
    forest: { bg: 'var(--fx-forest-100)', fg: 'var(--fx-forest-600)' },
    success: { bg: 'var(--fx-success-bg)', fg: 'var(--fx-success)' },
    info: { bg: 'var(--fx-info-bg)', fg: 'var(--fx-info)' },
  };
  const t = tones[tone] || tones.cream;
  return <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '4px 10px', borderRadius: 99,
    fontSize: 11, fontWeight: 600, fontFamily: 'var(--fx-font-body)',
    background: t.bg, color: t.fg, whiteSpace: 'nowrap',
  }}>{children}</span>;
};

const Btn = ({ children, variant = 'primary', size = 'md', full, onClick, leadingIcon }) => {
  const v = {
    primary: { bg: 'var(--fx-saffron-400)', fg: '#fff', border: 'transparent' },
    secondary: { bg: 'var(--fx-forest-500)', fg: 'var(--fx-cream-100)', border: 'transparent' },
    outline: { bg: 'transparent', fg: 'var(--fx-fg-1)', border: 'var(--fx-stone-300)' },
    ghost: { bg: 'transparent', fg: 'var(--fx-fg-1)', border: 'transparent' },
  }[variant];
  const h = size === 'lg' ? 56 : size === 'sm' ? 36 : 48;
  return (
    <button onClick={onClick} style={{
      height: h, padding: size === 'sm' ? '0 14px' : '0 22px',
      borderRadius: 10, border: `1.5px solid ${v.border}`,
      background: v.bg, color: v.fg,
      fontFamily: 'var(--fx-font-body)', fontWeight: 600, fontSize: size === 'sm' ? 14 : 15,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      width: full ? '100%' : undefined, cursor: 'pointer',
      transition: 'all 150ms var(--fx-ease)',
    }}>{leadingIcon}{children}</button>
  );
};

const Eyebrow = ({ children, color = 'var(--fx-stone-500)' }) => (
  <div style={{
    fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
    color, fontWeight: 600, fontFamily: 'var(--fx-font-body)',
  }}>{children}</div>
);

const H = ({ level = 2, children, color = 'var(--fx-fg-1)', style }) => {
  const sizes = { 1: 32, 2: 26, 3: 20, 4: 17 };
  const Tag = `h${level}`;
  return <Tag style={{
    fontFamily: 'var(--fx-font-display)', fontWeight: 600,
    fontSize: sizes[level], lineHeight: 1.15, letterSpacing: '-0.02em',
    color, margin: 0, textWrap: 'balance', ...style,
  }}>{children}</Tag>;
};

// ---------- Workout / meal thumbnails (faked photography) ----------
const Thumb = ({ tone = 'saffron', children, size = 56, radius = 12 }) => {
  const grads = {
    saffron: 'linear-gradient(135deg, #E89368, #97391A)',
    forest:  'linear-gradient(135deg, #4F8870, #11332A)',
    cream:   'linear-gradient(135deg, #EFE5D2, #C4D9CC)',
    sun:     'linear-gradient(135deg, #F6D8C2, #E0653A)',
    sage:    'linear-gradient(135deg, #C4D9CC, #2E6852)',
  };
  return (
    <div style={{
      width: size, height: size, borderRadius: radius,
      background: grads[tone], display: 'grid', placeItems: 'center',
      color: '#fff', fontFamily: 'var(--fx-font-display)', fontWeight: 600, fontSize: size * 0.32,
      flexShrink: 0,
    }}>{children}</div>
  );
};

// ---------- App header (in-app, not iOS status) ----------
const AppHeader = ({ title, subtitle, right, onBack }) => (
  <div style={{
    padding: '14px 20px 10px',
    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12,
  }}>
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      {onBack && (
        <button onClick={onBack} style={{
          width: 36, height: 36, borderRadius: 10, border: '1px solid var(--fx-stone-200)',
          background: 'var(--fx-white)', display: 'grid', placeItems: 'center', cursor: 'pointer',
        }}><I.arrowLeft size={18} /></button>
      )}
      <div>
        {subtitle && <div style={{ fontSize: 12, color: 'var(--fx-stone-500)', fontWeight: 500 }}>{subtitle}</div>}
        <H level={2} style={{ fontSize: 24 }}>{title}</H>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 8 }}>{right}</div>
  </div>
);

// ---------- Bottom tab bar ----------
const TabBar = ({ active, onChange }) => {
  const tabs = [
    { id: 'home',    label: 'Home',     icon: I.home },
    { id: 'workouts', label: 'Workouts', icon: I.dumbbell },
    { id: 'meals',   label: 'Meals',    icon: I.utensils },
    { id: 'coach',   label: 'Coach',    icon: I.message },
    { id: 'you',     label: 'You',      icon: I.user },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(247,241,231,0.92)', backdropFilter: 'blur(14px)',
      borderTop: '1px solid var(--fx-stone-200)',
      padding: '8px 12px 28px',
      display: 'flex', justifyContent: 'space-between',
    }}>
      {tabs.map(t => {
        const isActive = t.id === active;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} style={{
            flex: 1, background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            padding: '8px 0', color: isActive ? 'var(--fx-saffron-400)' : 'var(--fx-stone-500)',
          }}>
            <t.icon size={22} />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.2 }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// ---------- List row ----------
const ListRow = ({ thumb, title, meta, right, onClick }) => (
  <div onClick={onClick} style={{
    display: 'flex', alignItems: 'center', gap: 12,
    padding: '10px 0', cursor: onClick ? 'pointer' : 'default',
  }}>
    {thumb}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontFamily: 'var(--fx-font-display)', fontWeight: 600, fontSize: 15, color: 'var(--fx-fg-1)', lineHeight: 1.2 }}>{title}</div>
      {meta && <div style={{ fontSize: 12, color: 'var(--fx-stone-500)', marginTop: 2 }}>{meta}</div>}
    </div>
    {right || (onClick && <I.chevronRight size={18} color="var(--fx-stone-400)" />)}
  </div>
);

// ---------- Stat block ----------
const Stat = ({ value, unit, label, color = 'var(--fx-saffron-400)' }) => (
  <div>
    <div style={{
      fontFamily: 'var(--fx-font-num)', fontWeight: 500,
      fontSize: 30, lineHeight: 1, letterSpacing: '-0.02em',
      color, fontFeatureSettings: '"tnum"',
    }}>{value}<span style={{ fontSize: 16, marginLeft: 2, color: 'var(--fx-stone-500)' }}>{unit}</span></div>
    <div style={{ fontSize: 11, color: 'var(--fx-stone-500)', marginTop: 4, letterSpacing: 0.4 }}>{label}</div>
  </div>
);

// ---------- Section header ----------
const SectionHeader = ({ children, action }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '20px 20px 10px' }}>
    <H level={3} style={{ fontSize: 18 }}>{children}</H>
    {action && <button style={{ background: 'none', border: 'none', color: 'var(--fx-saffron-400)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>{action}</button>}
  </div>
);

Object.assign(window, {
  FxIcons: I, FxIcon: Icon,
  FxPill: Pill, FxBtn: Btn, FxEyebrow: Eyebrow, FxH: H,
  FxThumb: Thumb, FxAppHeader: AppHeader, FxTabBar: TabBar,
  FxListRow: ListRow, FxStat: Stat, FxSectionHeader: SectionHeader,
});
