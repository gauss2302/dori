"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatPrice } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";



const Cart = () => {

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const itemCount = 3;

  return (
    <Sheet>
      <SheetTrigger className={"group -m-2 flex items-center p-2"}>
      
        <ShoppingCart aria-hidden={true} className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500">
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          {/* {isMounted ? itemCount : 0} */}

          hey
        </span>
        </ShoppingCart>
      </SheetTrigger>
      <SheetContent className={"flex w-full flex-col pr-0 sm:max-w-lg"}>
        <SheetHeader className={"className='flex w-full flex-col pr-0 sm:max-w-lg'"}>
          <SheetTitle>Корзина ({itemCount})</SheetTitle>
          <SheetDescription>
           Здесь будут все товары, которые вы добавите в корзину
          </SheetDescription>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
          <div className="flex w-full flex-col pr-6">
              Cart items
          </div>
          <div className="space-y-4 pr-6">
            <Separator/>
          
          <div className="space-y-1.5 pr-6">
              <div className="flex">
                <span className="flex-1">Доставка</span>
                <span>Цена {formatPrice(10000)}</span>
              </div>
              <div className="flex">
                <span className="flex-1">Сервис</span>
                <span>{formatPrice(1000)}</span>
              </div>
              </div>
          </div>
          </>) : (
          <div>Другое условие</div>
          )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart
