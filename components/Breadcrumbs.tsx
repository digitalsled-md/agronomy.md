'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

// Словарь для перевода путей из URL в красивые названия на русском
const routeNames: Record<string, string> = {
  catalog: 'Каталог',
  cart: 'Корзина',
  orders: 'Мои заказы',
  profile: 'Профиль',
  seller: 'Кабинет продавца',
  products: 'Товары',
  login: 'Вход',
  register: 'Регистрация',
  'add-product': 'Добавить товар',
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Если мы на главной странице ('/'), крошки не показываем
  if (!pathname || pathname === '/') return null;

  // Разбиваем путь (например "/seller/products") на массив ["seller", "products"]
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="px-33 py-3.75 max-w-360 text-[15px]">
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link 
            href="/" 
            className="text-[#7E8290] hover:text-[#528731] transition-colors"
          >
            Главная
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          const displayName =
            routeNames[segment] ||
            decodeURIComponent(segment).charAt(0).toUpperCase() + segment.slice(1);

          return (
            <Fragment key={href}>
              <li className="text-[#7E8290] select-none text-[13px]" aria-hidden="true">
                ›
              </li>

              <li>
                {isLast ? (
                  <span className="text-[#313440] font-medium" aria-current="page">
                    {displayName}
                  </span>
                ) : (
                  <Link 
                    href={href} 
                    className="text-[#7E8290] hover:text-[#528731] transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}