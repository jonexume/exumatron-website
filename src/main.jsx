import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight, ChevronLeft, ChevronRight, Mail, MapPin, Menu, Phone, Play, X} from 'lucide-react';
import './styles.css';

const services = [
  {title:'Speaking & Teaching Engagements', short:'ST', text:'Book a keynote, panel discussion, or hands-on training session on AI, technology careers, or business technology. Each engagement is tailored to your audience and learning goals.', points:['Deliver keynotes and moderate technology panels','Teach teams to use AI tools in daily work','Create workshops with exercises and takeaways']},
  {title:'Fractional CTO Services', short:'CTO', text:'Bring in a part-time technology leader to assess your systems, set priorities, and guide delivery. Get a practical roadmap and ongoing support for technical decisions.', points:['Audit systems and build a prioritized roadmap','Evaluate software, vendors, and technology costs','Guide engineering teams and project delivery']},
{title:'AI Consulting & Security Services', short:'AI', text:'Identify where AI can save time, build and test a focused pilot, and review how tools handle your business data. Get implementation guidance and a plan to address security gaps.', points:['Map workflows and build AI automation pilots','Review AI tools, data access, and security risks','Create AI usage policies and staff training']},
  {title:'Second Serving — Business Turnaround', short:'SS', text:'Help your business get back to what made it successful. Second Serving works with established consumer products, food service, and small-to-midsize businesses facing stalled growth, rising costs, or operational strain. We diagnose the cause and stay through implementation to rebuild operations and work toward sustainable profitability.', points:['Diagnose — A 2–4 week financial, operational, customer, and staffing review with a prioritized turnaround roadmap.','Rebuild — Reset costs, vendor terms, inventory, workflows, and team roles to stabilize operations and cash flow.','Relaunch — Refresh positioning, products or menus, and digital presence, backed by launch marketing and a 90-day measurement plan.','Sustain — Optional monthly advisory with metrics reviews, accountability checkpoints, and course corrections.']}
];

const media = [
  {id:'MDj6za6XUSg', title:'Working in Tech Ep 43 — How to Become a Technical Consultant with Jonathan Exume', channel:'JuwonTheTechie'},
  {id:'ZW9y3luzpgI', title:'RIDE Con featuring Shakiri Murrain, Jonathan Exume, and Guy Mills', channel:'Rolling Out'},
  {id:'7XL7Bdqu1k4', title:'AI Secrets Revealed: Insights from a Tech Leader', channel:'Rachel Mlota'},
  {id:'LlWTlID6vN4', title:'ToC Presents: Get To Know — Diamonde Henderson', channel:'Technologists of Color'},
  {id:'3277JBfsneo', title:'Data Engineer Aces Meta Mock Interview featuring Jonathan Exume', channel:'BeforeTheBillions'},
  {id:'RIbO_WAZ7Fs', title:'Diversitech Talk with Jonathan Exume', channel:'The Mentor Mogul'},
  {id:'YucjBM8jwLo', title:'HBCU AI for Business Masterclass — Session 1 with Jonathan Exume', channel:'Howard University PNC Bank Regional Center at CAU'}
];

function Brand({footer=false}){return <a className={`brand ${footer?'brand--footer':''}`} href="#home" aria-label="Exumatron home"><img src="/exumatron-lion.png" alt=""/><span>Exumatron <b>LLC</b></span></a>}
function Header(){const [open,setOpen]=useState(false); useEffect(()=>{const close=()=>setOpen(false); window.addEventListener('hashchange',close); return()=>window.removeEventListener('hashchange',close)},[]); return <header><Brand/><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?'open':''}>{['Home','About','Services','Media','Contact'].map(n=><a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setOpen(false)}>{n}</a>)}<a className="nav-cta" href="#contact" onClick={()=>setOpen(false)}>Start a conversation</a></nav></header>}

function Hero(){return <section className="hero" id="home"><div className="hero-bg"/><div className="hero-copy"><h1>Technology with the courage to <span>move forward.</span></h1><p>Exumatron turns ambitious ideas into practical digital experiences, intelligent systems, and modern technology solutions.</p><div className="actions"><a className="button primary" href="#contact">Start a conversation <ArrowRight/></a><a className="button ghost" href="#services">Explore our capabilities</a></div></div><a className="scroll-cue" href="#about"><span>Scroll to explore</span><i/></a></section>}

function About(){return <section className="about section" id="about"><div className="lion-wrap portrait-wrap"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><img src="/exumatron-founder-cartoon.png" alt="Cartoon portrait of Jon Exume, founder of Exumatron"/></div><div className="about-copy"><p className="section-index">01 — About</p><h2>Meet Jon Exume.</h2><p className="lead">Building Exumatron to help people and businesses put technology to work.</p><p>Jon Exume is the founder of Exumatron. He brings together hands-on teaching, technology leadership, and AI consulting to help organizations make informed decisions and turn ideas into working solutions.</p><p>Through Exumatron, Jon helps teams build AI skills, plan and lead technology projects, and adopt AI with security in mind. His focus is simple: clear guidance, practical tools, and work that solves a real business problem.</p><a className="text-link" href="#contact">Start a conversation with Jon <ArrowRight/></a></div></section>}

function Services(){const [active,setActive]=useState(0); const rotate=d=>setActive((active+d+services.length)%services.length); return <section className="services section" id="services"><div className="section-heading"><p className="section-index">02 — Services</p><h2>Explore what we can<br/>build together.</h2><p>Choose a service to explore the work we can do for your organization.</p></div><div className="service-explorer services-four"><div className="service-orbits" aria-hidden="true"><i/><i/><i/></div><button className="round prev" onClick={()=>rotate(-1)} aria-label="Previous service"><ChevronLeft/></button><div className="service-core"><div className="core-ring"><span>{services[active].short}</span></div><small>Selected service</small><h3>{services[active].title}</h3></div><button className="round next" onClick={()=>rotate(1)} aria-label="Next service"><ChevronRight/></button><div className="service-detail" key={active}><p>{services[active].text}</p><ul>{services[active].points.map(p=><li key={p}>{p}</li>)}</ul><a href="#contact">Discuss your project <ArrowRight/></a></div><div className="service-tabs">{services.map((s,i)=><button aria-pressed={i===active} className={i===active?'active':''} onClick={()=>setActive(i)} key={s.title}><span>0{i+1}</span>{s.title}</button>)}</div></div><p className="services-note">Tell us your goals, timeline, and scope so we can shape the right engagement.</p></section>}

function Media(){const [start,setStart]=useState(0);const [selected,setSelected]=useState(null);const visible=[0,1,2].map(offset=>(start+offset)%media.length);useEffect(()=>{if(selected===null)return;const close=e=>{if(e.key==='Escape')setSelected(null)};document.body.classList.add('modal-open');window.addEventListener('keydown',close);return()=>{document.body.classList.remove('modal-open');window.removeEventListener('keydown',close)}},[selected]);const video=selected===null?null:media[selected];return <section className="compact-media section" id="media"><div className="compact-media-head"><div><p className="section-index">03 — Media</p><h2>Conversations in motion.</h2></div><p>Interviews, panels, and practical conversations about technology, leadership, AI, and building what comes next.</p></div><div className="compact-carousel"><button className="carousel-arrow left" onClick={()=>setStart((start-1+media.length)%media.length)} aria-label="Previous interviews"><ChevronLeft/></button><div className="compact-grid">{visible.map(i=>{const item=media[i];return <article className="video-card" key={item.id}><button className="card-poster" onClick={()=>setSelected(i)} aria-label={`Play ${item.title}`}><img loading="lazy" src={`https://i.ytimg.com/vi/${item.id}/mqdefault.jpg`} alt=""/><span><Play fill="currentColor"/></span></button><div><small>{item.channel}</small><h3>{item.title}</h3><button className="card-watch" onClick={()=>setSelected(i)}>Watch video <ArrowRight/></button></div></article>})}</div><button className="carousel-arrow right" onClick={()=>setStart((start+1)%media.length)} aria-label="Next interviews"><ChevronRight/></button></div><div className="carousel-status"><span>{String(start+1).padStart(2,'0')} / {String(media.length).padStart(2,'0')}</span><div>{media.map((item,i)=><button key={item.id} className={i===start?'active':''} onClick={()=>setStart(i)} aria-label={`Show interview ${i+1}`}/>)}</div></div>{video?<div className="video-modal" role="dialog" aria-modal="true" aria-label={video.title} onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}><div className="modal-panel"><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close video"><X/></button><div className="modal-player"><iframe src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/></div><div className="modal-meta"><span>{video.channel}</span><h3>{video.title}</h3></div></div></div>:null}</section>}

function Contact(){
  const [status,setStatus]=useState('idle');
  const [error,setError]=useState('');
  const endpoint=import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
  async function sendMessage(event){
    event.preventDefault();
    if(status==='sending')return;
    if(!endpoint){
      setError('Online messaging is not available yet. Please email jon@exumatron.co.technology directly.');
      return;
    }
    const data=new FormData(event.currentTarget);
    setStatus('sending');
    setError('');
    try{
      const response=await fetch(endpoint,{
        method:'POST',
        headers:{Accept:'application/json'},
        body:data,
        signal:AbortSignal.timeout(20000),
      });
      if(!response.ok)throw new Error('Message not accepted');
      const result=await response.json();
      if(result.ok!==true)throw new Error('Delivery not confirmed');
      setStatus('sent');
    }catch{
      setStatus('idle');
      setError('We could not confirm that your message was sent. Your text is still here. Please try again or email jon@exumatron.co.technology directly.');
    }
  }
  return <section className="contact section" id="contact">
    <div><p className="section-index">04 — Contact</p><h2>Let’s build the<br/><span>next move.</span></h2><p>Have a project, a challenge, or simply the beginning of an idea? We’d like to hear it.</p><div className="contact-lines"><a href="mailto:jon@exumatron.co.technology"><Mail/>jon@exumatron.co.technology</a><a href="tel:+16787431526"><Phone/>+1 678 743 1526</a><span><MapPin/>Austell, Georgia</span></div></div>
    {status==='sent'?<div className="success" role="status"><span>Message sent</span><h3>Thanks for reaching out.</h3><p>Your message has been accepted. Jon will get back to you at the email address you provided.</p><button className="button ghost" onClick={()=>setStatus('idle')}>Send another</button></div>:
      <form onSubmit={sendMessage} aria-busy={status==='sending'}>
        <label>Name<input required name="name" maxLength={120} autoComplete="name" placeholder="Your name"/></label>
        <label>Email<input required type="email" name="email" maxLength={254} autoComplete="email" placeholder="you@company.com"/></label>
        <label>Tell us about your project<textarea required name="message" maxLength={5000} rows="4" placeholder="What are you hoping to build?"/></label>
        <input type="hidden" name="_subject" value="New Exumatron website inquiry"/>
        <div hidden aria-hidden="true"><label>Leave this blank<input name="_gotcha" tabIndex={-1} autoComplete="off"/></label></div>
        {error?<p role="alert" className="contact-error">{error}</p>:null}
        <button className="button primary" disabled={status==='sending'} type="submit">{status==='sending'?'Sending…':'Send your message'} <ArrowRight/></button>
      </form>}
  </section>
}

function Footer(){return <footer><Brand footer/><p>Technology with the courage to move forward.</p><div><a href="#about">About</a><a href="#services">Services</a><a href="#media">Media</a><a href="#contact">Contact</a></div><small>© {new Date().getFullYear()} Exumatron LLC. All rights reserved.</small></footer>}
function App(){return <><Header/><main><Hero/><About/><Services/><Media/><Contact/></main><Footer/></>}

createRoot(document.getElementById('root')).render(<App/>);
