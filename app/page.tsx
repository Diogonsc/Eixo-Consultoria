import { ComoAtuamos } from "@/components/como-atuamos"
import { Contato } from "@/components/contato"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Servicos } from "@/components/servicos"
import { Sobre } from "@/components/sobre"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <ComoAtuamos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
