import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Legal.module.css'

export default function Privacy() {
  return (
    <div className={styles.page}>
      <Nav />

      <main className={styles.content}>
        <h1>개인정보처리방침</h1>
        <p className={styles.updated}>최종 수정일: 2025년 6월 25일</p>

        <section>
          <h2>1. 개인정보의 수집 및 이용 목적</h2>
          <p>
            Mori Studio(이하 "회사")는 다음 목적을 위해 개인정보를 수집·이용합니다.
            수집된 개인정보는 해당 목적 이외의 용도로 이용되지 않으며,
            이용 목적이 변경될 경우 사전 동의를 구합니다.
          </p>
          <ul>
            <li>서비스 제공 및 운영</li>
            <li>고객 문의 대응</li>
            <li>서비스 개선 및 통계 분석</li>
          </ul>
        </section>

        <section>
          <h2>2. 수집하는 개인정보 항목</h2>
          <p>회사는 서비스 제공을 위해 아래와 같은 최소한의 개인정보를 수집합니다.</p>
          <ul>
            <li>기기 정보 (기기 모델, OS 버전)</li>
            <li>앱 사용 로그 및 접속 기록</li>
            <li>광고 식별자 (광고 서비스 이용 시)</li>
          </ul>
        </section>

        <section>
          <h2>3. 개인정보의 보유 및 이용 기간</h2>
          <p>
            회사는 개인정보 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
            단, 관련 법령에 의해 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.
          </p>
        </section>

        <section>
          <h2>4. 개인정보의 제3자 제공</h2>
          <p>
            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만, 아래의 경우에는 예외로 합니다.
          </p>
          <ul>
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나 수사기관의 요청이 있는 경우</li>
          </ul>
        </section>

        <section>
          <h2>5. 광고 및 분석 서비스</h2>
          <p>
            회사는 Google AdMob, Firebase Analytics 등 제3자 서비스를 이용하여
            광고를 게재하고 서비스 이용 통계를 분석할 수 있습니다.
            해당 서비스들은 자체 개인정보처리방침에 따라 정보를 수집·이용합니다.
          </p>
        </section>

        <section>
          <h2>6. 이용자의 권리</h2>
          <p>
            이용자는 언제든지 자신의 개인정보에 대해 열람, 수정, 삭제를 요청할 수 있으며,
            개인정보 수집·이용에 대한 동의를 철회할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>7. 문의</h2>
          <p>
            개인정보 관련 문의사항은 <a href="mailto:contact@example.com">contact@example.com</a>으로 연락해 주시기 바랍니다.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
