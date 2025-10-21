import React from 'react'

export default function Header({lang, setLang}){
  return (
    <header className="header-fixed border-b" style={{background:'#0b6eff'}}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <img src="/src/assets/logo/logo-placeholder.svg" alt="logo" className="h-10 w-auto"/>
          <div className="font-playfair text-xl">El Badji Shop</div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:underline">Accueil</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <select value={lang} onChange={e=>setLang(e.target.value)} className="rounded px-2 py-1 text-black">
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>
      </div>
    </header>
  )
}
