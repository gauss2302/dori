"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { formatPrice } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const Cart = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const itemCount = 0;

  return (
    <Sheet>
      <SheetTrigger className={"group -m-2 flex items-center p-2"}>
        <ShoppingCart
          aria-hidden={true}
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        >
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            {/* {isMounted ? itemCount : 0} */}
          </span>
        </ShoppingCart>
      </SheetTrigger>
      <SheetContent className={"flex w-full flex-col pr-0 sm:max-w-lg"}>
        <SheetHeader
          className={"className='flex w-full flex-col pr-0 sm:max-w-lg'"}
        >
          <SheetTitle>Корзина ({itemCount})</SheetTitle>
          <SheetDescription>
            Здесь будут все товары, которые вы добавите в корзину
          </SheetDescription>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6 font-bold">В корзине</div>
            <div className="space-y-4 pr-6">
              <Separator />

              <div className="space-y-1.5 pr-6">
                <div className="flex">
                  <span className="flex-1">Доставка</span>
                  <span>Цена</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Дифлофинак</span>
                  <span>{formatPrice(100000)}</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Нурофен</span>
                  <span>{formatPrice(20000)}</span>
                </div>
              </div>
            </div>
            <SheetTrigger asChild>
              <div className={"content-center"}>
                <Link
                  href={"/cart"}
                  className={buttonVariants({
                    className: "w-full content-center",
                  })}
                >
                  Перейти к оплате
                </Link>
              </div>
            </SheetTrigger>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            >
              <Image
                src={"/assets/images/hippo-empty-cart.png"}
                fill
                alt="empty shopping cart hippo"
              />
            </div>
            <div className="text-xl font-semibold">Корзина путса</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Начните покупки с удовольствием
              </Link>
            </SheetTrigger>
          </div>
        )}

        {/*src={"/assets/images/hippo-empty-cart.png"}*/}

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
