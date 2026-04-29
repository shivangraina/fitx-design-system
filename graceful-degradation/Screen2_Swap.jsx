/* global React, gdEyebrow, gdSerif, Ico, GDAttribution */

// ═══════════════════════════════════════════════════════════
// SCREEN 2A — SWAP PROPOSAL (MEAL)
// ═══════════════════════════════════════════════════════════
const SwapHeader = ({ title, sub, onBack }) => (
  <div style={{ padding: '4px 20px 12px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
    <button style={{ width: 40, height: 40, borderRadius: 12, border: '1px solid #E1DAD0', background: '#FBF7EE', display: 'grid', placeItems: 'center', cursor: 'pointer', flexShrink: 0 }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1815" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
    </button>
    <div style={{ flex: 1, minWidth: 0 }}>
      {gdEyebrow(sub)}
      <div style={{ marginTop: 4 }}>{gdSerif(title, { size: 22 })}</div>
    </div>
  </div>
);

// shared "card" wrapper
const PlanCard = ({ tone, label, eyebrowColor, title, time, image, macros, ingredients, dimmed }) => (
  <div style={{
    background: dimmed ? '#FBF7EE' : '#FFFFFF',
    border: dimmed ? '1px solid #E7DEC8' : '1.5px solid ' + tone,
    borderRadius: 16, padding: 16, opacity: dimmed ? 0.62 : 1,
    boxShadow: dimmed ? 'none' : '0 6px 16px rgba(31,24,15,0.08)',
  }}>
    {gdEyebrow(label, eyebrowColor)}
    <div style={{ display: 'flex', gap: 12, marginTop: 8, alignItems: 'center' }}>
      <div style={{ width: 56, height: 56, borderRadius: 12, background: image, flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)' }}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 17, color: '#1A1815', lineHeight: 1.2 }}>{title}</div>
        <div style={{ fontSize: 12, color: '#6B6359', marginTop: 2 }}>{time}</div>
      </div>
    </div>
    {ingredients && (
      <div style={{ fontSize: 13, color: '#6B6359', marginTop: 10, lineHeight: 1.5 }}>{ingredients}</div>
    )}
    <div style={{ display: 'flex', gap: 0, marginTop: 12, paddingTop: 12, borderTop: '1px dashed #E1DAD0' }}>
      {macros.map((m, i) => (
        <div key={i} style={{ flex: 1, textAlign: i === 0 ? 'left' : i === macros.length-1 ? 'right' : 'center' }}>
          <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 500, fontSize: 18, color: m.hl ? '#C04E26' : '#1A1815', letterSpacing: '-0.02em' }}>
            {m.v}<span style={{ fontSize: 11, color: '#8A8074', marginLeft: 1 }}>{m.u}</span>
          </div>
          <div style={{ fontSize: 10, color: '#8A8074', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2, fontWeight: 600 }}>{m.k}</div>
        </div>
      ))}
    </div>
  </div>
);

const Screen_SwapMeal = () => {
  const proteinMacro = { v: '28', u: 'g', k: 'Protein', hl: true };
  return (
    <div style={{ height: '100%', overflow: 'auto', paddingBottom: 24 }}>
      <SwapHeader title="Tonight's version" sub="DINNER · TUESDAY"/>

      <div style={{ padding: '0 20px' }}>
        <p style={{ fontFamily: '"Fraunces",serif', fontSize: 18, lineHeight: 1.4, color: '#1F4D3F', marginTop: 0, marginBottom: 18, fontWeight: 500, textWrap: 'pretty' }}>
          Drained, 10 minutes, eggs in the fridge — here's what your dietician would cook with that.
        </p>

        {/* "the ideal" — original plan, dimmed */}
        <PlanCard
          dimmed
          label="THE PLAN" eyebrowColor="#8A8074"
          title="Paneer bhurji · 2 jowar roti · salad"
          time="20–25 min · stovetop"
          image="linear-gradient(135deg,#E89368,#97391A)"
          macros={[proteinMacro, { v: '38', u: 'g', k: 'Carbs' }, { v: '460', u: '', k: 'kcal' }]}
        />

        {/* swap arrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '14px 4px' }}>
          <div style={{ flex: 1, height: 1, background: '#D7CDB9' }}/>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 99, background: '#F4EDE2', border: '1px solid #D7CDB9' }}>
            <Ico.swap size={14} color="#1F4D3F" sw={1.8}/>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F4D3F' }}>Same target, simpler path</span>
          </div>
          <div style={{ flex: 1, height: 1, background: '#D7CDB9' }}/>
        </div>

        {/* "today's version" — proposed swap, full colour */}
        <PlanCard
          tone="#11332A"
          label="TONIGHT'S VERSION" eyebrowColor="#C04E26"
          title="Egg bhurji · 1 roti · curd"
          time="10 min · one pan"
          image="linear-gradient(135deg,#F6D8C2,#E0653A)"
          ingredients="3 eggs, onion, tomato, green chilli, masala roti, ½ cup curd"
          macros={[proteinMacro, { v: '34', u: 'g', k: 'Carbs' }, { v: '440', u: '', k: 'kcal' }]}
        />

        {/* equivalence panel */}
        <div style={{ marginTop: 14, padding: 14, background: '#FBF7EE', borderRadius: 14, border: '1px solid #E7DEC8' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              ['Protein hits target', '28 g vs 28 g — identical'],
              ['Calories within 5%', '440 vs 460 kcal'],
              ['Weekly fibre on track', 'roti + curd + onion–tomato'],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div style={{ marginTop: 1, color: '#3F8A5C', flexShrink: 0 }}><Ico.check size={16} sw={2}/></div>
                <div style={{ flex: 1, fontSize: 13, lineHeight: 1.45 }}>
                  <span style={{ color: '#1A1815', fontWeight: 600 }}>{k}.</span>
                  <span style={{ color: '#6B6359' }}> {v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <GDAttribution name="Coach Priya" role="MSc Nutrition · Dietician"/>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
          <button style={{ flex: 1, height: 54, borderRadius: 12, background: '#11332A', color: '#F4EDE2', border: 'none', fontFamily: 'Inter,sans-serif', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
            Cook this tonight
          </button>
          <button style={{ height: 54, padding: '0 18px', borderRadius: 12, background: 'transparent', color: '#1F4D3F', border: '1.5px solid #D7CDB9', fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
            Other options
          </button>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════
// SCREEN 2B — SWAP PROPOSAL (WORKOUT)
// ═══════════════════════════════════════════════════════════
const ExerciseRow = ({ n, name, sets, dim }) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(225,218,208,0.6)', opacity: dim ? 0.5 : 1 }}>
    <div style={{ width: 26, height: 26, borderRadius: 8, background: '#F4EDE2', display: 'grid', placeItems: 'center', fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 13, color: '#1F4D3F', flexShrink: 0 }}>{n}</div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 15, color: '#1A1815' }}>{name}</div>
    </div>
    <div style={{ fontSize: 12, color: '#6B6359', fontFamily: '"Fraunces",serif', fontVariantNumeric: 'tabular-nums' }}>{sets}</div>
  </div>
);

const Screen_SwapWorkout = () => (
  <div style={{ height: '100%', overflow: 'auto', paddingBottom: 24 }}>
    <SwapHeader title="Today's version" sub="STRENGTH · WEDNESDAY"/>

    <div style={{ padding: '0 20px' }}>
      <p style={{ fontFamily: '"Fraunces",serif', fontSize: 18, lineHeight: 1.4, color: '#1F4D3F', marginTop: 0, marginBottom: 18, fontWeight: 500, textWrap: 'pretty' }}>
        20 minutes, energy average — a focused strength session that holds the same training stimulus.
      </p>

      {/* original plan, dimmed */}
      <div style={{ background: '#FBF7EE', border: '1px solid #E7DEC8', borderRadius: 16, padding: 16, opacity: 0.62 }}>
        {gdEyebrow('THE PLAN', '#8A8074')}
        <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 17, color: '#1A1815' }}>Lower-body strength</div>
          <div style={{ fontSize: 12, color: '#6B6359' }}>45 min · 6 lifts</div>
        </div>
        <ExerciseRow n="1" name="Goblet squat" sets="4 × 8" dim/>
        <ExerciseRow n="2" name="Romanian deadlift" sets="4 × 10" dim/>
        <ExerciseRow n="3" name="Walking lunge" sets="3 × 12/side" dim/>
        <ExerciseRow n="4" name="Glute bridge" sets="3 × 12" dim/>
        <ExerciseRow n="5" name="Calf raise" sets="3 × 15" dim/>
        <ExerciseRow n="6" name="Banded row" sets="3 × 12" dim/>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '14px 4px' }}>
        <div style={{ flex: 1, height: 1, background: '#D7CDB9' }}/>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 99, background: '#F4EDE2', border: '1px solid #D7CDB9' }}>
          <Ico.swap size={14} color="#1F4D3F" sw={1.8}/>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1F4D3F' }}>Stimulus preserved</span>
        </div>
        <div style={{ flex: 1, height: 1, background: '#D7CDB9' }}/>
      </div>

      {/* swapped version */}
      <div style={{ background: '#FFFFFF', border: '1.5px solid #11332A', borderRadius: 16, padding: 16, boxShadow: '0 6px 16px rgba(31,24,15,0.08)' }}>
        {gdEyebrow("TODAY'S VERSION", '#C04E26')}
        <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontFamily: '"Fraunces",serif', fontWeight: 600, fontSize: 17, color: '#1A1815' }}>Lower-body, condensed</div>
          <div style={{ fontSize: 12, color: '#6B6359' }}>20 min · 3 lifts</div>
        </div>
        <ExerciseRow n="1" name="Goblet squat" sets="4 × 8 (kept)"/>
        <ExerciseRow n="2" name="Glute bridge" sets="4 × 12 (kept)"/>
        <ExerciseRow n="3" name="Banded row" sets="3 × 12 (kept)"/>
      </div>

      {/* equivalence panel */}
      <div style={{ marginTop: 14, padding: 14, background: '#FBF7EE', borderRadius: 14, border: '1px solid #E7DEC8' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            ['Compound lifts kept', 'squat, hinge, pull — the three that matter'],
            ['Working sets within 80%', '11 today vs 14 in the full session'],
            ['Weekly volume on track', 'small Friday top-up will close the gap'],
          ].map(([k, v], i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <div style={{ marginTop: 1, color: '#3F8A5C', flexShrink: 0 }}><Ico.check size={16} sw={2}/></div>
              <div style={{ flex: 1, fontSize: 13, lineHeight: 1.45 }}>
                <span style={{ color: '#1A1815', fontWeight: 600 }}>{k}.</span>
                <span style={{ color: '#6B6359' }}> {v}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        <GDAttribution name="Dr. Anjali R." role="Physiotherapist · 12 yrs"/>
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
        <button style={{ flex: 1, height: 54, borderRadius: 12, background: '#11332A', color: '#F4EDE2', border: 'none', fontFamily: 'Inter,sans-serif', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
          Start this session
        </button>
        <button style={{ height: 54, padding: '0 18px', borderRadius: 12, background: 'transparent', color: '#1F4D3F', border: '1.5px solid #D7CDB9', fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          Other options
        </button>
      </div>
    </div>
  </div>
);

Object.assign(window, { Screen_SwapMeal, Screen_SwapWorkout });
