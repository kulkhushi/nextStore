import hero1 from "@/public/images/hero1.jpg"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
const heroCrusal = [hero1,hero1,hero1,hero1,hero1]


const HeroCarousel = () => {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {heroCrusal.map((img, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='p-2'>
                    <Image
                      src={img}
                      alt='hero'
                      className='w-full h-[24rem] rounded-md object-cover'
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default HeroCarousel