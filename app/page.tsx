// app/page.tsx
import Hero from '@/components/Hero';
import { client } from '@/sanity/lib/client';

async function getVehicles() {
  const query = `*[_type == "vehicle"]{
    _id,
    name,
    tagline,
    topSpeed,
    range,
    chargeTime,
    motorPower,
    "imageUrl": mainImage.asset->url
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function Home() {
  const vehicles = await getVehicles();

  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      
      {/* Dynamic Vehicle Showcase Section */}
      <section id="specs" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center">
          Engineered for Modern Cities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((ev: any) => (
            <div key={ev._id} className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-2xl">
              {ev.imageUrl && (
                <img 
                  src={ev.imageUrl} 
                  alt={ev.name} 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
              )}
              <h3 className="text-2xl font-bold">{ev.name}</h3>
              <p className="text-zinc-400 text-sm mb-6">{ev.tagline}</p>
              
              <div className="grid grid-cols-3 gap-4 border-t border-zinc-800 pt-4 text-center">
                <div>
                  <span className="block text-xl font-bold text-emerald-400">{ev.topSpeed}</span>
                  <span className="text-xs text-zinc-500 uppercase">Top Speed</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-emerald-400">{ev.range}</span>
                  <span className="text-xs text-zinc-500 uppercase">Range</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-emerald-400">{ev.chargeTime}</span>
                  <span className="text-xs text-zinc-500 uppercase">Charge</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}