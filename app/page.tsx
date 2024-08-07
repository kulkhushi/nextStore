import { Container } from "@/components/global/Container";
import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Container>
      <Hero/>
      <Suspense fallback={<LoadingContainer/>}>
      <FeaturedProducts/>
      </Suspense>
     
    </Container>
  );
}
