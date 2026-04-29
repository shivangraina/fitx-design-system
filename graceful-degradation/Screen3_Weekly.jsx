/* global React, gdEyebrow, gdSerif, Ico */

// ═══════════════════════════════════════════════════════════
// SCREEN 3 — WEEKLY VIEW (adherence intact)
// ═══════════════════════════════════════════════════════════

const DayPill = ({ day, date, status }) => {
  // status: 'full' | 'today' | 'planned' | 'future' | 'rest'
  const palette = {
    full:    { bg: '#11332A', fg: '#F4EDE2', dot: '#3F8A5C', label: 'Full' },
    today:   { bg: '#FFFFFF', fg: '#1A1815', dot: '#E0653A', label: "Today's" },
    planned: { bg: '#FBF7EE', fg: '#6B6359', dot: '#D7CDB9', label: 'Planned' },
    rest:    { bg: '#F4EDE2', fg: '#8A8074', dot: 'transparent', label: 'Rest' },
  }[status];
  return (
    <div style={{
      flex: 1, padding: '10px 6px 12px', borderRadius: 12,
      background: palette.bg, color: palette.fg,
      border: status === 'today' ? '1.5px solid #11332A' : '1px solid rgba(31,24,15,0.06)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      minWidth: 0,
    }}>
      <div style={{ fontSize: 10, letterSpacing: '0.1em', fontWeight: 600, opacity: 0.7 }}>{day}</div>
      <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 18 }}>{date}</div>
      <div style={{ width: 6, height: 6, borderRadius: 99, background: palette.dot, marginTop: 2 }}/>
      <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.85 }}>{palette.label}</div>
    </div>
  );
};

const Screen_Weekly = () => (
  <div style={{ height: '100%', overflow: 'auto', padding: '0 20px 32px' }}>
    {/* header */}
    <div style={{ paddingTop: 4, paddingBottom: 14 }}>
      {gdEyebrow('WEEK 4 OF 12 · STRENGTH FOR LIFE')}
      <div style={{ marginTop: 6 }}>
        {gdSerif('Your week, on target.', { size: 28 })}
      </div>
    </div>

    {/* hero summary */}
    <div style={{
      background: '#11332A', color: '#F4EDE2', borderRadius: 20, padding: 22,
      boxShadow: '0 16px 36px rgba(31,24,15,0.14)', marginBottom: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontFamily: '"Fraunces",serif', fontWeight: 500, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em', color: '#F4EDE2' }}>4</span>
        <span style={{ fontFamily: '"Fraunces",serif', fontSize: 28, color: 'rgba(244,237,226,0.5)' }}>/4</span>
        <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(244,237,226,0.7)', marginLeft: 6 }}>sessions completed</span>
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 10px', borderRadius: 99, background: 'rgba(244,237,226,0.10)' }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: '#3F8A5C' }}/>
          <span style={{ fontSize: 12, fontWeight: 600 }}>2 full sessions</span>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 10px', borderRadius: 99, background: 'rgba(244,237,226,0.10)' }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: '#E0653A' }}/>
          <span style={{ fontSize: 12, fontWeight: 600 }}>2 today's-versions</span>
        </div>
      </div>
      <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(244,237,226,0.14)' }}>
        <div style={{ fontFamily: '"Fraunces",serif', fontStyle: 'italic', fontSize: 17, lineHeight: 1.45, color: '#F4EDE2', textWrap: 'pretty' }}>
          "Adjusted plans aren't shortcuts — they're the same coaching with the volume your body had this week."
        </div>
        <div style={{ fontSize: 11, color: 'rgba(244,237,226,0.6)', marginTop: 8, letterSpacing: '0.04em' }}>— Coach Priya, your dietician</div>
      </div>
    </div>

    {/* week strip */}
    <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
      <DayPill day="MON" date="22" status="full"/>
      <DayPill day="TUE" date="23" status="today"/>
      <DayPill day="WED" date="24" status="full"/>
      <DayPill day="THU" date="25" status="rest"/>
      <DayPill day="FRI" date="26" status="planned"/>
      <DayPill day="SAT" date="27" status="planned"/>
      <DayPill day="SUN" date="28" status="rest"/>
    </div>

    {/* weekly targets — proof bar */}
    <div style={{ background: '#FFFFFF', borderRadius: 16, padding: 18, marginBottom: 14, boxShadow: '0 2px 6px rgba(31,24,15,0.06)' }}>
      {gdEyebrow('WEEKLY TARGETS', '#1F4D3F')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 14 }}>
        {[
          { k: 'Strength sessions', a: 4, t: 4, unit: '', color: '#11332A' },
          { k: 'Working sets',      a: 47, t: 50, unit: '', color: '#1F4D3F' },
          { k: 'Protein average',   a: 64, t: 65, unit: 'g/day', color: '#E0653A' },
          { k: 'Step count',        a: 49, t: 56, unit: 'k', color: '#1F4D3F' },
        ].map((row, i) => {
          const pct = Math.min(100, (row.a / row.t) * 100);
          const onTarget = row.a >= row.t * 0.95;
          return (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: '#1A1815', fontWeight: 500 }}>{row.k}</span>
                <span style={{ fontFamily: '"Fraunces",serif', fontVariantNumeric: 'tabular-nums', fontSize: 14, color: '#1A1815' }}>
                  <span style={{ color: onTarget ? '#1F4D3F' : '#C97B1A', fontWeight: 600 }}>{row.a}{row.unit}</span>
                  <span style={{ color: '#8A8074' }}> / {row.t}{row.unit}</span>
                </span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: '#F4EDE2', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: pct + '%', background: row.color, borderRadius: 3 }}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* swap log */}
    <div style={{ background: '#FFFFFF', borderRadius: 16, padding: 18, boxShadow: '0 2px 6px rgba(31,24,15,0.06)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
        {gdEyebrow("THIS WEEK'S ADJUSTMENTS", '#1F4D3F')}
        <span style={{ fontSize: 11, color: '#8A8074', fontWeight: 600 }}>2</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
        {[
          { d: 'TUE', orig: 'Paneer bhurji + 2 jowar roti', sw: 'Egg bhurji + 1 roti + curd', why: 'Drained, 10 min', who: 'Coach Priya' },
          { d: 'MON', orig: 'Lower-body strength · 6 lifts', sw: 'Lower-body, condensed · 3 lifts', why: '20 min available', who: 'Dr. Anjali R.' },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: i === 0 ? 12 : 0, borderBottom: i === 0 ? '1px solid #E1DAD0' : 'none' }}>
            <div style={{ width: 36, textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 14, color: '#1F4D3F' }}>{s.d}</div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, color: '#8A8074', textDecoration: 'line-through', textDecorationColor: '#C9C0B5' }}>{s.orig}</div>
              <div style={{ fontFamily: '"Fraunces",serif', fontSize: 14, fontWeight: 600, color: '#1A1815', marginTop: 2 }}>{s.sw}</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
                <span style={{ fontSize: 11, color: '#6B6359' }}>{s.why}</span>
                <span style={{ width: 3, height: 3, borderRadius: 99, background: '#C9C0B5' }}/>
                <span style={{ fontSize: 11, color: '#1F4D3F', fontWeight: 600 }}>Reviewed · {s.who}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <p style={{ fontFamily: '"Fraunces",serif', fontStyle: 'italic', fontSize: 13, color: '#6B6359', textAlign: 'center', marginTop: 18, lineHeight: 1.5 }}>
      Your coach plans for life, not against it.
    </p>
  </div>
);

Object.assign(window, { Screen_Weekly });
