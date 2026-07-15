import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './LoveCardsSection.css'

const cards = [
  { id: 1, icon: '♡', title: 'قلبي وصل', message: 'أنتَ المكانُ الوحيدُ الذي أشعرُ فيه أنَّ قلبي وصل، وأنَّ روحي لم تَعُد تبحثُ عن شيءٍ بعدَكَ ❤️' },
  { id: 2, icon: '✧', title: 'أهتدي إليك', message: 'أَتَقَبَّلُ الضَّياعَ، وأرحِّبُ به، ما دُمتُ سأهتدي إليكَ، يا أحمد ❤️' },
  { id: 3, icon: '☾', title: 'أميري الوسيم', message: 'لو خُيِّرت بين كل أمنياتي وبينك، لاخترتك أنت... لأن وجودك وحده يحققها كلها. ❤️' },
  { id: 4, icon: '♾️', title: 'سلطان قلبي', message: 'لا يوجد مكان أشعر فيه بالأمان أكثر من قلبي... لأنك تسكنه. ♾️❤️' },
]

export default function LoveCardsSection() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section className="cards-section" id="cards">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">رسائل من القلب</span>
        <h2 className="section-title">دوس على الكروت</h2>
        <p className="section-subtitle">كل كرت فيه كلام من قلبي ليك ♥</p>
      </motion.div>

      <div className="cards-grid">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            className="love-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCard(card)}
          >
            <span className="card-icon">{card.icon}</span>
            <span className="card-title">{card.title}</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCard && (
          <motion.div
            className="card-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              className="card-modal"
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setActiveCard(null)}>×</button>
              <div className="modal-icon">{activeCard.icon}</div>
              <h3 className="modal-title">{activeCard.title}</h3>
              <p className="modal-message">{activeCard.message}</p>
              <div className="modal-heart">♥</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
