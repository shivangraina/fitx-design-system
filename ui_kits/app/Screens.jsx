/* global React, FxIcons, FxPill, FxBtn, FxH, FxEyebrow, FxThumb, FxAppHeader, FxListRow, FxStat, FxSectionHeader */

const { useState } = React;

// ---------- HOME ----------
const HomeScreen = ({ onOpenWorkout, onOpenMeal, goto }) => (
  <div style={{ paddingBottom: 110 }}>
    <FxAppHeader
      subtitle="Tuesday · Week 4 of 12"
      title="Hi, Anjali"
      right={[
        <button key="b" style={{ width: 40, height: 40, borderRadius: 12, border: '1px solid var(--fx-stone-200)', background: 'var(--fx-white)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
          <FxIcons.bell size={18} />
        </button>
      ]}
    />

    {/* hero card: today's plan */}
    <div style={{ margin: '8px 20px 0', background: 'var(--fx-forest-500)', color: 'var(--fx-cream-100)', borderRadius: 20, padding: 20, boxShadow: 'var(--fx-shadow-md)' }}>
      <FxEyebrow color="var(--fx-cream-300)">Today's plan</FxEyebrow>
      <FxH level={2} color="var(--fx-cream-100)" style={{ fontSize: 26, marginTop: 8 }}>Lower body strength + dal-rice lunch</FxH>
      <div style={{ display: 'flex', gap: 18, marginTop: 18, alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--fx-cream-300)', fontSize: 13 }}><FxIcons.clock size={16} /> 35 min</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--fx-cream-300)', fontSize: 13 }}><FxIcons.flame size={16} /> 240 kcal</div>
      </div>
      <div style={{ marginTop: 18 }}>
        <FxBtn variant="primary" full leadingIcon={<FxIcons.play size={16} />} onClick={onOpenWorkout}>Start workout</FxBtn>
      </div>
    </div>

    {/* stats row */}
    <div style={{ margin: '20px 20px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
      <div className="fx-card" style={{ padding: 14, borderRadius: 12, background: '#fff', boxShadow: 'var(--fx-shadow-sm)' }}><FxStat value="12" unit="d" label="STREAK" /></div>
      <div className="fx-card" style={{ padding: 14, borderRadius: 12, background: '#fff', boxShadow: 'var(--fx-shadow-sm)' }}><FxStat value="62" unit="g" label="PROTEIN TODAY" color="var(--fx-forest-500)" /></div>
      <div className="fx-card" style={{ padding: 14, borderRadius: 12, background: '#fff', boxShadow: 'var(--fx-shadow-sm)' }}><FxStat value="4" unit="/5" label="WORKOUTS WK" color="var(--fx-saffron-400)" /></div>
    </div>

    {/* expert review banner */}
    <div style={{ margin: '20px 20px 0', display: 'flex', gap: 12, alignItems: 'center', padding: 14, borderRadius: 12, background: 'var(--fx-success-bg)', border: '1px solid #C4D9CC' }}>
      <div style={{ width: 40, height: 40, borderRadius: 99, background: 'var(--fx-success)', display: 'grid', placeItems: 'center' }}>
        <FxIcons.shield size={20} color="#fff" />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'var(--fx-font-display)', fontWeight: 600, fontSize: 14, color: 'var(--fx-forest-600)' }}>Plan reviewed by Dr. Anjali</div>
        <div style={{ fontSize: 12, color: 'var(--fx-stone-600)' }}>Physiotherapist · 2 swaps suggested for thyroid</div>
      </div>
      <FxIcons.chevronRight size={18} color="var(--fx-stone-500)" />
    </div>

    <FxSectionHeader action="See all">This week</FxSectionHeader>
    <div style={{ margin: '0 20px', background: '#fff', borderRadius: 12, padding: '4px 16px', boxShadow: 'var(--fx-shadow-sm)' }}>
      <FxListRow thumb={<FxThumb tone="forest">L</FxThumb>} title="Lower body strength" meta="Today · 35 min · home" onClick={onOpenWorkout} />
      <div style={{ height: 1, background: 'var(--fx-stone-200)' }} />
      <FxListRow thumb={<FxThumb tone="cream">U</FxThumb>} title="Upper body push" meta="Wed · 30 min · 1 dumbbell" onClick={() => {}} />
      <div style={{ height: 1, background: 'var(--fx-stone-200)' }} />
      <FxListRow thumb={<FxThumb tone="sage">M</FxThumb>} title="Mobility + core" meta="Thu · 20 min · mat" onClick={() => {}} />
    </div>

    <FxSectionHeader action="Open meals">Today's meals</FxSectionHeader>
    <div style={{ margin: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {[
        { t: 'Poha + sprouts', m: '14g protein · breakfast', tone: 'sun' },
        { t: 'Dal-rice + sabzi', m: '24g protein · lunch', tone: 'saffron' },
        { t: 'Roasted chana', m: '8g protein · snack', tone: 'cream' },
        { t: 'Paneer bhurji + 2 roti', m: '28g protein · dinner', tone: 'sage' },
      ].map((m, i) => (
        <div key={i} onClick={onOpenMeal} style={{ background: '#fff', borderRadius: 12, padding: 12, cursor: 'pointer', boxShadow: 'var(--fx-shadow-sm)' }}>
          <FxThumb tone={m.tone} size={64} radius={10}>{m.t[0]}</FxThumb>
          <div style={{ fontFamily: 'var(--fx-font-display)', fontWeight: 600, fontSize: 14, marginTop: 10 }}>{m.t}</div>
          <div style={{ fontSize: 11, color: 'var(--fx-stone-500)', marginTop: 2 }}>{m.m}</div>
        </div>
      ))}
    </div>
  </div>
);

// ---------- WORKOUT DETAIL ----------
const WorkoutScreen = ({ onBack }) => (
  <div style={{ paddingBottom: 110 }}>
    <FxAppHeader subtitle="Today · 35 min" title="Lower body strength" onBack={onBack} />

    <div style={{ margin: '0 20px', height: 200, borderRadius: 16, background: 'linear-gradient(135deg, #4F8870, #11332A)', display: 'grid', placeItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(232,147,104,0.35), transparent 60%)' }} />
      <button style={{ width: 64, height: 64, borderRadius: 99, background: '#fff', display: 'grid', placeItems: 'center', border: 'none', cursor: 'pointer', boxShadow: 'var(--fx-shadow-md)', position: 'relative' }}>
        <FxIcons.play size={26} color="var(--fx-forest-500)" />
      </button>
      <FxPill tone="saffron" >Calibrated for age 42</FxPill>
    </div>

    <div style={{ display: 'flex', gap: 8, margin: '14px 20px 0', flexWrap: 'wrap' }}>
      <FxPill tone="forest">Strength</FxPill>
      <FxPill tone="cream">Home · no equipment</FxPill>
      <FxPill tone="success">Knee-safe</FxPill>
    </div>

    <FxSectionHeader>Exercises · 6</FxSectionHeader>
    <div style={{ margin: '0 20px', background: '#fff', borderRadius: 12, padding: '4px 16px', boxShadow: 'var(--fx-shadow-sm)' }}>
      {[
        ['Bodyweight squat', '3 × 12', 'forest'],
        ['Glute bridge', '3 × 15', 'sage'],
        ['Reverse lunge', '3 × 10/side', 'saffron'],
        ['Wall sit', '3 × 30s', 'cream'],
        ['Calf raise', '3 × 20', 'sun'],
        ['Dead bug', '3 × 12', 'forest'],
      ].map(([t, m, tone], i) => (
        <React.Fragment key={i}>
          {i > 0 && <div style={{ height: 1, background: 'var(--fx-stone-200)' }} />}
          <FxListRow thumb={<FxThumb tone={tone} size={44} radius={10}>{i+1}</FxThumb>} title={t} meta={m} right={<FxIcons.chevronRight size={18} color="var(--fx-stone-400)" />} />
        </React.Fragment>
      ))}
    </div>

    <div style={{ margin: '20px 20px 0' }}>
      <FxBtn variant="primary" size="lg" full leadingIcon={<FxIcons.play size={18} />}>Start workout</FxBtn>
    </div>
  </div>
);

// ---------- MEAL PLAN ----------
const MealsScreen = ({ onBack }) => (
  <div style={{ paddingBottom: 110 }}>
    <FxAppHeader subtitle="Tuesday · 1,640 kcal target" title="Today's meals" onBack={onBack} />

    {/* macro ring strip */}
    <div style={{ margin: '0 20px', padding: 16, borderRadius: 16, background: '#fff', boxShadow: 'var(--fx-shadow-sm)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
      {[
        ['Protein', 62, 75, 'var(--fx-saffron-400)'],
        ['Carbs',   180, 210, 'var(--fx-forest-500)'],
        ['Fat',     38, 55,  'var(--fx-info)'],
      ].map(([k, v, max, c], i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <svg width="60" height="60" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.5" stroke="var(--fx-stone-200)" strokeWidth="3" fill="none"/>
            <circle cx="18" cy="18" r="15.5" stroke={c} strokeWidth="3" fill="none"
              strokeDasharray={`${(v/max)*97.4} 97.4`} strokeLinecap="round" transform="rotate(-90 18 18)"/>
          </svg>
          <div style={{ fontFamily: 'var(--fx-font-num)', fontWeight: 500, fontSize: 16, marginTop: 6, color: 'var(--fx-fg-1)' }}>{v}<span style={{ color: 'var(--fx-stone-500)', fontSize: 12 }}>g</span></div>
          <div style={{ fontSize: 10, color: 'var(--fx-stone-500)', letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>{k}</div>
        </div>
      ))}
    </div>

    {[
      { t: 'Breakfast', i: 'Poha with sprouted moong + peanuts', macros: '14g P · 42g C · 12g F · 320 kcal', time: '8:30 AM', tone: 'sun' },
      { t: 'Lunch', i: 'Toor dal · jeera rice · lauki sabzi · curd', macros: '24g P · 78g C · 14g F · 540 kcal', time: '1:00 PM', tone: 'saffron' },
      { t: 'Snack', i: 'Roasted chana + masala chai (no sugar)', macros: '8g P · 14g C · 4g F · 130 kcal', time: '5:00 PM', tone: 'cream' },
      { t: 'Dinner', i: 'Paneer bhurji · 2 jowar roti · salad', macros: '28g P · 38g C · 16g F · 460 kcal', time: '8:00 PM', tone: 'sage' },
    ].map((m, i) => (
      <div key={i} style={{ margin: '14px 20px 0', display: 'flex', gap: 12, padding: 14, background: '#fff', borderRadius: 14, boxShadow: 'var(--fx-shadow-sm)' }}>
        <FxThumb tone={m.tone} size={64} radius={12}>{m.i[0]}</FxThumb>
        <div style={{ flex: 1, minWidth: 0 }}>
          <FxEyebrow>{m.t} · {m.time}</FxEyebrow>
          <div style={{ fontFamily: 'var(--fx-font-display)', fontWeight: 600, fontSize: 15, marginTop: 4, color: 'var(--fx-fg-1)' }}>{m.i}</div>
          <div style={{ fontSize: 11, color: 'var(--fx-stone-500)', marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{m.macros}</div>
        </div>
        <FxIcons.check size={20} color="var(--fx-success)" />
      </div>
    ))}
  </div>
);

// ---------- COACH CHAT ----------
const CoachScreen = () => {
  const [messages, setMessages] = useState([
    { from: 'coach', t: 'Good morning Anjali! 🌞 How did yesterday\'s workout feel? Any soreness?' },
    { from: 'me', t: 'Felt good actually. A bit sore in glutes but nothing unusual.' },
    { from: 'coach', t: 'Perfect — that\'s exactly the muscle we\'re targeting. Keep that intensity. Quick check: did you hit your 65g protein yesterday?' },
    { from: 'me', t: 'I think 60-ish. Hard to fit it in.' },
    { from: 'coach', t: 'Got it. I\'ve added a paneer-tikka snack at 5 PM today. Same calories, +12g protein. Open the Meals tab when you can.' },
  ]);
  const [draft, setDraft] = useState('');
  const send = () => {
    if (!draft.trim()) return;
    setMessages([...messages, { from: 'me', t: draft }]);
    setDraft('');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingBottom: 90 }}>
      <FxAppHeader
        subtitle="Online · usually replies in 1h"
        title="Coach Priya"
        right={[
          <FxThumb key="c" tone="forest" size={40} radius={99}>P</FxThumb>
        ]}
      />
      <div style={{ flex: 1, padding: '8px 20px 16px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'auto' }}>
        <div style={{ alignSelf: 'center', fontSize: 11, color: 'var(--fx-stone-500)', padding: '4px 12px', background: 'var(--fx-cream-100)', borderRadius: 99 }}>Today, 8:42 AM</div>
        {messages.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.from === 'me' ? 'flex-end' : 'flex-start',
            maxWidth: '78%',
            background: m.from === 'me' ? 'var(--fx-saffron-400)' : '#fff',
            color: m.from === 'me' ? '#fff' : 'var(--fx-fg-1)',
            padding: '10px 14px',
            borderRadius: 16,
            borderBottomRightRadius: m.from === 'me' ? 4 : 16,
            borderBottomLeftRadius: m.from === 'me' ? 16 : 4,
            fontSize: 14, lineHeight: 1.45,
            boxShadow: m.from === 'me' ? 'none' : 'var(--fx-shadow-xs)',
          }}>{m.t}</div>
        ))}
      </div>
      <div style={{ padding: '8px 16px 12px', display: 'flex', gap: 8, borderTop: '1px solid var(--fx-stone-200)', background: 'var(--fx-cream-100)' }}>
        <input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
               placeholder="Message your coach…"
               style={{ flex: 1, height: 44, borderRadius: 22, border: '1px solid var(--fx-stone-300)', padding: '0 16px', fontSize: 14, background: '#fff', fontFamily: 'var(--fx-font-body)' }}/>
        <button onClick={send} style={{ width: 44, height: 44, borderRadius: 99, background: 'var(--fx-saffron-400)', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
          <FxIcons.send size={18} color="#fff" />
        </button>
      </div>
    </div>
  );
};

// ---------- PROFILE / YOU ----------
const YouScreen = () => (
  <div style={{ paddingBottom: 110 }}>
    <FxAppHeader title="You" right={[
      <button key="s" style={{ width: 40, height: 40, borderRadius: 12, border: '1px solid var(--fx-stone-200)', background: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
        <FxIcons.settings size={18} />
      </button>
    ]}/>

    <div style={{ margin: '0 20px', padding: 20, background: '#fff', borderRadius: 16, boxShadow: 'var(--fx-shadow-sm)', display: 'flex', gap: 14, alignItems: 'center' }}>
      <FxThumb tone="saffron" size={64} radius={99}>A</FxThumb>
      <div style={{ flex: 1 }}>
        <FxH level={3}>Anjali Sharma</FxH>
        <div style={{ fontSize: 12, color: 'var(--fx-stone-500)', marginTop: 2 }}>42 · vegetarian · Pune</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
          <FxPill tone="forest">Maintainer</FxPill>
          <FxPill tone="info">Thyroid</FxPill>
        </div>
      </div>
    </div>

    <div style={{ margin: '14px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      <div style={{ padding: 14, background: 'var(--fx-forest-500)', color: 'var(--fx-cream-100)', borderRadius: 12 }}>
        <FxEyebrow color="var(--fx-cream-300)">Muscle mass</FxEyebrow>
        <div style={{ fontFamily: 'var(--fx-font-num)', fontSize: 28, fontWeight: 500, marginTop: 6, color: 'var(--fx-saffron-300)' }}>+1.2<span style={{ fontSize: 14, color: 'var(--fx-cream-300)' }}> kg</span></div>
        <div style={{ fontSize: 11, color: 'var(--fx-cream-300)', marginTop: 4 }}>since Jan · DEXA</div>
      </div>
      <div style={{ padding: 14, background: '#fff', borderRadius: 12, boxShadow: 'var(--fx-shadow-sm)' }}>
        <FxEyebrow>Weight</FxEyebrow>
        <div style={{ fontFamily: 'var(--fx-font-num)', fontSize: 28, fontWeight: 500, marginTop: 6, color: 'var(--fx-fg-1)' }}>64.2<span style={{ fontSize: 14, color: 'var(--fx-stone-500)' }}> kg</span></div>
        <div style={{ fontSize: 11, color: 'var(--fx-success)', marginTop: 4 }}>−3.4 kg in 12 weeks</div>
      </div>
    </div>

    <FxSectionHeader>Your team</FxSectionHeader>
    <div style={{ margin: '0 20px', background: '#fff', borderRadius: 12, padding: '4px 16px', boxShadow: 'var(--fx-shadow-sm)' }}>
      <FxListRow thumb={<FxThumb tone="forest" size={44} radius={99}>P</FxThumb>} title="Coach Priya" meta="Dietician · MSc Nutrition" onClick={() => {}} />
      <div style={{ height: 1, background: 'var(--fx-stone-200)' }} />
      <FxListRow thumb={<FxThumb tone="saffron" size={44} radius={99}>R</FxThumb>} title="Dr. Anjali R." meta="Physiotherapist · 12 yrs" onClick={() => {}} />
    </div>

    <FxSectionHeader>Programs</FxSectionHeader>
    <div style={{ margin: '0 20px', background: '#fff', borderRadius: 12, padding: '4px 16px', boxShadow: 'var(--fx-shadow-sm)' }}>
      <FxListRow thumb={<FxIcons.trending size={22} color="var(--fx-saffron-400)"/>} title="Strength for Life" meta="12-week · week 4 of 12" onClick={() => {}} />
      <div style={{ height: 1, background: 'var(--fx-stone-200)' }} />
      <FxListRow thumb={<FxIcons.shield size={22} color="var(--fx-forest-500)"/>} title="Thyroid Reset" meta="Add-on · ₹999" onClick={() => {}} />
    </div>
  </div>
);

Object.assign(window, { HomeScreen, WorkoutScreen, MealsScreen, CoachScreen, YouScreen });
