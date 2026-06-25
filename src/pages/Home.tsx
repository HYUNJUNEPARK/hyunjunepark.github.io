import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Home.module.css'

interface App {
  name: string
  description: string
  icon: string
  gradient: string
  url: string
}

interface AppCategory {
  label: string
  items: App[]
}

const appCategories: AppCategory[] = [
  {
    label: 'Mobile',
    items: [
      {
        name: 'TaskFlow',
        description: '직관적인 할 일 관리',
        icon: '✓',
        gradient: 'linear-gradient(135deg, #007aff, #5856d6)',
        url: 'https://example.com/taskflow',
      },
      {
        name: 'FitTracker',
        description: '피트니스 & 건강 트래커',
        icon: '♥',
        gradient: 'linear-gradient(135deg, #ff3b30, #ff6482)',
        url: 'https://example.com/fittracker',
      },
      {
        name: 'MealLog',
        description: '간편한 식단 기록',
        icon: '▣',
        gradient: 'linear-gradient(135deg, #5856d6, #af52de)',
        url: 'https://example.com/meallog',
      },
      {
        name: 'SleepWell',
        description: '수면 패턴 분석',
        icon: '☽',
        gradient: 'linear-gradient(135deg, #5e5ce6, #1c1c4e)',
        url: 'https://example.com/sleepwell',
      },
    ],
  },
  {
    label: 'Web',
    items: [
      {
        name: 'WeatherNow',
        description: '실시간 날씨 정보',
        icon: '☀',
        gradient: 'linear-gradient(135deg, #34c759, #30d158)',
        url: 'https://example.com/weathernow',
      },
    ],
  },
  {
    label: 'Desktop',
    items: [
      {
        name: 'NoteSync',
        description: '클라우드 메모 & 노트',
        icon: '✎',
        gradient: 'linear-gradient(135deg, #ff9500, #ffcc00)',
        url: 'https://example.com/notesync',
      },
    ],
  },
]

interface Skill {
  name: string
  bg: string
  color: string
}

interface SkillGroup {
  category: string
  skills: Skill[]
}

const techStack: SkillGroup[] = [
  {
    category: 'Language',
    skills: [
      { name: 'TypeScript', bg: '#3178c6', color: '#fff' },
      { name: 'JavaScript', bg: '#f7df1e', color: '#000' },
      { name: 'Kotlin', bg: '#7f52ff', color: '#fff' },
      { name: 'Java', bg: '#ed8b00', color: '#fff' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', bg: '#222', color: '#61dafb' },
      { name: 'Next.js', bg: '#000', color: '#fff' },
    ],
  },
  {
    category: 'Mobile & Desktop',
    skills: [
      { name: 'Android', bg: '#3ddc84', color: '#000' },
      { name: 'React Native', bg: '#282c34', color: '#61dafb' },
      { name: 'Electron', bg: '#47848f', color: '#fff' },
    ],
  },
  {
    category: 'Backend & DB',
    skills: [
      { name: 'Node.js', bg: '#339933', color: '#fff' },
      { name: 'Spring Boot', bg: '#6db33f', color: '#fff' },
      { name: 'MySQL', bg: '#4479a1', color: '#fff' },
    ],
  },
  {
    category: 'Cloud & Infra',
    skills: [
      { name: 'AWS', bg: '#ff9900', color: '#000' },
      { name: 'Firebase', bg: '#ffca28', color: '#000' },
      { name: 'Docker', bg: '#2496ed', color: '#fff' },
    ],
  },
  {
    category: 'CI/CD',
    skills: [
      { name: 'Jenkins', bg: '#d24939', color: '#fff' },
      { name: 'GitHub Actions', bg: '#2088ff', color: '#fff' },
    ],
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />

      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Creative Studio</p>
        <h1 className={styles.title}>Mori Studio</h1>
        <p className={styles.subtitle}>
          아이디어를 서비스로<br/>더 나은 경험을 만듭니다.
        </p>
      </section>

      {/* Products */}
      <section id="products" className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Products</h2>

          {/* Mobile - 4열 */}
          <div className={styles.appCategory}>
            <h3 className={styles.appCategoryLabel}>Mobile</h3>
            <div className={styles.appGrid4}>
              {appCategories[0].items.map((app) => (
                <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer" className={styles.appCard}>
                  <div className={styles.appIcon} style={{ background: app.gradient }}>
                    <span>{app.icon}</span>
                  </div>
                  <h3 className={styles.appName}>{app.name}</h3>
                  <p className={styles.appDesc}>{app.description}</p>
                  <span className={styles.appLink}>자세히 보기 →</span>
                </a>
              ))}
            </div>
          </div>

          {/* Web + Desktop - 2열 */}
          <div className={styles.appRow}>
            {appCategories.slice(1).map((category) => (
              <div key={category.label} className={styles.appCategory}>
                <h3 className={styles.appCategoryLabel}>{category.label}</h3>
                {category.items.map((app) => (
                  <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer" className={styles.appCard}>
                    <div className={styles.appIcon} style={{ background: app.gradient }}>
                      <span>{app.icon}</span>
                    </div>
                    <h3 className={styles.appName}>{app.name}</h3>
                    <p className={styles.appDesc}>{app.description}</p>
                    <span className={styles.appLink}>자세히 보기 →</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={styles.sectionWhite}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Skills</h2>

          <div className={styles.skillGrid}>
            {techStack.map((group) => (
              <div key={group.category} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{group.category}</h3>
                <div className={styles.skillTags}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={styles.skillTag}
                      style={{ backgroundColor: skill.bg, color: skill.color }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Contact</h2>

          <p className={styles.contactDesc}>프로젝트 제안, 협업 문의, 기타 궁금한 점이 있으시면 연락해 주세요.</p>
          <a href="mailto:contact@example.com" className={styles.contactLink}>
            <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
            <span>contact@example.com</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
