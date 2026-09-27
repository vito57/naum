"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import {
  CalendarIcon,
  ChevronRightIcon,
  GaugeIcon,
  MoreHorizontalIcon,
  RefreshCwIcon,
  RepeatIcon,
} from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function Payments() {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={<Button size="icon-sm" variant="ghost" />}
                >
                  <MoreHorizontalIcon />
                  <span className="sr-only">Параметры аккаунта</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Профиль</DropdownMenuItem>
                    <DropdownMenuItem>Выписки</DropdownMenuItem>
                    <DropdownMenuItem>Документы</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Платежи</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          <Item variant="muted" render={<a href="#" />}>
            <ItemMedia variant="icon">
              <GaugeIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Изменить лимит перевода</ItemTitle>
              <ItemDescription>
                Настройте, сколько можно отправить с вашего баланса.
              </ItemDescription>
            </ItemContent>
            <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
          </Item>
          <Item variant="muted" render={<a href="#" />}>
            <ItemMedia variant="icon">
              <CalendarIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Запланированные переводы</ItemTitle>
              <ItemDescription>
                Назначьте перевод на более позднюю дату.
              </ItemDescription>
            </ItemContent>
            <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
          </Item>
          <Item variant="muted" render={<a href="#" />}>
            <ItemMedia variant="icon">
              <RepeatIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Прямые списания</ItemTitle>
              <ItemDescription>
                Настройте регулярные платежи и управляйте ими.
              </ItemDescription>
            </ItemContent>
            <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
          </Item>
          <Item variant="muted" render={<a href="#" />}>
            <ItemMedia variant="icon">
              <RefreshCwIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Повторяющиеся платежи по карте</ItemTitle>
              <ItemDescription>
                Управляйте повторяющимися операциями по карте.
              </ItemDescription>
            </ItemContent>
            <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
          </Item>
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
