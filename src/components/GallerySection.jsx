import { useState } from 'react'
import { motion } from 'framer-motion'
import './GallerySection.css'

// عشان تضيفي صورك: حطي الـ 4 صور في مجلد public/images
// وسميهم بالظبط: photo1.jpg, photo2.jpg, photo3.jpg, photo4.jpg
// مفيش أي تعديل تاني مطلوب في الكود — الموقع هياخدهم تلقائي

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp']

function GalleryPhoto({ id, placeholder }) {
  const [extIndex, setExtIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    if (extIndex < EXTENSIONS.length - 1) {
      setExtIndex(extIndex + 1)
    } else {
      setFailed(true)
    }
  }

  return (
    <div className="photo-placeholder">
      {!failed ? (
        <img
          src={`/images/photo${id}.${EXTENSIONS[extIndex]}`}
          alt={`صورة ${id}`}
          onError={handleError}
          loading="lazy"
        />
      ) : (
        <span className="placeholder-icon">{placeholder}</span>
      )}
    </div>
  )
}

export default function GallerySection() {
  const placeholders = ['♥', '✦', '☾', '♡']
  const captions = [
    ['أول مرة شفتك فيها'],
    [
      'يمكن البحر هو مكانك المفضل... لكن مكاني المفضل دايمًا هو جنبك. 🤍🌊',
      'في كل موجة حكاية... وأجمل حكاية في حياتي بدأت بيك. 🌊❤️',
      'حتى البحر بهدوءه وجماله... ما عرفش يوصل للي بحسه وأنا معاك. 🤍',
      'يمكن أنت صورت البحر... بس أنت الصورة الأجمل في قلبي. 📸❤️',
      'كل مرة تبص للبحر... افتكر إن فيه حد بيحبك قد اتساعه. 🌊🤍',
      'البحر واسع... لكن قلبي ليك أوسع. ❤️🌊',
      'لو البحر بيريحك... فأنت راحتي كلها. 🤍',
      'زي ما البحر ملوش آخر... حبي ليك ملوش آخر. 🌊❤️',
    ],
    ['لحظة مش هتتنسي أبداً'],
    ['وده هيفضل زي ما هو.. بحبك'],
  ]
  const photos = captions.map((caption, i) => ({
    id: i + 1,
    caption,
    placeholder: placeholders[i],
  }))

  return (
    <section className="gallery-section" id="gallery">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">معرض ذكرياتنا</span>
        <h2 className="section-title">لحظات لا تُنسى</h2>
        <p className="section-subtitle">كل صورة بتحكي قصة حب لوحدها</p>
      </motion.div>

      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="gallery-card"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <GalleryPhoto id={photo.id} placeholder={photo.placeholder} />
            <div className="photo-caption">
              {photo.caption.map((line, li) => (
                <span key={li}>
                  {line}
                  {li < photo.caption.length - 1 && <br />}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
