/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x5lhlKO652L
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import GridImage from "./grid-image"

export default function Deyoung() {
  return (
    <div className="bg-white">
      <header className="bg-[#fff] pt-8 pb-8">
        <div className="container items-center mx-auto flex justify-between">
       <img className="h-20"src="images/deyoung-logo.png" alt="deyoungmuseum-logo"></img>
          <nav className="hidden md:flex items-center space-x-4">
            <a className="text-black hover:underline" href="#">
              Visit
            </a>
            <a className="text-black hover:underline" href="#">
              What's on
            </a>
            <a className="text-black hover:underline" href="#">
              Membership
            </a>
            <a className="text-black hover:underline" href="#">
              Shop
            </a>
            <a className="text-black hover:underline" href="#">
              About
            </a>
            <Button className="bg-black text-white">Get tickets</Button>
          </nav>
          <img class="md:hidden  h-6 xl:hidden"src="images/hamburger-deyoung.png" alt="hamburger-menu-icon"></img>

        </div>
      </header>
      <main>
        <section className="relative">
          <img
            alt="Lunar New Year Banner"
            className="w-full"
            height="400"
            src="images/banner-1.png"
            style={{
              aspectRatio: "1280/600",
              objectFit: "cover",
            }}
            width="1280"
          />

        </section>



        <section className="py-20">
          <div className="container mx-20">
            <h3 className="text-3xl font-bold mb-4">San Francisco's
              2024 Lunar Beginnings / Jan 21st - Feb 20th</h3>
            <div className="grid grid-cols-3 gap-4" />
          </div>
          <div className=" pl-20">
            <p className="text-gray-700 text-xl">
              "A amazing dive into Chinese culture and digital art. The work of these artists are in fact a must need
              appreciation." - Jhon Doe, Secret San Francisco.
            </p></div>
        </section>

        <section className="pt-0 pb-20 pl-20">
          <div className="container ">
            <h3 className="text-3xl font-bold mb-4">Gallery</h3>
            <div className="grid grid- md:grid-cols-3 lg:grid-cols-4 gap-2">
              <GridImage src="images/dragon1.jpg" alt="Bird 1" rows={2} />
              <GridImage src="images/dragon2.jpg" alt="Bird 2" rows={2} />
              <GridImage src="images/dragon3.jpg" alt="Bird 3" />
              <GridImage src="images/dragon4.jpg" alt="Bird 4" />
              <GridImage src="images/dragon6.jpg" alt="Bird 6" rows={1} cols={2} />
              <GridImage src="images/dragon5.jpg" alt="Bird 5" rows={1} cols={2} />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-20">
            <h3 className="text-3xl font-bold mb-4">In the news</h3>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
              <p className="text-gray-700 text-xl">
                "A amazing dive into Chinese culture and digital art. The work of these artists are in fact a must need
                appreciation." <span className="italic">- Jhon Doe, Secret San Francisco.</span>
              </p>
              <p className="text-gray-700 text-xl">
                "Vibrant testament to creativity and tradition." <span className="italic">- Jane Roe, Secret San Francisco.</span>
              </p>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-20">
            <h3 className="text-3xl font-bold mb-4">Shop</h3>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
              <div>
                <img
                  alt="Lunar Beginnings Flatiron Poster 16x24"
                  className="w-full"
                  height="200"
                  src="images/poster-deyoung.jpg"
                  style={{

                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="mt-2">
                  <p>Lunar Beginnings Flatiron Poster 16x24</p>
                  <p>$25</p>
                  <Button className="mt-2">Buy</Button>
                </div>
              </div>
              <div>
                <img
                  alt="Transamerica Building & Dragon Tote Bag"
                  className="w-full"
                  height="200"
                  src="images/black-bag.jpg"
                  style={{

                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="mt-2">
                  <p>Transamerica Building & Dragon Tote Bag</p>
                  <p>$28</p>
                  <Button className="mt-2">Buy</Button>
                </div>
              </div>
              <div>
                <img
                  alt="De Young Museum - Dragon's Embrace 2024 Illustrated Book"
                  className="w-full"
                  height="200"
                  src="images/book.jpg"
                  style={{

                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="mt-2">
                  <p>De Young Museum - Dragon's Embrace 2024 Illustrated Book</p>
                  <p>$30</p>
                  <Button className="mt-2">Buy</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-zinc-300 text-black p-4">
        <div className="container mx-auto grid grid-cols-3 gap-4 py-20">
          <div>
            <h4 className="font-bold">de Young</h4>
            <p>50 Hagiwara Tea Garden Drive</p>
            <p>Golden Gate Park</p>
            <p>San Francisco, CA 94118</p>
            <p>Open Tuesday - Sunday</p>
            <p>9:30 am - 5:15 pm</p>
          </div>
          <div>
            <h4 className="font-bold">Legion of Honor</h4>
            <p>Lincoln Park</p>
            <p>100 34th Avenue at Clement Street</p>
            <p>San Francisco, CA 94121</p>
            <p>Open Tuesday - Sunday</p>
            <p>9:30 am - 5:15 pm</p>
          </div>
          <div>
            <h4 className="font-bold">Follow Us</h4>
            <div className="flex space-x-2">
              <a className="hover:underline" href="#">
                Facebook
              </a>
              <a className="hover:underline" href="#">
                Twitter
              </a>
            </div>
            <h4 className="font-bold mt-4">Get fresh perspectives on art.</h4>
            <a className="hover:underline" href="#">
              Sign up for our newsletter
            </a>
            <h4 className="font-bold mt-4">Privacy and Policy</h4>
          </div>
        </div>
        <div className="text-sm text-center mt-4 pb-6">
          <p>©2024 Fine Arts Museums of San Francisco</p>
        </div>
      </footer>
    </div>
  )
}

