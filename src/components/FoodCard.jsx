export default function FoodCard({ title, price, image }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 border border-gray-100">
      <img className="w-full h-48 object-cover rounded-xl" src={image} alt={title} />
      
      <div className="py-4">
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p className="text-brand text-blue-600 font-bold text-lg">Rp {price}</p>
      </div>

      <button className="w-full bg-brand bg-white border-2 border-main hover:border-blue-400 hover:bg-blue-400 hover:text-white text-blue-500 font-bold py-3 px-4 rounded-xl transition-all active:scale-95">
        Pesan Sekarang
      </button>
    </div>
  )
}