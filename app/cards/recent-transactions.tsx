"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import {
  CarIcon,
  CoffeeIcon,
  MoreHorizontalIcon,
  ShoppingCartIcon,
  TvIcon,
  WalletIcon,
} from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Последние операции</CardTitle>
        <CardDescription>Последние операции в вашем аккаунте.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Смотреть все
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="w-10">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <CoffeeIcon className="size-4 shrink-0" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">Blue Bottle Coffee</span>
                  <span className="text-sm text-muted-foreground">
                    Еда и напитки
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                Сегодня, 10:24
              </TableCell>
              <TableCell className="text-right">
                <span className="text-sm font-semibold tabular-nums">
                  -$6.50
                </span>
              </TableCell>
              <TableCell className="w-8">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="ghost" size="icon-sm" />}
                  >
                    <MoreHorizontalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Подробнее</DropdownMenuItem>
                    <DropdownMenuItem>Добавить заметку</DropdownMenuItem>
                    <DropdownMenuItem>Категоризировать</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Оспорить</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-10">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <ShoppingCartIcon className="size-4 shrink-0" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">Whole Foods Market</span>
                  <span className="text-sm text-muted-foreground">
                    Продукты
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                Вчера
              </TableCell>
              <TableCell className="text-right">
                <span className="text-sm font-semibold tabular-nums">
                  -$142.30
                </span>
              </TableCell>
              <TableCell className="w-8">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="ghost" size="icon-sm" />}
                  >
                    <MoreHorizontalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Подробнее</DropdownMenuItem>
                    <DropdownMenuItem>Добавить заметку</DropdownMenuItem>
                    <DropdownMenuItem>Категоризировать</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Оспорить</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-10">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <WalletIcon className="size-4 shrink-0" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">Выплата Stripe</span>
                  <span className="text-sm text-muted-foreground">Доход</span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                12 окт.
              </TableCell>
              <TableCell className="text-right">
                <span className="text-sm font-semibold text-emerald-500 tabular-nums">
                  +$4,200.00
                </span>
              </TableCell>
              <TableCell className="w-8">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="ghost" size="icon-sm" />}
                  >
                    <MoreHorizontalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Подробнее</DropdownMenuItem>
                    <DropdownMenuItem>Добавить заметку</DropdownMenuItem>
                    <DropdownMenuItem>Категоризировать</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Оспорить</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-10">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <CarIcon className="size-4 shrink-0" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">Uber Technologies</span>
                  <span className="text-sm text-muted-foreground">
                    Транспорт
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                11 окт.
              </TableCell>
              <TableCell className="text-right">
                <span className="text-sm font-semibold tabular-nums">
                  -$24.10
                </span>
              </TableCell>
              <TableCell className="w-8">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="ghost" size="icon-sm" />}
                  >
                    <MoreHorizontalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Подробнее</DropdownMenuItem>
                    <DropdownMenuItem>Добавить заметку</DropdownMenuItem>
                    <DropdownMenuItem>Категоризировать</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Оспорить</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-10">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <TvIcon className="size-4 shrink-0" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">Подписка Netflix</span>
                  <span className="text-sm text-muted-foreground">
                    Развлечения
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                10 окт.
              </TableCell>
              <TableCell className="text-right">
                <span className="text-sm font-semibold tabular-nums">
                  -$19.99
                </span>
              </TableCell>
              <TableCell className="w-8">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="ghost" size="icon-sm" />}
                  >
                    <MoreHorizontalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Подробнее</DropdownMenuItem>
                    <DropdownMenuItem>Добавить заметку</DropdownMenuItem>
                    <DropdownMenuItem>Категоризировать</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Оспорить</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
