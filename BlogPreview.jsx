import React from 'react'

const posts = [
  {id:1,title:'Lancement de la boutique',excerpt:'Nous lançons El Badji Shop...'},
  {id:2,title:'Tendances 2025',excerpt:'Couleurs, matières...'},
]

export default function BlogPreview(){
  return (
    <div id="blog">
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map(p=>(
          <article key={p.id} className="p-4 border rounded bg-white">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
