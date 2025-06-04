import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  const handleBook = () => {
    alert('Booking feature coming soon!');
  };

  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb-style listing page scaffolded with Next.js, TailwindCSS, and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Explore Listings</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Modern Apartment"
            description="2 bed · 2 bath · Ocean View"
            imageUrl="/assets/placeholder.jpg"
          />
          <Card
            title="Cozy Studio"
            description="1 bed · 1 bath · Central Location"
            imageUrl="/assets/placeholder.jpg"
          />
          <Card
            title="Luxury Villa"
            description="4 bed · 3 bath · Private Pool"
            imageUrl="/assets/placeholder.jpg"
          />
        </div>

        <div className="flex justify-center mt-10">
          <Button label="Book Now" onClick={handleBook} />
        </div>
      </main>
    </div>
  );
}
