/* global React */
/* FitX marketing — "Plans that bend with your week" feature section.
   Three small mobile mockups demonstrating the graceful-degradation flow:
   evening check-in → today's-version swap → weekly proof. */

const FxBendNS = {};

// ── tiny phone shell, marketing-scale ────────────────────────
FxBendNS.Phone = function ({ children, scale = 1 }) {
  const w = 320, h = 656;
  return (
    <div style={{
      width: w * scale, height: h * scale,
      transformOrigin: 'top center',
    }}>
      <div style={{
        width: w, height: h, borderRadius: 38,
        background: '#1A1815', padding: 7,
        boxShadow: '0 30px 60px rgba(31,24,15,0.22), 0 0 0 1px rgba(0,0,0,0.5) inset',
        position: 'relative',
        transform: `scale(${scale})`, transformOrigin: 'top left',
      }}>
        <div style={{
          width: '100%', height: '100%', borderRadius: 32, overflow: 'hidden',
          background: '#FBF7EE', position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)',
            width: 100, height: 28, borderRadius: 99, background: '#000', zIndex: 30,
          }}/>
          <div style={{
            position: 'absolute', top: 14, left: 0, right: 0, height: 18, padding: '0 26px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 20,
            fontSize: 12, fontWeight: 600, color: '#1A1815', fontFamily: 'Inter,sans-serif',
          }}>
            <span>9:41</span>
            <span style={{ fontSize: 10, opacity: 0.6 }}>● ● ●</span>
          </div>
          <div style={{ position: 'absolute', inset: 0, paddingTop: 42 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── tiny shared bits ─────────────────────────────────────────
const FxbE = (text, color = '#C04E26') => (
  <div style={{
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 9, fontWeight: 700, letterSpacing: '0.16em',
    textTransform: 'uppercase', color,
  }}>{text}</div>
);

const FxbCheck = ({ size = 12, color = '#3F8A5C' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-4-4"/></svg>
);

// ── M1 — evening check-in (compact) ──────────────────────────
FxBendNS.MockCheckIn = function () {
  return (
    <div style={{ height: '100%', padding: '0 14px 16px', overflow: 'hidden', fontFamily: 'Inter,sans-serif' }}>
      <div style={{ paddingTop: 6, paddingBottom: 10 }}>
        {FxbE('TUESDAY EVENING')}
        <div style={{ fontFamily: '"Fraunces",serif', fontSize: 17, fontWeight: 500, color: '#1A1815', letterSpacing: '-0.015em', marginTop: 4 }}>Hi Anjali —</div>
      </div>

      <div style={{
        background: '#FBF7EE', borderRadius: 10, padding: '8px 10px', border: '1px solid #E7DEC8',
        display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10,
      }}>
        <FxbCheck/>
        <div style={{ flex: 1, fontSize: 10.5, color: '#6B6359' }}>
          Lower-body strength · <span style={{ color: '#1F4D3F', fontWeight: 600 }}>logged AM</span>
        </div>
      </div>

      <div style={{
        background: '#11332A', color: '#F4EDE2', borderRadius: 16, padding: '14px 14px 16px',
        boxShadow: '0 14px 28px rgba(31,24,15,0.16)',
      }}>
        {FxbE("TONIGHT'S DINNER", '#E89368')}
        <div style={{ fontFamily: '"Fraunces",serif', fontSize: 17, fontWeight: 500, lineHeight: 1.2, marginTop: 6, color: '#F4EDE2', letterSpacing: '-0.015em' }}>
          How's the evening going?
        </div>
        <p style={{ fontSize: 11, color: 'rgba(244,237,226,0.72)', lineHeight: 1.5, margin: '8px 0 14px' }}>
          Paneer bhurji + 2 jowar roti is planned. If tonight's a different shape, I have a plan B.
        </p>
        <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
          {[1,0,0].map((on, i) => (
            <div key={i} style={{ flex: 1, height: 2, borderRadius: 2, background: on ? '#E0653A' : 'rgba(244,237,226,0.18)' }}/>
          ))}
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 8, display: 'flex', gap: 6, alignItems: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F4EDE2" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
          How much time can you give dinner?
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          {[
            ['10 min', true],
            ['20 min', false],
            ['30+ min', false],
          ].map(([t, hot], i) => (
            <div key={i} style={{
              flex: 1, height: 36, borderRadius: 9,
              background: hot ? '#E0653A' : 'transparent',
              border: '1.25px solid ' + (hot ? '#E0653A' : 'rgba(244,237,226,0.28)'),
              color: '#F4EDE2', fontSize: 11, fontWeight: 600,
              display: 'grid', placeItems: 'center',
            }}>{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── M2 — swap proposal (compact) ─────────────────────────────
FxBendNS.MockSwap = function () {
  const Card = ({ dim, label, eb, title, time, macros }) => (
    <div style={{
      background: dim ? '#FBF7EE' : '#FFF',
      border: dim ? '1px solid #E7DEC8' : '1.25px solid #11332A',
      borderRadius: 12, padding: 10, opacity: dim ? 0.6 : 1,
    }}>
      {FxbE(label, eb)}
      <div style={{ display: 'flex', gap: 8, marginTop: 6, alignItems: 'center' }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: dim ? 'linear-gradient(135deg,#E89368,#97391A)' : 'linear-gradient(135deg,#F6D8C2,#E0653A)', flexShrink: 0 }}/>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 12.5, color: '#1A1815', lineHeight: 1.2 }}>{title}</div>
          <div style={{ fontSize: 9.5, color: '#6B6359', marginTop: 1 }}>{time}</div>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: 8, paddingTop: 8, borderTop: '1px dashed #E1DAD0', gap: 0 }}>
        {macros.map((m, i) => (
          <div key={i} style={{ flex: 1, textAlign: i===0 ? 'left' : i===macros.length-1 ? 'right' : 'center' }}>
            <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 500, fontSize: 13, color: m.hl ? '#C04E26' : '#1A1815', letterSpacing: '-0.02em' }}>
              {m.v}<span style={{ fontSize: 8, color: '#8A8074' }}>{m.u}</span>
            </div>
            <div style={{ fontSize: 7, color: '#8A8074', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, marginTop: 1 }}>{m.k}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ height: '100%', padding: '0 14px 14px', overflow: 'hidden', fontFamily: 'Inter,sans-serif' }}>
      <div style={{ paddingTop: 4, paddingBottom: 10 }}>
        {FxbE('DINNER · TUESDAY')}
        <div style={{ fontFamily: '"Fraunces",serif', fontSize: 16, fontWeight: 500, color: '#1A1815', marginTop: 3, letterSpacing: '-0.015em' }}>Tonight's version</div>
      </div>
      <p style={{ fontFamily: '"Fraunces",serif', fontSize: 11.5, lineHeight: 1.4, color: '#1F4D3F', margin: '0 0 10px', fontWeight: 500 }}>
        Drained, 10 minutes, eggs in the fridge — here's what your dietician would cook with that.
      </p>

      <Card dim label="THE PLAN" eb="#8A8074"
            title="Paneer bhurji · 2 jowar roti · salad"
            time="20–25 min · roll, roast, plate"
            macros={[{v:'28',u:'g',k:'Protein',hl:true},{v:'38',u:'g',k:'Carbs'},{v:'460',u:'',k:'kcal'}]}/>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0' }}>
        <div style={{ flex: 1, height: 1, background: '#D7CDB9' }}/>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 99, background: '#F4EDE2', border: '1px solid #D7CDB9' }}>
          <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F4D3F' }}>Same target</span>
        </div>
        <div style={{ flex: 1, height: 1, background: '#D7CDB9' }}/>
      </div>

      <Card label="TONIGHT'S VERSION" eb="#C04E26"
            title="Anda curd-rice · jeera tadka"
            time="10 min · one pan, no rolling"
            macros={[{v:'28',u:'g',k:'Protein',hl:true},{v:'42',u:'g',k:'Carbs'},{v:'450',u:'',k:'kcal'}]}/>

      <div style={{ marginTop: 8, padding: 9, background: '#FBF7EE', borderRadius: 10, border: '1px solid #E7DEC8' }}>
        {[
          'Protein hits target — 28 g',
          'Calories within 5%',
          'Pre-approved by Coach Priya',
        ].map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center', padding: '2px 0' }}>
            <FxbCheck size={11}/>
            <div style={{ fontSize: 10, color: '#1A1815', fontWeight: 500 }}>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── M3 — workout check-in + swap (compact) ───────────────────
FxBendNS.MockWorkout = function () {
  return (
    <div style={{ height: '100%', padding: '0 14px 14px', overflow: 'hidden', fontFamily: 'Inter,sans-serif' }}>
      <div style={{ paddingTop: 4, paddingBottom: 8 }}>
        {FxbE('STRENGTH · WEDNESDAY')}
        <div style={{ fontFamily: '"Fraunces",serif', fontSize: 16, fontWeight: 500, color: '#1A1815', marginTop: 3, letterSpacing: '-0.015em' }}>Today's session</div>
      </div>

      {/* state probe — tired + time chips, in one row each */}
      <div style={{ background: '#11332A', color: '#F4EDE2', borderRadius: 12, padding: '10px 11px 12px', marginBottom: 10 }}>
        {FxbE('QUICK CHECK', '#E89368')}
        <div style={{ fontFamily: '"Fraunces",serif', fontSize: 13, fontWeight: 500, marginTop: 5, color: '#F4EDE2', letterSpacing: '-0.01em' }}>Feeling tired or short on time?</div>

        <div style={{ fontSize: 9, fontWeight: 600, marginTop: 8, marginBottom: 4, color: 'rgba(244,237,226,0.75)', letterSpacing: '0.06em' }}>HOW'S YOUR ENERGY?</div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[['Drained', false], ['Average', true], ['Good', false]].map(([t, hot], i) => (
            <div key={i} style={{
              flex: 1, height: 26, borderRadius: 7,
              background: hot ? '#E0653A' : 'transparent',
              border: '1.25px solid ' + (hot ? '#E0653A' : 'rgba(244,237,226,0.28)'),
              color: '#F4EDE2', fontSize: 10, fontWeight: 600,
              display: 'grid', placeItems: 'center',
            }}>{t}</div>
          ))}
        </div>

        <div style={{ fontSize: 9, fontWeight: 600, marginTop: 9, marginBottom: 4, color: 'rgba(244,237,226,0.75)', letterSpacing: '0.06em' }}>HOW MUCH TIME?</div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[['10 min', false], ['20 min', true], ['45 min', false]].map(([t, hot], i) => (
            <div key={i} style={{
              flex: 1, height: 26, borderRadius: 7,
              background: hot ? '#E0653A' : 'transparent',
              border: '1.25px solid ' + (hot ? '#E0653A' : 'rgba(244,237,226,0.28)'),
              color: '#F4EDE2', fontSize: 10, fontWeight: 600,
              display: 'grid', placeItems: 'center',
            }}>{t}</div>
          ))}
        </div>
      </div>

      {/* the swap card — original dimmed, today's version below */}
      <div style={{ background: '#FBF7EE', border: '1px solid #E7DEC8', borderRadius: 10, padding: 9, opacity: 0.62 }}>
        {FxbE('THE PLAN', '#8A8074')}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 4 }}>
          <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 12, color: '#1A1815' }}>Lower-body · 6 lifts</div>
          <div style={{ fontSize: 9, color: '#6B6359' }}>45 min</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '6px 0' }}>
        <div style={{ flex: 1, height: 1, background: '#D7CDB9' }}/>
        <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F4D3F' }}>Do this instead</span>
        <div style={{ flex: 1, height: 1, background: '#D7CDB9' }}/>
      </div>

      <div style={{ background: '#FFF', border: '1.25px solid #11332A', borderRadius: 10, padding: 9 }}>
        {FxbE("TODAY'S VERSION", '#C04E26')}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 4 }}>
          <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 12, color: '#1A1815' }}>Lower-body, condensed</div>
          <div style={{ fontSize: 9, color: '#6B6359' }}>20 min · 3 lifts</div>
        </div>
        <div style={{ marginTop: 6, paddingTop: 6, borderTop: '1px dashed #E1DAD0' }}>
          {[
            ['1', 'Goblet squat', '4 × 8'],
            ['2', 'Glute bridge', '4 × 12'],
            ['3', 'Banded row', '3 × 12'],
          ].map(([n, name, sets], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 0' }}>
              <div style={{ width: 16, height: 16, borderRadius: 5, background: '#F4EDE2', display: 'grid', placeItems: 'center', fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 9, color: '#1F4D3F' }}>{n}</div>
              <div style={{ flex: 1, fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 11, color: '#1A1815' }}>{name}</div>
              <div style={{ fontSize: 9, color: '#6B6359', fontVariantNumeric: 'tabular-nums' }}>{sets}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
        <FxbCheck size={11}/>
        <div style={{ fontSize: 9.5, color: '#6B6359' }}>
          <span style={{ color: '#1A1815', fontWeight: 600 }}>Stimulus preserved.</span> Squat, hinge, pull — kept.
        </div>
      </div>
    </div>
  );
};

// (kept) ── M3-alt — weekly view, retained but no longer used in section ─
FxBendNS.MockWeekly = function () {
  const Pill = ({ d, n, status }) => {
    const p = {
      full:   { bg: '#11332A', fg: '#F4EDE2', dot: '#3F8A5C', l: 'Full' },
      today:  { bg: '#FFF',    fg: '#1A1815', dot: '#E0653A', l: "Today's" },
      plan:   { bg: '#FBF7EE', fg: '#6B6359', dot: '#D7CDB9', l: 'Planned' },
      rest:   { bg: '#F4EDE2', fg: '#8A8074', dot: 'transparent', l: 'Rest' },
    }[status];
    return (
      <div style={{
        flex: 1, padding: '6px 2px 7px', borderRadius: 8,
        background: p.bg, color: p.fg,
        border: status === 'today' ? '1.25px solid #11332A' : '1px solid rgba(31,24,15,0.06)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, minWidth: 0,
      }}>
        <div style={{ fontSize: 7, letterSpacing: '0.1em', fontWeight: 600, opacity: 0.7 }}>{d}</div>
        <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 12 }}>{n}</div>
        <div style={{ width: 4, height: 4, borderRadius: 99, background: p.dot, marginTop: 1 }}/>
      </div>
    );
  };

  return (
    <div style={{ height: '100%', padding: '0 14px 14px', overflow: 'hidden', fontFamily: 'Inter,sans-serif' }}>
      <div style={{ paddingTop: 2, paddingBottom: 8 }}>
        {FxbE('WEEK 4 OF 12')}
        <div style={{ fontFamily: '"Fraunces",serif', fontSize: 17, fontWeight: 500, color: '#1A1815', marginTop: 3, letterSpacing: '-0.015em' }}>Your week, on target.</div>
      </div>

      <div style={{
        background: '#11332A', color: '#F4EDE2', borderRadius: 14, padding: '12px 12px 14px',
        boxShadow: '0 14px 28px rgba(31,24,15,0.16)',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontFamily: '"Fraunces",serif', fontWeight: 500, fontSize: 38, lineHeight: 1, letterSpacing: '-0.03em' }}>4</span>
          <span style={{ fontFamily: '"Fraunces",serif', fontSize: 18, color: 'rgba(244,237,226,0.5)' }}>/4</span>
          <span style={{ fontSize: 10, color: 'rgba(244,237,226,0.7)', marginLeft: 4 }}>sessions</span>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 99, background: 'rgba(244,237,226,0.10)' }}>
            <span style={{ width: 4, height: 4, borderRadius: 99, background: '#3F8A5C' }}/>
            <span style={{ fontSize: 9, fontWeight: 600 }}>2 full</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 99, background: 'rgba(244,237,226,0.10)' }}>
            <span style={{ width: 4, height: 4, borderRadius: 99, background: '#E0653A' }}/>
            <span style={{ fontSize: 9, fontWeight: 600 }}>2 today's-versions</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 3, marginTop: 10 }}>
        <Pill d="MON" n="22" status="full"/>
        <Pill d="TUE" n="23" status="today"/>
        <Pill d="WED" n="24" status="full"/>
        <Pill d="THU" n="25" status="rest"/>
        <Pill d="FRI" n="26" status="plan"/>
        <Pill d="SAT" n="27" status="plan"/>
        <Pill d="SUN" n="28" status="rest"/>
      </div>

      <div style={{ background: '#FFF', borderRadius: 10, padding: 10, marginTop: 10, boxShadow: '0 1px 4px rgba(31,24,15,0.06)' }}>
        {FxbE('WEEKLY TARGETS', '#1F4D3F')}
        {[
          { k: 'Strength sessions', v: '4 / 4',    pct: 100, c: '#11332A' },
          { k: 'Working sets',      v: '47 / 50',  pct: 94,  c: '#1F4D3F' },
          { k: 'Protein avg',       v: '64 / 65g', pct: 98,  c: '#E0653A' },
        ].map((row, i) => (
          <div key={i} style={{ marginTop: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <span style={{ fontSize: 10, color: '#1A1815', fontWeight: 500 }}>{row.k}</span>
              <span style={{ fontFamily: '"Fraunces",serif', fontVariantNumeric: 'tabular-nums', fontSize: 10.5, color: '#1F4D3F', fontWeight: 600 }}>{row.v}</span>
            </div>
            <div style={{ height: 4, borderRadius: 2, background: '#F4EDE2', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: row.pct + '%', background: row.c, borderRadius: 2 }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── The marketing section ───────────────────────────────────
const FxBend = () => {
  const steps = [
    {
      n: '01',
      eb: 'Two-tap check-in',
      t: 'Your evening, in your own words.',
      d: 'Tired night? Short on time? Tell us in two taps. We never assume your week looks the same as last week.',
      mock: <FxBendNS.MockCheckIn/>,
    },
    {
      n: '02',
      eb: "Today's version of the plan",
      t: 'A swap that hits the same target.',
      d: 'Original recipe at top, dimmed. Today\'s version below — same protein, same calories, half the time. Pre-approved by your dietician.',
      mock: <FxBendNS.MockSwap/>,
    },
    {
      n: '03',
      eb: 'Workout, calibrated',
      t: 'Tired body? Do this instead.',
      d: 'Same check-in for the gym. Average energy, 20 minutes — keep the three lifts that matter, drop the rest. Volume protected.',
      mock: <FxBendNS.MockWorkout/>,
    },
  ];

  return (
    <section id="bend" style={{ padding: '120px 0 96px', background: 'var(--fx-cream-100)', position: 'relative', overflow: 'hidden' }}>
      {/* warm radial wash, top right */}
      <div style={{ position: 'absolute', top: -200, right: -160, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,147,104,0.18), transparent 70%)', pointerEvents: 'none' }}/>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 72 }}>
          <div>
            <span style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fx-saffron-400)', fontWeight: 700 }}>Plans that bend with your week</span>
            <h2 className="fx-h2" style={{ marginTop: 14, color: 'var(--fx-forest-600)' }}>
              Life happens. <em style={{ fontStyle: 'italic', color: 'var(--fx-saffron-400)' }}>So does your plan.</em>
            </h2>
          </div>
          <p className="fx-lead" style={{ color: 'var(--fx-stone-600)', maxWidth: 480 }}>
            Most apps quietly mark you "off-track" the moment you skip a workout or order in. FitX does the opposite — it asks how your evening's going, and offers a today's-version that keeps your week on target.
          </p>
        </div>

        {/* three steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
              {/* phone */}
              <div style={{
                background: 'linear-gradient(165deg, #F4EDE2 0%, #E7DEC8 100%)',
                borderRadius: 24, padding: '36px 0 0',
                display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
                height: 480, overflow: 'hidden',
                boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset, 0 12px 32px rgba(31,24,15,0.06)',
                marginBottom: 28,
              }}>
                <FxBendNS.Phone scale={1}>{s.mock}</FxBendNS.Phone>
              </div>

              {/* number + body */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                <span style={{ fontFamily: 'var(--fx-font-num)', fontWeight: 500, fontSize: 28, color: 'var(--fx-saffron-300)', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.n}</span>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fx-saffron-400)', fontWeight: 700 }}>{s.eb}</span>
              </div>
              <h3 className="fx-h4" style={{ fontSize: 22, color: 'var(--fx-forest-600)', marginTop: 4, marginBottom: 10, textWrap: 'balance' }}>{s.t}</h3>
              <p style={{ fontSize: 15, color: 'var(--fx-stone-600)', margin: 0, lineHeight: 1.6, textWrap: 'pretty' }}>{s.d}</p>
            </div>
          ))}
        </div>

        {/* attribution row */}
        <div style={{
          marginTop: 72, padding: '24px 32px', borderRadius: 16,
          background: '#FFF', border: '1px solid var(--fx-stone-200)',
          display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
          boxShadow: '0 2px 6px rgba(31,24,15,0.04)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 99, background: 'var(--fx-forest-500)', display: 'grid', placeItems: 'center', color: '#fff' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--fx-font-display)', fontWeight: 600, fontSize: 15, color: 'var(--fx-forest-600)' }}>Every swap is pre-approved.</div>
              <div style={{ fontSize: 13, color: 'var(--fx-stone-600)' }}>Your dietician and physiotherapist build the alternates with you, not for you.</div>
            </div>
          </div>
          <div style={{ flex: 1 }}/>
          <a href="#how" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--fx-forest-600)', textDecoration: 'none' }}>
            How the review works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { FxBend });
