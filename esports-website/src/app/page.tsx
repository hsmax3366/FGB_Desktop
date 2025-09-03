export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            ESPORTS ELITE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Where legends are born and champions rise. Experience the ultimate competitive gaming platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Join Tournament
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              Watch Live
            </button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* Featured Tournaments */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Championship League",
                game: "League of Legends",
                prize: "$100,000",
                date: "Dec 15-20",
                image: "/api/placeholder/400/250"
              },
              {
                title: "Battle Royale Cup",
                game: "Valorant",
                prize: "$75,000",
                date: "Dec 22-25",
                image: "/api/placeholder/400/250"
              },
              {
                title: "FPS Masters",
                game: "CS2",
                prize: "$50,000",
                date: "Jan 5-10",
                image: "/api/placeholder/400/250"
              }
            ].map((tournament, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{tournament.game}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tournament.title}</h3>
                <p className="text-gray-400 mb-4">{tournament.game}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">{tournament.prize}</span>
                  <span className="text-gray-300">{tournament.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Teams */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Top Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Team Phoenix", rank: "#1", wins: 45, losses: 12 },
              { name: "Shadow Warriors", rank: "#2", wins: 42, losses: 15 },
              { name: "Elite Dragons", rank: "#3", wins: 38, losses: 18 },
              { name: "Cyber Knights", rank: "#4", wins: 35, losses: 20 }
            ].map((team, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{team.rank}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{team.name}</h3>
                <p className="text-gray-400">{team.wins}W - {team.losses}L</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Compete?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of players competing for glory, recognition, and massive prize pools.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
    </main>
  )
}
