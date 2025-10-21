import React from 'react'

const sample = [
  {id:1,title:'Casquette stylée',price:'15€'},
  {id:2,title:'T-shirt Poppins',price:'22€'},
  {id:3,title:'Pack numérique',price:'9€'},
  {id:4,title:'Sérum cosmétique',price:'28€'},
]

export default function Products(){
  return (
    <section aria-label="catalogue">
      <h2 className="text-2xl font-semibold mb-4">Catalogue</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sample.map(p=>(
          <article key={p.id} className="border rounded p-4 bg-white">
            <div className="h-40 bg-gray-100 mb-3 flex items-center justify-center">image</div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.price}</p>
            <button className="mt-3 px-3 py-2 rounded-md border" aria-label={`Voir ${p.title}`}>Voir</button>
          </article>
        ))}
      </div>
    </section>
  )
}
