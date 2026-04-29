/* global React */

const I = {
  arrow: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  shield: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
  spark: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M9.94 14.34a2 2 0 0 0-1.41-1.41L2 11l6.53-1.94a2 2 0 0 0 1.41-1.41L12 1l1.94 6.53a2 2 0 0 0 1.41 1.41L22 11l-6.53 1.93a2 2 0 0 0-1.41 1.41L12 21z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>,
  user: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  flame: (p) => <svg width={p.size||20} height={p.size||20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  whatsapp: (p) => <svg width={p.size||18} height={p.size||18} viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.5c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.7.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3.1-.2-.3C4 14.9 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.2-8.5 8.2z"/></svg>,
  check: (p) => <svg width={p.size||16} height={p.size||16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
};

const Container = ({ children, style }) => (
  <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', ...style }}>{children}</div>
);

const Eyebrow = ({ children, color = 'var(--fx-saffron-400)' }) => (
  <span style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color, fontWeight: 700 }}>{children}</span>
);

// ---------- NAV ----------
const Nav = () => (
  <header style={{
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(247, 241, 231, 0.85)', backdropFilter: 'blur(14px) saturate(1.1)',
    borderBottom: '1px solid rgba(26,24,21,0.06)',
  }}>
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none' }}>
        <img src="../../assets/logo.svg" alt="FitX" style={{ height: 36 }}/>
      </a>
      <nav style={{ display: 'flex', gap: 32 }}>
        {['Programs', 'Conditions', 'Coaches', 'Stories', 'About'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ color: 'var(--fx-fg-1)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>{l}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="fx-btn fx-btn-ghost fx-btn-sm">Sign in</button>
        <button className="fx-btn fx-btn-primary fx-btn-sm">Start your plan</button>
      </div>
    </Container>
  </header>
);

// ---------- HERO ----------
const Hero = () => (
  <section style={{ padding: '80px 0 96px', position: 'relative', overflow: 'hidden' }}>
    <Container>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow>Built for every body, every age</Eyebrow>
          <h1 className="fx-h1" style={{ marginTop: 18, marginBottom: 24, fontSize: 'clamp(40px, 5vw, 72px)', color: 'var(--fx-forest-600)' }}>
            Strength for <em style={{ fontStyle: 'italic', color: 'var(--fx-saffron-400)' }}>every</em> stage of life.
          </h1>
          <p className="fx-lead" style={{ maxWidth: 520, marginBottom: 32 }}>
            AI-personalised home workouts and Indian-diet meal plans — reviewed by certified physiotherapists and dieticians.
            Whether you're 28 and building or 68 and preserving, your plan adapts.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="fx-btn fx-btn-primary fx-btn-lg">Start your plan</button>
            <button className="fx-btn fx-btn-outline fx-btn-lg"><I.whatsapp size={18}/>Talk to us on WhatsApp</button>
          </div>
          <div style={{ display: 'flex', gap: 32, marginTop: 40, flexWrap: 'wrap' }}>
            <div><div style={{ fontFamily: 'var(--fx-font-num)', fontSize: 32, fontWeight: 500, color: 'var(--fx-saffron-400)', letterSpacing: '-0.02em' }}>10,000+</div><div style={{ fontSize: 12, color: 'var(--fx-stone-500)', letterSpacing: '0.04em' }}>MEMBERS · ALL AGES</div></div>
            <div><div style={{ fontFamily: 'var(--fx-font-num)', fontSize: 32, fontWeight: 500, color: 'var(--fx-saffron-400)', letterSpacing: '-0.02em' }}>4.9</div><div style={{ fontSize: 12, color: 'var(--fx-stone-500)', letterSpacing: '0.04em' }}>★ APP RATING</div></div>
            <div><div style={{ fontFamily: 'var(--fx-font-num)', fontSize: 32, fontWeight: 500, color: 'var(--fx-saffron-400)', letterSpacing: '-0.02em' }}>100%</div><div style={{ fontSize: 12, color: 'var(--fx-stone-500)', letterSpacing: '0.04em' }}>EXPERT-REVIEWED</div></div>
          </div>
        </div>
        <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 28, overflow: 'hidden', background: 'linear-gradient(160deg, #4F8870 0%, #11332A 60%, #1A1815 100%)', boxShadow: 'var(--fx-shadow-xl)' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 20%, rgba(232,147,104,0.4), transparent 50%)' }}/>
          {/* faked photo placeholder with diagonal */}
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
            <div style={{ color: 'rgba(252,248,239,0.18)', fontFamily: 'var(--fx-font-display)', fontSize: 220, fontWeight: 600, letterSpacing: '-0.05em' }}>Fx</div>
          </div>
          {/* floating chip */}
          <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, padding: 18, borderRadius: 16, background: 'rgba(252, 248, 239, 0.95)', backdropFilter: 'blur(8px)', display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: 99, background: 'var(--fx-success)', display: 'grid', placeItems: 'center', color: '#fff' }}><I.shield size={20}/></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--fx-font-display)', fontWeight: 600, fontSize: 14, color: 'var(--fx-forest-600)' }}>Plan reviewed by Dr. Anjali</div>
              <div style={{ fontSize: 12, color: 'var(--fx-stone-600)' }}>Physiotherapist · 12 yrs experience</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// ---------- LIFE STAGES ----------
const Stages = () => (
  <section style={{ padding: '80px 0', background: 'var(--fx-cream-100)' }}>
    <Container>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Eyebrow>One app · three life stages</Eyebrow>
        <h2 className="fx-h2" style={{ marginTop: 14, color: 'var(--fx-forest-600)', maxWidth: 720, margin: '14px auto 0' }}>Your plan grows older with you.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { age: '25 – 40', t: 'Builders', d: 'Build strength, body composition, and energy. Hypertrophy-focused programming.', tone: 'var(--fx-saffron-400)' },
          { age: '40 – 60', t: 'Maintainers', d: 'Manage health markers, weight, and sustainability. Balanced strength + cardio.', tone: 'var(--fx-forest-500)' },
          { age: '60+',     t: 'Preservers', d: 'Preserve muscle, prevent falls, keep independence. Joint-safe progressive load.', tone: 'var(--fx-info)' },
        ].map((s, i) => (
          <div key={i} className="fx-card-lg" style={{ background: '#fff', border: '1px solid var(--fx-stone-200)', boxShadow: 'none', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: s.tone }}/>
            <Eyebrow color={s.tone}>{s.age}</Eyebrow>
            <h3 className="fx-h3" style={{ marginTop: 12, marginBottom: 10 }}>{s.t}</h3>
            <p className="fx-body" style={{ color: 'var(--fx-stone-600)' }}>{s.d}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

// ---------- WHY FITX ----------
const Why = () => (
  <section style={{ padding: '96px 0' }}>
    <Container>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow>Why FitX</Eyebrow>
          <h2 className="fx-h2" style={{ marginTop: 14, color: 'var(--fx-forest-600)' }}>AI is fast. Experts are safe. We do both.</h2>
          <p className="fx-lead" style={{ marginTop: 18 }}>
            Generic apps push intense workouts and one-size-fits-all diets. Personal trainers cost ₹15,000+ a month.
            FitX gives you AI-personalised plans, every one reviewed by a certified physiotherapist or dietician — for a fraction of the cost.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { i: <I.spark size={22}/>, t: 'AI-personalised', d: 'Plans built around your goals, body, and Indian dietary preferences.' },
            { i: <I.shield size={22}/>, t: 'Expert-reviewed', d: 'Every plan checked by a certified physio or dietician before it reaches you.' },
            { i: <I.flame size={22}/>, t: 'Indian food, real food', d: 'Dal, roti, sabzi, paneer, millet — no diet shakes, no imported powders.' },
            { i: <I.user size={22}/>, t: 'Built for every age', d: 'From 25 building strength to 65 preserving muscle. One app, calibrated.' },
          ].map((c, i) => (
            <div key={i} style={{ padding: 24, background: 'var(--fx-cream-100)', borderRadius: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--fx-saffron-100)', color: 'var(--fx-saffron-500)', display: 'grid', placeItems: 'center', marginBottom: 14 }}>{c.i}</div>
              <h4 className="fx-h4" style={{ fontSize: 17, marginBottom: 6 }}>{c.t}</h4>
              <p style={{ fontSize: 14, color: 'var(--fx-stone-600)', margin: 0, lineHeight: 1.55 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

// ---------- CONDITIONS ----------
const Conditions = () => (
  <section id="conditions" style={{ padding: '96px 0', background: 'var(--fx-forest-500)', color: 'var(--fx-cream-100)' }}>
    <Container>
      <div style={{ marginBottom: 48 }}>
        <Eyebrow color="var(--fx-saffron-300)">Specialised care</Eyebrow>
        <h2 className="fx-h2" style={{ marginTop: 14, color: 'var(--fx-cream-100)', maxWidth: 720 }}>Plans for 15+ health conditions.</h2>
        <p className="fx-lead" style={{ marginTop: 14, color: 'var(--fx-cream-300)', maxWidth: 640 }}>
          We coordinate directly with your physician so every plan complements your medical care.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {[
          'Type 2 Diabetes', 'Hypertension', 'Thyroid (Hypo/Hyper)', 'PCOS / PCOD',
          'Sarcopenia (60+)', 'Cholesterol', 'Fatty liver', 'Joint health',
        ].map((c, i) => (
          <div key={i} style={{ padding: '18px 20px', borderRadius: 12, background: 'rgba(252,248,239,0.06)', border: '1px solid rgba(252,248,239,0.12)' }}>
            <div style={{ fontFamily: 'var(--fx-font-display)', fontWeight: 600, fontSize: 16, color: 'var(--fx-cream-100)' }}>{c}</div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

// ---------- HOW IT WORKS ----------
const How = () => (
  <section style={{ padding: '96px 0', background: 'var(--fx-cream-200)' }}>
    <Container>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Eyebrow>How it works</Eyebrow>
        <h2 className="fx-h2" style={{ marginTop: 14, color: 'var(--fx-forest-600)' }}>Four steps to your plan.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {[
          { n: '01', t: 'Quick assessment', d: 'Goals, age, dietary preferences, conditions, blood markers if available.' },
          { n: '02', t: 'AI builds your plan', d: 'A workout + meal plan, calibrated to your life stage, in under a minute.' },
          { n: '03', t: 'Expert reviews it', d: 'A certified physio + dietician adjusts the plan for safety. Usually within 24h.' },
          { n: '04', t: 'Coach checks in weekly', d: 'WhatsApp + in-app. We adjust as your body and progress change.' },
        ].map((s, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <div style={{ fontFamily: 'var(--fx-font-num)', fontWeight: 500, fontSize: 64, color: 'var(--fx-saffron-200)', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.n}</div>
            <h4 className="fx-h4" style={{ fontSize: 18, marginTop: 14, marginBottom: 8, color: 'var(--fx-forest-600)' }}>{s.t}</h4>
            <p style={{ fontSize: 14, color: 'var(--fx-stone-600)', margin: 0, lineHeight: 1.6 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

// ---------- STORIES ----------
const Stories = () => (
  <section id="stories" style={{ padding: '96px 0' }}>
    <Container>
      <div style={{ marginBottom: 48 }}>
        <Eyebrow>Real stories</Eyebrow>
        <h2 className="fx-h2" style={{ marginTop: 14, color: 'var(--fx-forest-600)' }}>Members across every age.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { n: 'Archana K.', a: '38 · Pune', tag: 'Weight management', q: '"Lost 8 kg in 5 months on real Indian food. The coach checks in every week — I haven\'t fallen off once."', tone: 'sun' },
          { n: 'Lata M.',    a: '67 · Pune', tag: 'Strength · powerlifter', q: '"I\'m stronger at 67 than I was at 30. FitX calibrated everything for my joints. I now compete."', tone: 'forest' },
          { n: 'Rajesh T.',  a: '52 · Mumbai', tag: 'Type 2 diabetes', q: '"My HbA1c went from 8.2 to 6.1. My doctor reduced my medication. Real food, no shakes."', tone: 'saffron' },
        ].map((s, i) => {
          const grads = { sun: 'linear-gradient(135deg,#F6D8C2,#E0653A)', forest: 'linear-gradient(135deg,#4F8870,#11332A)', saffron: 'linear-gradient(135deg,#E89368,#97391A)' };
          return (
            <div key={i} className="fx-card-lg" style={{ background: '#fff', boxShadow: 'var(--fx-shadow-md)' }}>
              <div style={{ width: 64, height: 64, borderRadius: 99, background: grads[s.tone], display: 'grid', placeItems: 'center', color: '#fff', fontFamily: 'var(--fx-font-display)', fontWeight: 600, fontSize: 24 }}>{s.n[0]}</div>
              <div style={{ marginTop: 16 }}>
                <div style={{ fontFamily: 'var(--fx-font-display)', fontWeight: 600, fontSize: 18, color: 'var(--fx-fg-1)' }}>{s.n}</div>
                <div style={{ fontSize: 12, color: 'var(--fx-stone-500)', marginTop: 2 }}>{s.a} · {s.tag}</div>
              </div>
              <p style={{ fontFamily: 'var(--fx-font-display)', fontSize: 17, lineHeight: 1.45, marginTop: 16, color: 'var(--fx-fg-1)', textWrap: 'pretty' }}>{s.q}</p>
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);

// ---------- PRICING / CTA ----------
const Pricing = () => (
  <section style={{ padding: '96px 0', background: 'var(--fx-cream-100)' }}>
    <Container>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch' }}>
        <div className="fx-card-lg" style={{ background: '#fff', boxShadow: 'var(--fx-shadow-md)', position: 'relative' }}>
          <span className="fx-badge fx-badge-saffron" style={{ position: 'absolute', top: 24, right: 24 }}>★ Most popular</span>
          <Eyebrow>3-month transformation</Eyebrow>
          <h3 className="fx-h2" style={{ fontSize: 34, marginTop: 12, marginBottom: 10 }}>Strength for Life</h3>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 18 }}>
            <span style={{ fontFamily: 'var(--fx-font-num)', fontSize: 44, fontWeight: 500, color: 'var(--fx-saffron-400)', letterSpacing: '-0.02em' }}>₹4,499</span>
            <span style={{ fontSize: 14, color: 'var(--fx-stone-500)' }}>/ month · billed quarterly</span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'AI-built workout + meal plan',
              'Reviewed by certified physio + dietician',
              'Weekly 1-on-1 video check-ins',
              'WhatsApp coach access, all 7 days',
              'Coordination with your doctor',
              'FitX Inner Circle community',
            ].map((f, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: 'var(--fx-fg-1)' }}>
                <span style={{ color: 'var(--fx-success)', marginTop: 2 }}><I.check/></span>{f}
              </li>
            ))}
          </ul>
          <button className="fx-btn fx-btn-primary fx-btn-lg" style={{ marginTop: 28, width: '100%' }}>Enrol now</button>
          <div style={{ fontSize: 12, color: 'var(--fx-stone-500)', textAlign: 'center', marginTop: 12 }}>EMI available · 7-day refund · secure payment</div>
        </div>
        <div style={{ background: 'var(--fx-forest-500)', color: 'var(--fx-cream-100)', borderRadius: 20, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Eyebrow color="var(--fx-saffron-300)">Not ready?</Eyebrow>
            <h3 className="fx-h2" style={{ fontSize: 34, color: 'var(--fx-cream-100)', marginTop: 12 }}>Get a free callback.</h3>
            <p style={{ fontSize: 16, color: 'var(--fx-cream-300)', marginTop: 14, lineHeight: 1.6 }}>
              Talk to a coach, no commitment. We'll help you decide if FitX is right for you, your goals, and your life stage.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 32, flexWrap: 'wrap' }}>
            <button className="fx-btn fx-btn-primary fx-btn-lg">Request callback</button>
            <button className="fx-btn fx-btn-lg" style={{ background: 'transparent', color: 'var(--fx-cream-100)', border: '1.5px solid var(--fx-cream-300)' }}><I.whatsapp size={18}/>WhatsApp us</button>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// ---------- FOOTER ----------
const Footer = () => (
  <footer style={{ padding: '64px 0 32px', background: 'var(--fx-forest-600)', color: 'var(--fx-cream-300)' }}>
    <Container>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          <img src="../../assets/logo-on-dark.svg" alt="FitX" style={{ height: 36, marginBottom: 18 }}/>
          <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 320, color: 'var(--fx-cream-300)' }}>
            AI-personalised, expert-reviewed home fitness and nutrition for Indian adults of every age. Founded 2026.
          </p>
        </div>
        {[
          { h: 'Programs', l: ['Strength for Life', 'Thyroid Reset', 'Diabetes Reverse', 'Senior Strength'] },
          { h: 'Conditions', l: ['Diabetes', 'Hypertension', 'Thyroid', 'PCOS', 'Sarcopenia'] },
          { h: 'Company', l: ['About', 'Careers', 'Privacy', 'Terms', 'Refunds'] },
        ].map((c, i) => (
          <div key={i}>
            <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fx-cream-100)', fontWeight: 700, marginBottom: 14 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {c.l.map(x => <li key={x}><a href="#" style={{ color: 'var(--fx-cream-300)', textDecoration: 'none', fontSize: 14 }}>{x}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ paddingTop: 24, borderTop: '1px solid rgba(252,248,239,0.1)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--fx-cream-300)' }}>
        <span>© 2026 FitX. Made with care in India.</span>
        <span>+91 84848 08896 · hello@fitx.in</span>
      </div>
    </Container>
  </footer>
);

Object.assign(window, { FxNav: Nav, FxHero: Hero, FxStages: Stages, FxWhy: Why, FxConditions: Conditions, FxHow: How, FxStories: Stories, FxPricing: Pricing, FxFooter: Footer });
