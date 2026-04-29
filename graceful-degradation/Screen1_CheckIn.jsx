/* global React, GDPhone, GDChip, GDAttribution, gdEyebrow, gdSerif, Ico */

const { useState: useStateA } = React;

// ═══════════════════════════════════════════════════════════
// SCREEN 1 — CHECK-IN CARD (on home screen, evening)
// ═══════════════════════════════════════════════════════════
const Screen_CheckIn = () => {
  const [step, setStep] = useStateA(0); // 0=time, 1=energy, 2=fridge
  const [time, setTime] = useStateA(null);
  const [energy, setEnergy] = useStateA(null);
  const [protein, setProtein] = useStateA(null);

  return (
    <div style={{ height: '100%', overflow: 'auto', padding: '0 20px 32px' }}>
      {/* greeting strip */}
      <div style={{ paddingTop: 8, paddingBottom: 14 }}>
        {gdEyebrow('TUESDAY EVENING · WEEK 4')}
        <div style={{ marginTop: 6 }}>
          {gdSerif('Hi Anjali —', { size: 24, color: '#1A1815' })}
        </div>
      </div>

      {/* completed today preview, dimmed */}
      <div style={{
        background: '#FBF7EE', borderRadius: 14, padding: 14, border: '1px solid #E7DEC8',
        display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14,
      }}>
        <Ico.check size={18} color="#3F8A5C" sw={2}/>
        <div style={{ flex: 1, fontSize: 13, color: '#6B6359' }}>
          Lower-body strength · 35 min · <span style={{ color: '#1F4D3F', fontWeight: 600 }}>logged this morning</span>
        </div>
      </div>

      {/* the check-in card */}
      <div style={{
        background: '#11332A', color: '#F4EDE2', borderRadius: 22,
        padding: '24px 22px 22px', boxShadow: '0 16px 36px rgba(31,24,15,0.14)',
      }}>
        {gdEyebrow("TONIGHT'S DINNER", '#E89368')}
        <div style={{ marginTop: 10 }}>
          {gdSerif("How's the evening going?", { size: 26, color: '#F4EDE2', weight: 500 })}
        </div>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(244,237,226,0.72)', lineHeight: 1.55, marginTop: 10, marginBottom: 22 }}>
          Your dietician has paneer bhurji + 2 jowar roti planned. If tonight's a different shape, I have an alternative ready.
        </p>

        {/* progressive step indicator */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              flex: 1, height: 3, borderRadius: 2,
              background: i <= step ? '#E0653A' : 'rgba(244,237,226,0.18)',
            }}/>
          ))}
        </div>

        {/* question */}
        {step === 0 && (
          <>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
              <Ico.clock size={18} color="#F4EDE2" sw={1.6}/>
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600 }}>How much time can you give dinner?</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['10 min', '20 min', '30+ min'].map(t => (
                <GDChip key={t} active={time===t} onClick={() => { setTime(t); setStep(1); }}>{t}</GDChip>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
              <Ico.battery size={18} color="#F4EDE2" sw={1.6}/>
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600 }}>And how's your energy right now?</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['Drained', 'Average', 'Good'].map(t => (
                <GDChip key={t} active={energy===t} onClick={() => { setEnergy(t); setStep(2); }}>{t}</GDChip>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
              <Ico.fridge size={18} color="#F4EDE2" sw={1.6}/>
              <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600 }}>What protein is at hand? <span style={{ color: 'rgba(244,237,226,0.5)', fontWeight: 400 }}>optional</span></span>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Eggs', 'Curd', 'Dal', 'Paneer', 'Skip'].map(t => (
                <button key={t} onClick={() => setProtein(t)} style={{
                  padding: '10px 16px', borderRadius: 99,
                  border: '1.5px solid ' + (protein===t ? '#E0653A' : 'rgba(244,237,226,0.28)'),
                  background: protein===t ? '#E0653A' : 'transparent',
                  color: '#F4EDE2', fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600, cursor: 'pointer',
                }}>{t}</button>
              ))}
            </div>
            <button style={{
              marginTop: 22, width: '100%', height: 54, borderRadius: 12,
              background: '#E0653A', color: '#FFF', border: 'none',
              fontFamily: 'Inter,sans-serif', fontSize: 16, fontWeight: 600, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>See tonight's plan <Ico.arrow size={18} color="#FFF" sw={2}/></button>
          </>
        )}
      </div>

      {/* footnote */}
      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#8A8074', marginTop: 14, textAlign: 'center', lineHeight: 1.5 }}>
        Your coach has a plan B for evenings that go differently than expected.
      </p>
    </div>
  );
};

Object.assign(window, { Screen_CheckIn });
