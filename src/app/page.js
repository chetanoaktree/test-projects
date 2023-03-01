import { Suspense } from "react";
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Dashboard from "@/modules/pages/Home";

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const data = await getData();
  return (
    <Suspense fallback={<p>Home...</p>}>
      <Dashboard data={data}/>
    </Suspense>
  )
}

async function getData() {
  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=10
  const res = await fetch('https://www.pokemon.com/us/api/pokedex/kalos');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}