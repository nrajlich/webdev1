/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x5lhlKO652L
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Deyoung() {
  return (
    <div className="bg-white">
      <header className="bg-[#fff] pt-8 pb-8">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">de Young | Legion of Honor</h1>
          <nav className="flex items-center space-x-4">
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
        </div>
      </header>
      <main>
        <section className="relative">
          <img
            alt="Lunar New Year Banner"
            className="w-full"
            height="400"
            src="images/banner-main2.jpg"
            style={{
              aspectRatio: "1280/600",
              objectFit: "cover",
            }}
            width="1280"
          />
         
        </section>
    
        
              
              <section className="py-8">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">San Francisco's 
            2024 Lunar Beginnings / Jan 21st - Feb 20th</h3>
            <div className="grid grid-cols-3 gap-4" />
          </div>
          <div className=" pl-20">
              <p className="text-gray-700">
                "A amazing dive into Chinese culture and digital art. The work of these artists are in fact a must need
                appreciation." - Jhon Doe, Secret San Francisco.
              </p></div>
        </section>
       
        <section className="py-8">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-4" />
          </div>
        </section>
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">In the news</h3>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-700">
                "A amazing dive into Chinese culture and digital art. The work of these artists are in fact a must need
                appreciation." - Jhon Doe, Secret San Francisco.
              </p>
              <p className="text-gray-700">
                "Vibrant testament to creativity and tradition." - Jane Roe, Secret San Francisco.
              </p>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">Shop</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <img
                  alt="Lunar Beginnings Flatiron Poster 16x24"
                  className="w-full"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
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
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
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
                  src="images/banner-main2.jpg"
                  style={{
                    aspectRatio: "200/200",
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
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto grid grid-cols-3 gap-4">
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
        <div className="text-center mt-4">
          <p>©2024 Fine Arts Museums of San Francisco</p>
        </div>
      </footer>
    </div>
  )}

