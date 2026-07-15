import { motion } from 'framer-motion'
import './MessageSection.css'

export default function MessageSection() {
  return (
    <section className="message-section">
      <motion.div
        className="message-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="ring-glow-wrapper">
          <div className="ring-glow">
            <span className="ring-heart">♥</span>
          </div>
        </div>

        <h2 className="message-title">
          <span className="message-lead">يا أغلى إنسان في حياتي...</span>
          <span className="signature">أحمد ❤️</span>
        </h2>

        <motion.p
          className="message-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          مش عارفة أعبّرلك بالكلام بس حبيت أعملك المكان ده عشان تعرف قد إيه انت مهم بالنسبالي.<br /><br />
          من 20/3/2026 وأنا كل شوية باكتشف حاجة تانية تخليني أحبك أكتر.
          ضحكتك بتفرحني، وكلامك بيطمني، وأي يوم تعبانة يهون لما بسمع صوتك.<br /><br />
          لو الزمن يرجع تاني مليون مرة، هختارك تاني من غير ما افكر.<br /><br />
          وعد مني: هفضل جنبك، هحترمك وأقدرك، وهكون معاك في كل الظروف
          حلوة كانت ولا صعبة، وربنا يديمك في حياتي.</motion.p>

        <motion.div
          className="message-signature-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="message-from"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          بحبك يا أحمد بجد، وربنا يخليك ليا ويفضل يضحكك طول عمرك ❤️🌹
        </motion.p>
      </motion.div>
    </section>
  )
}
