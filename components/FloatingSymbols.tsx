import Image from "next/image";
import gear from "@/assets/icon1.png";
import python from "@/assets/symbol-python.png";
import postman from "@/assets/symbol-postman.png";
import dotnet from "@/assets/symbol-dotnet.png";
import ai from "@/assets/symbol-ai.png";
import php from "@/assets/symbol-php.png";

const symbols = [
  { name: "gear", image: gear },
  { name: "python", image: python },
  { name: "postman", image: postman },
  { name: "dotnet", image: dotnet },
  { name: "ai", image: ai },
  { name: "php", image: php },
];

export default function FloatingSymbols() {
  return (
    <div aria-hidden="true">
      {symbols.map(symbol => (
        <Image
          key={symbol.name}
          src={symbol.image}
          alt=""
          className={`hero-symbol symbol-${symbol.name}`}
          sizes="(max-width: 380px) 72px, (max-width: 760px) 82px, (max-width: 1000px) 90px, 110px"
          quality={90}
        />
      ))}
    </div>
  );
}
