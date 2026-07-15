import { motion } from 'framer-motion'
import './MissingYouSection.css'

const lines = [
  'يعني البيت حاسس إنه فاضي من غيرك',
  'يعني بدور عليك وسط أي زحمة',
  'يعني بابص في التليفون كل شوية أشوف رديت ولا لأ',
  'يعني مش بتيجي منامة وانت في بالي',
  'يعني بحس إني ناقصة حاجة، وانت هي الحاجة دي',
  'يعني حتى لما بضحك مع الناس، جواني بفكر فيك',
  'يعني بزهق بسرعة من غير صوتك',
  'يعني كل حاجة بتفكرني بيك',
  'يعني انت أول واحد أفكر فيه اول ما اصحى، وآخر واحد قبل ما انام',
  'يعني صوتك بس اللي بيريحني، ولو غاب شوية بحس إن يومي ناقص حاجة',
  'يعني من غيرك حاسة إني تايهة، وانت اللي بترجعني لنفسي',
]

export default function MissingYouSection() {
  return (
    <section className="missing-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">وحشتني</span>
        <h2 className="section-title">كلمة وحشتني دي مش سهلة خالص</h2>
        <p className="section-subtitle">
          فيها معاني كتير أوي، خليك معايا لحد آخرها ♥
        </p>
      </motion.div>

      <div className="missing-list">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="missing-line"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <span className="missing-heart">♥</span>
            <span className="missing-word">وحشتني</span>
            <span className="missing-text">{line}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="missing-closing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        بس خلاصة الكلام كله.. وحشتني بجد 😂♥♥
      </motion.p>
    </section>
  )
}
