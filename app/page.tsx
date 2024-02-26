import SEO from "@/components/SEO";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href={"/colors"}>
        <Button>COLORS</Button>
      </Link>
    </main>
  );
}
