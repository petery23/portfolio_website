'use client';

import { useState, useEffect, useRef, useMemo, Fragment } from 'react';
import Image from 'next/image';
import { PROJECTS, type Skill, type Project } from './data/projects';
import { BLOG_POSTS } from './data/blog';

const SORTED_POSTS = [...BLOG_POSTS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// ─── SVG icons ──────────────────────────────────────────────────────────────
function IconFolder() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M1 3.5A1.5 1.5 0 012.5 2H6l1.5 1.5H14a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 0114 13.5H2.5A1.5 1.5 0 011 12V3.5z" fill="#dcb67a" />
    </svg>
  );
}

function IconEnv() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 1h5.5L13 4.5V15H4V1z" fill="#fef3c7" stroke="#f0d07a" strokeWidth="0.8" />
      <path d="M9.5 1v3.5H13" fill="none" stroke="#f0d07a" strokeWidth="0.8" />
      <text x="3.5" y="12" fontSize="4.5" fill="#8a5700" fontFamily="monospace" fontWeight="700">.env</text>
    </svg>
  );
}

function IconMd() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 1h5.5L13 4.5V15H4V1z" fill="#d2e3ff" stroke="#aecbf0" strokeWidth="0.8" />
      <path d="M9.5 1v3.5H13" fill="none" stroke="#aecbf0" strokeWidth="0.8" />
      <text x="5" y="12" fontSize="5.5" fill="#0969da" fontFamily="monospace" fontWeight="700">MD</text>
    </svg>
  );
}

// ─── File tree structure ────────────────────────────────────────────────────
interface TreeNodeData {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: TreeNodeData[];
}

const TREE: TreeNodeData[] = [
  { id: 'readme', name: 'README.md', type: 'file' },
  {
    id: 'projects', name: 'projects', type: 'folder',
    children: PROJECTS.map(p => ({ id: p.id, name: p.filename, type: 'file' as const })),
  },
  // { id: 'resume', name: 'resume.md', type: 'file' },
  {
    id: 'blog', name: 'blog', type: 'folder',
    children: SORTED_POSTS.map(p => ({ id: p.id, name: p.filename, type: 'file' as const })),
  },
  { id: 'dotenv', name: '.env', type: 'file' },
];


// ─── Content components ─────────────────────────────────────────────────────
// ─── Search index for command palette ───────────────────────────────────────
interface SearchEntry {
  fileId: string;
  label: string;
  detail: string;
  searchText: string;
}

const SEARCH_INDEX: SearchEntry[] = [
  {
    fileId: 'readme',
    label: 'README.md',
    detail: 'Peter Yungman — About, Contact',
    searchText: 'readme.md peter yungman about contact pinned university of florida cs portfolio linkedin github email',
  },
  ...PROJECTS.map(p => ({
    fileId: p.id,
    label: p.filename,
    detail: p.title,
    searchText: [p.filename, p.title, p.desc, ...p.skills.map(s => s.name)].join(' ').toLowerCase(),
  })),
  ...SORTED_POSTS.map(p => ({
    fileId: p.id,
    label: p.filename,
    detail: p.title,
    searchText: [p.filename, p.title, p.date].join(' ').toLowerCase(),
  })),
  {
    fileId: 'settings',
    label: 'Settings',
    detail: 'Appearance, accent color, theme',
    searchText: 'settings appearance accent color theme dark light',
  },
  {
    fileId: 'dotenv',
    label: '.env',
    detail: 'DONT OPEN. PRIVATE KEYS HERE.',
    searchText: '.env linkedin secrets',
  },
];

// ─── Command Palette ────────────────────────────────────────────────────────
function CommandPalette({ open, onClose, openFile }: {
  open: boolean;
  onClose: () => void;
  openFile: (id: string) => void;
}) {
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SEARCH_INDEX;
    return SEARCH_INDEX.filter(e => e.searchText.includes(q));
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIdx(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => { setActiveIdx(0); }, [results]);

  const select = (idx: number) => {
    if (results[idx]) {
      openFile(results[idx].fileId);
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIdx(i => Math.min(i + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIdx(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        select(activeIdx);
        break;
      case 'Escape':
        onClose();
        break;
    }
  };

  if (!open) return null;

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div className="palette" onClick={e => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="palette-input"
          placeholder="Search files by name..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="palette-results">
          {results.length === 0 ? (
            <div className="palette-empty">No matching files</div>
          ) : (
            results.map((entry, i) => (
              <div
                key={entry.fileId}
                className={`palette-row${i === activeIdx ? ' active' : ''}`}
                onClick={() => select(i)}
                onMouseEnter={() => setActiveIdx(i)}
              >
                {entry.fileId === 'dotenv' ? <IconEnv /> : <IconMd />}
                <span className="palette-label">{entry.label}</span>
                <span className="palette-detail">{entry.detail}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const PINNED_FILES: { id: string; filename: string; desc: string }[] = [
  { id: 'winging',             filename: 'winging-flights.md',      desc: 'daily flight deal alerts' },
  { id: 'cybersec-journey',    filename: 'my-cybersec-journey.md',  desc: 'getting into security' },
  { id: 'financial-algorithm', filename: 'financial-algos.md',      desc: 'trading signals from 10-Ks' },
];

function ReadmeContent({ openFile }: { openFile: (id: string) => void }) {
  return (
    <div className="md">
      <div className="profile-row">
        <div className="avatar-wrap">
          <Image
            src="/headshot_cropped.png"
            alt="Peter Yungman"
            width={150}
            height={150}
            style={{ width: '110%', height: '110%', objectFit: 'cover', objectPosition: '45% 50%', transform: 'translate(0%, -10%)' }}
            priority
          />
        </div>
        <div style={{ paddingTop: 8 }}>
          <div className="profile-name">Peter Yungman</div>
          <div className="profile-sub">CS @ University of Florida &middot; GPA 4.0</div>
        </div>
      </div>

      <h2>About</h2>
      <p>
        Hi! I wanted a cool way to display some of my recent projects. If you think any of it's cool too, shoot me a message on LinkedIn. I'm always looking
        for new projects and ideas to get involved with. If you check out the projects folder you can see a little more about some of the projects
        I've worked on, and the under the blog folder I have written about some of the things I've worked on recently.
      </p>

      <h2>Contact</h2>
      <div className="contact-grid">
        <a href="https://www.linkedin.com/in/peter-yungman/" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="cc-dot" />
          <div>
            <div className="cc-label">linkedin</div>
            <div className="cc-value">/in/peter-yungman</div>
          </div>
        </a>
        <a href="https://github.com/petery23" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="cc-dot" />
          <div>
            <div className="cc-label">github</div>
            <div className="cc-value">@petery23</div>
          </div>
        </a>
        <a href="mailto:peter.yungman@ufl.edu" className="contact-card">
          <div className="cc-dot" />
          <div>
            <div className="cc-label">email</div>
            <div className="cc-value">peter.yungman@ufl.edu</div>
          </div>
        </a>
      </div>

      <h2>Pinned</h2>
      <div className="pinned-section">
        {PINNED_FILES.map(p => (
          <div key={p.id} className="pinned-row" onClick={() => openFile(p.id)}>
            <IconMd />
            <span className="pinned-name">{p.filename}</span>
            <span className="pinned-sep">&mdash;</span>
            <span className="pinned-desc">{p.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VerticalSkillStack({ skills }: { skills: Skill[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {skills.map(skill => (
        <div key={skill.name} style={{ display: 'flex', gap: 8, fontSize: 13, lineHeight: 1.6 }}>
          <span style={{ fontWeight: 600, color: 'var(--text)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
            {skill.name}
          </span>
          <span style={{ color: 'var(--muted)' }}>&mdash;</span>
          <span style={{ color: 'var(--muted)' }}>{skill.description}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectContent({ project: p }: { project: Project }) {
  return (
    <div className="md">
      <div className="proj-header">
        {p.image && (
          <div style={{ width: 48, height: 48, borderRadius: 8, background: '#fff', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 4 }}>
            <Image src={p.image} alt={p.title} width={40} height={40} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
          </div>
        )}
        <h1>{p.title}</h1>
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 12px',
              fontSize: 12, fontFamily: 'var(--font-mono)',
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              borderRadius: 5,
              textDecoration: 'none',
              transition: 'all 0.15s',
              marginLeft: 'auto',
              flexShrink: 0,
            }}
            className="github-link"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View Source
          </a>
        )}
      </div>
      <hr className="proj-divider" />
      <h2>Overview</h2>
      <p>{p.desc}</p>
      <h2>Tech Stack</h2>
      <VerticalSkillStack skills={p.skills} />
    </div>
  );
}


// ─── Accent colors for settings ─────────────────────────────────────────────
const ACCENTS = [
  { color: '#0969da', label: 'Blue' },
  { color: '#1a7f37', label: 'Green' },
  { color: '#8957e5', label: 'Purple' },
  { color: '#bc4c00', label: 'Orange' },
  { color: '#b91c1c', label: 'Red' },
  { color: '#444444', label: 'Slate' },
];

function SettingsContent({ accent, setAccent, dark, setDark }: {
  accent: string;
  setAccent: (c: string) => void;
  dark: boolean;
  setDark: (d: boolean) => void;
}) {
  return (
    <div className="md">
      <h1>Settings</h1>
      <h2>Appearance</h2>

      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 10 }}>Accent color</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {ACCENTS.map(a => (
            <div
              key={a.color}
              onClick={() => setAccent(a.color)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', border: '1px solid',
                borderColor: accent === a.color ? a.color : 'var(--border)',
                borderRadius: 5, cursor: 'pointer',
                background: accent === a.color ? a.color + '18' : 'transparent',
                transition: 'all 0.12s',
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: a.color, flexShrink: 0 }} />
              <span style={{ fontSize: 12.5, fontFamily: 'var(--font-mono)', color: 'var(--text)' }}>{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 10 }}>Color theme</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[{ label: 'Light', val: false }, { label: 'Dark', val: true }].map(opt => (
            <div
              key={opt.label}
              onClick={() => setDark(opt.val)}
              style={{
                padding: '6px 20px', border: '1px solid',
                borderColor: dark === opt.val ? 'var(--accent)' : 'var(--border)',
                borderRadius: 5, cursor: 'pointer', fontSize: 13,
                background: dark === opt.val ? 'var(--accent-light)' : 'transparent',
                color: dark === opt.val ? 'var(--accent)' : 'var(--text)',
                fontWeight: dark === opt.val ? 500 : 400,
                transition: 'all 0.12s',
              }}
            >{opt.label}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── File metadata ──────────────────────────────────────────────────────────
interface FileMeta {
  name: string;
  crumb: string[];
}

const FILES: Record<string, FileMeta> = {
  readme:   { name: 'README.md', crumb: ['README.md'] },
  resume:   { name: 'resume.md', crumb: ['resume.md'] },
  settings: { name: 'Settings',  crumb: ['Settings'] },
  ...Object.fromEntries(PROJECTS.map(p => [p.id, { name: p.filename, crumb: ['projects', p.filename] }])),
  ...Object.fromEntries(SORTED_POSTS.map(p => [p.id, { name: p.filename, crumb: ['blog', p.filename] }])),
};

// ─── Tree node component ────────────────────────────────────────────────────
function TreeNode({ node, depth, activeTab, openFile, expanded, toggleFolder }: {
  node: TreeNodeData;
  depth: number;
  activeTab: string | null;
  openFile: (id: string) => void;
  expanded: Set<string>;
  toggleFolder: (id: string) => void;
}) {
  const isOpen = expanded.has(node.id);
  const isActive = activeTab === node.id;

  if (node.type === 'folder') {
    return (
      <>
        <div className="tree-row" style={{ paddingLeft: `${depth * 12 + 6}px` }} onClick={() => toggleFolder(node.id)}>
          <span className="tree-arrow">{isOpen ? '\u25BE' : '\u25B8'}</span>
          <IconFolder />
          <span className="tree-name">{node.name}</span>
        </div>
        {isOpen && node.children?.map(c => (
          <TreeNode key={c.id} node={c} depth={depth + 1} activeTab={activeTab}
            openFile={openFile} expanded={expanded} toggleFolder={toggleFolder} />
        ))}
      </>
    );
  }

  return (
    <div className={`tree-row${isActive ? ' active' : ''}`} style={{ paddingLeft: `${depth * 12 + 6}px` }} onClick={() => openFile(node.id)}>
      <span className="tree-arrow" />
      {node.id === 'dotenv' ? <IconEnv /> : <IconMd />}
      <span className="tree-name">{node.name}</span>
    </div>
  );
}

// ─── Main App ───────────────────────────────────────────────────────────────
export default function VSCodePortfolio() {
  const [tabs, setTabs] = useState<string[]>(['readme']);
  const [active, setActive] = useState<string | null>('readme');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [accent, setAccentState] = useState('#8957e5');
  const [dark, setDarkState] = useState(true);
  const [time, setTime] = useState<Date>(new Date());
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [dragTab, setDragTab] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setAccent = (c: string) => {
    setAccentState(c);
    document.documentElement.style.setProperty('--accent', c);
  };

  const setDark = (val: boolean) => {
    setDarkState(val);
    document.body.classList.toggle('dark', val);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.body.classList.toggle('dark', dark);
  }, [accent, dark]);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const openFile = (id: string) => {
    setDrawerOpen(false);
    if (id === 'dotenv') {
      window.open('https://www.linkedin.com/in/peter-yungman/', '_blank', 'noopener,noreferrer');
      return;
    }
    setTabs([id]);
    setActive(id);
  };

  const toggleFolder = (id: string) => setExpanded(prev => {
    const s = new Set(prev);
    if (s.has(id)) s.delete(id); else s.add(id);
    return s;
  });

  const onTabDragStart = (id: string, e: React.DragEvent) => {
    setDragTab(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onTabDragOver = (id: string, e: React.DragEvent) => {
    e.preventDefault();
    if (!dragTab || dragTab === id) return;
    setTabs(prev => {
      const from = prev.indexOf(dragTab);
      const to = prev.indexOf(id);
      if (from === -1 || to === -1) return prev;
      const next = [...prev];
      next.splice(from, 1);
      next.splice(to, 0, dragTab);
      return next;
    });
  };

  const onTabDragEnd = () => setDragTab(null);

  const onBreadcrumbClick = (segment: string) => {
    const folder = TREE.find(n => n.type === 'folder' && n.name === segment);
    if (folder) {
      setExpanded(prev => {
        const s = new Set(prev);
        s.add(folder.id);
        return s;
      });
    }
  };

  const meta = active ? FILES[active] : null;
  const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const renderContent = () => {
    if (!active || !meta) return null;
    switch (active) {
      case 'readme': return <ReadmeContent openFile={openFile} />;
      case 'settings': return <SettingsContent accent={accent} setAccent={setAccent} dark={dark} setDark={setDark} />;
      default: {
        const project = PROJECTS.find(p => p.id === active);
        if (project) return <ProjectContent project={project} />;
        const post = SORTED_POSTS.find(p => p.id === active);
        if (post) {
          const Content = post.content;
          return (
            <div className="md">
              <h1>{post.title}</h1>
              <blockquote>{post.date}</blockquote>
              <Content />
            </div>
          );
        }
        return null;
      }
    }
  };

  return (
    <div className="vscode-app">
      {/* Title bar */}
      <div className="titlebar">
        <div className="traffic-lights">
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', cursor: 'pointer' }} onClick={() => window.close()} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <button type="button" className="hamburger" onClick={() => setDrawerOpen(p => !p)} aria-label="Toggle file tree">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="2" y1="4" x2="14" y2="4" />
            <line x1="2" y1="8" x2="14" y2="8" />
            <line x1="2" y1="12" x2="14" y2="12" />
          </svg>
        </button>
        <div className="titlebar-title">
          {meta ? `${meta.name} \u2014 peter-yungman` : 'peter-yungman'}
        </div>
        <div style={{ width: 52 }} />
      </div>

      {/* Activity bar */}
      <div className="activity-bar">
        <div className="act-icon active" title="Explorer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
          </svg>
        </div>
        <div className="act-icon" title="Search (Ctrl+K)" onClick={() => setPaletteOpen(true)}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
        <div className="act-icon bottom" title="Settings" onClick={() => openFile('settings')}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </div>
      </div>

      {/* Drawer overlay — mobile only */}
      {drawerOpen && <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} />}

      {/* Sidebar */}
      <div className={`sidebar${drawerOpen ? ' open' : ''}`}>
        <div className="sidebar-label">Explorer</div>
        <div className="repo-row">
          <span style={{ fontSize: 9, color: 'var(--muted)' }}>{'\u25BE'}</span>
          peter-yungman
        </div>
        {TREE.map(n => (
          <TreeNode key={n.id} node={n} depth={0} activeTab={active}
            openFile={openFile} expanded={expanded} toggleFolder={toggleFolder} />
        ))}
      </div>

      {/* Editor */}
      <div className="editor-area">
        <div className="tab-bar">
          {tabs.map(id => {
            const f = FILES[id];
            return (
              <div
                key={id}
                className={`tab${active === id ? ' active' : ''}${dragTab === id ? ' dragging' : ''}`}
                onClick={() => setActive(id)}
                draggable
                onDragStart={e => onTabDragStart(id, e)}
                onDragOver={e => onTabDragOver(id, e)}
                onDragEnd={onTabDragEnd}
              >
                <IconMd />
                {f?.name}
              </div>
            );
          })}
        </div>

        {meta && (
          <div className="breadcrumb">
            {meta.crumb.map((part, i, arr) => (
              <Fragment key={i}>
                {i < arr.length - 1 ? (
                  <span className="breadcrumb-link" onClick={() => onBreadcrumbClick(part)}>{part}</span>
                ) : (
                  <span style={{ color: 'var(--text)' }}>{part}</span>
                )}
                {i < arr.length - 1 && <span style={{ color: 'var(--border)' }}>&rsaquo;</span>}
              </Fragment>
            ))}
          </div>
        )}

        {active && meta ? (
          active === 'resume' ? (
            <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <iframe
                src="/Peter_Yungman_Resume.pdf"
                title="Resume"
                style={{ flex: 1, width: '100%', border: 'none' }}
              />
            </div>
          ) : (
            <div className="editor-scroll">
              {renderContent()}
            </div>
          )
        ) : (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12, color: 'var(--muted)' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="0.8">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <p style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>select a file to open it</p>
          </div>
        )}
      </div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} openFile={openFile} />

      {/* Status bar */}
      <div className="statusbar">
        <a className="s-item s-link" href="https://github.com/petery23" target="_blank" rel="noopener noreferrer">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 01-9 9" />
          </svg>
          main
        </a>
        <span className="s-item">
          {meta?.name ?? 'no file open'}
        </span>
        <span className="s-item right">Markdown</span>
        <span className="s-item">UTF-8</span>
        <span className="s-item">{timeStr}</span>
      </div>
    </div>
  );
}
