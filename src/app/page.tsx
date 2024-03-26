import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  ArrowDownToLine,
  CheckCircle,
  ChevronsUp,
  Leaf,
  Pill,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";

const perks = [
  {
    name: "Быстрая Доставка",
    Icon: ChevronsUp,
    description:
      "Доставка до двери в течение 30 минут. Наши курьеры бережно и вовремя доставят все необходимые лекарства",
  },
  {
    name: "Лучшее качество",
    Icon: CheckCircle,
    description:
      "Все лекарства из проверенных временем производителей. Мировое качество по доступным ценам",
  },
  {
    name: "Лучшее людям",
    Icon: Leaf,
    description: "Делаем Вас здоровыми для стастливой жизни.",
  },
  {
    name: "Большой выбор лекарств",
    Icon: Pill,
    description: "Лекарствва",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div
          className={
            "py-20 mx-auto text-center flex flex-col items-center max-w-3xl"
          }
        >
          <h1
            className={
              "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            }
          >
            Твой уголок здоровья и заботы {``}
            <span className={"text-blue-500"}>о себе и семье</span>
          </h1>

          {/*<Image src={"/images/Dori.png"} alt={"Logo"} width={128} height={128} />*/}
          <p className={"mt-6 text-lg max-w-prose text-muted-foreground"}>
            Покупай лекарства с пользой
          </p>
          <div className={"flex flex-col sm:flex-row gap-4 mt-6"}>
            <Link href={"/products"} className={buttonVariants()}>
              Глянуть лекарства
            </Link>
            <Button variant={"ghost"}>Что мы делаем &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className={"border-t border-gray-200 bg-gray-50"}>
        {/* border-t border-gray-200 bg-gray-50

    'grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'
            */}
        <MaxWidthWrapper className={"py-20-auto"}>
          <div
            className={
              "grid grid-cols-1 gap-y-12 m-4 sm:grid-cols-2 sm:gap-x-10"
            }
          >
            {perks.map((perk) => (
              <div
                key={perk.name}
                className={
                  "text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                }
              >
                <div className={"md:flex-shrink-0 flex justify-center"}>
                  <div
                    className={
                      "h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900"
                    }
                  >
                    {<perk.Icon className={"w-1/3 h-1/3"} />}
                  </div>
                </div>

                <div className={"mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6"}>
                  <h3 className={"text-base font-medium text-gray-900"}>
                    {perk.name}
                  </h3>
                  <p className={"mt-3 text-sm text-muted-foreground"}>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
