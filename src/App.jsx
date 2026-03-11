import FoodCard from './components/FoodCard'
import Navbar from './components/navbar/navbar'
import Carousel from './components/Carousel'
import SearchBar from './components/Searchbar'
import FilterCategory from './components/FilterCategory'

function App() {
  const foods = [
    {
      id: 1,
      title: "Nasi Goreng Spesial",
      price: "25.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 2,
      title: "Soto Ayam",
      price: "18.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 3,
      title: "Sate Ayam",
      price: "22.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 4,
      title: "Gado-Gado",
      price: "15.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 5,
      title: "Nasi Goreng Spesial",
      price: "25.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 6,
      title: "Soto Ayam",
      price: "18.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 7,
      title: "Sate Ayam",
      price: "22.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 8,
      title: "Gado-Gado",
      price: "15.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 9,
      title: "Nasi Goreng Spesial",
      price: "25.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 10,
      title: "Soto Ayam",
      price: "18.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 11,
      title: "Sate Ayam",
      price: "22.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 12,
      title: "Gado-Gado",
      price: "15.000",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaSUyMGdvcmVuZyUyMHNwZWNpYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    }
  ]
  return (
    
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="overflow-x-hidden">
        <Navbar/>
      </div>
      {/* <Carousel /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-2">
        <div className="col-span-6">
          <Carousel/>
        </div>
          <div className="col-span-6">
            <SearchBar/>
          </div>
          <div className="col-span-6">
            <FilterCategory/>
          </div>
      </div>
      {/* <h1 className="text-3xl font-bold text-orange-600 mb-8 mt-12 text-center">Pikmi Food</h1> */}
      
      {/* Grid untuk multiple cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-2">
        {foods.map(food => (
          <FoodCard
            key={food.id}
            title={food.title}
            price={food.price}
            image={food.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App