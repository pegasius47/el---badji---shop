import React, {useState} from 'react'
import Header from './components/Header'
import Products from './components/Products'
import ContactForm from './components/ContactForm'
import BlogPreview from './components/BlogPreview'
import { motion } from 'framer-motion'

export default function App(){
  const [lang, setLang] = useState('fr')
  return (
    <div className="font-poppins text-gray-900">
      <Header lang={lang} setLang={setLang} />
      <main className="max-w-6xl mx-auto px-4 pt-28">
        <section className="mb-12">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-4xl md:text-5xl font-playfair mb-4">El Badji Shop</motion.h1>
          <p className="text-lg">Accessoires · Vêtements · Produits numériques · Cosmétique</p>
        </section>

        <Products />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <BlogPreview />
        </section>

        <section className="mt-12 mb-24">
          <h2 className="text-2xl font-semibold mb-4">Contact / Devis</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="bg-white border-t py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-sm text-center">© {new Date().getFullYear()} El Badji Shop</div>
      </footer>
    </div>
  )
}
