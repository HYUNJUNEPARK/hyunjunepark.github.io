import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './Legal.module.css'

export default function Terms() {
  return (
    <div className={styles.page}>
      <Nav />

      <main className={styles.content}>
        <h1>서비스 이용약관</h1>
        <p className={styles.updated}>최종 수정일: 2025년 6월 25일</p>

        <section>
          <h2>1. 목적</h2>
          <p>
            본 약관은 Mori Studio(이하 "회사")가 제공하는 모바일 애플리케이션 및 관련 서비스(이하 "서비스")의
            이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2>2. 서비스의 제공</h2>
          <p>회사는 다음과 같은 서비스를 제공합니다.</p>
          <ul>
            <li>모바일 애플리케이션 서비스</li>
            <li>기타 회사가 정하는 서비스</li>
          </ul>
        </section>

        <section>
          <h2>3. 이용자의 의무</h2>
          <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
          <ul>
            <li>서비스의 안정적 운영을 방해하는 행위</li>
            <li>타인의 개인정보를 무단으로 수집·이용하는 행위</li>
            <li>관련 법령에 위반되는 행위</li>
          </ul>
        </section>

        <section>
          <h2>4. 서비스의 변경 및 중단</h2>
          <p>
            회사는 운영상, 기술상의 필요에 따라 서비스의 전부 또는 일부를 변경하거나
            중단할 수 있습니다. 이 경우 사전에 공지합니다.
          </p>
        </section>

        <section>
          <h2>5. 면책</h2>
          <p>
            회사는 천재지변, 불가항력 등으로 인해 서비스를 제공할 수 없는 경우에는
            서비스 제공에 관한 책임이 면제됩니다.
            회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2>6. 약관의 변경</h2>
          <p>
            회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을
            통해 공지합니다. 변경된 약관에 동의하지 않는 이용자는 서비스 이용을 중단할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>7. 문의</h2>
          <p>
            이용약관 관련 문의사항은 <a href="mailto:contact@example.com">contact@example.com</a>으로 연락해 주시기 바랍니다.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
