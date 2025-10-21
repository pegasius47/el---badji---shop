import React, {useState} from 'react'

export default function ContactForm(){
  const [sent, setSent] = useState(false)
  function handleSubmit(e){
    e.preventDefault()
    // simple demo: does not send anywhere
    setSent(true)
  }
  return (
    <div id="contact">
      {sent ? <div className="p-4 bg-green-50 border">Merci — votre message a été reçu (demo)</div> :
      <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-2">
        <input required placeholder="Nom" className="p-3 border rounded"/>
        <input required type="email" placeholder="Email" className="p-3 border rounded"/>
        <input placeholder="Sujet / Projet" className="p-3 border rounded md:col-span-2"/>
        <textarea required placeholder="Votre message" className="p-3 border rounded md:col-span-2" rows="5"></textarea>
        <button className="px-4 py-2 bg-blue-600 text-white rounded md:col-span-2">Envoyer</button>
      </form>}
    </div>
  )
}
