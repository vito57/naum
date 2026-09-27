"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { AlertCircleIcon, ArrowRightIcon, LockKeyholeIcon } from "lucide-react"

export function AccountAccess() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Доступ к аккаунту</CardTitle>
        <CardDescription>
          Обновите данные доступа или пройдите повторную аутентификацию.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email-address">
              Адрес электронной почты
            </FieldLabel>
            <Input
              id="email-address"
              type="email"
              defaultValue="artist@studio.inc"
            />
          </Field>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="current-password">
                Текущий пароль
              </FieldLabel>
              <a
                href="#"
                className="text-xs font-medium tracking-wider text-muted-foreground uppercase hover:text-foreground"
              >
                Забыли?
              </a>
            </div>
            <Input
              id="current-password"
              type="password"
              defaultValue="password123"
            />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button className="w-full">
          <LockKeyholeIcon />
          Обновить настройки безопасности
        </Button>
        <Item variant="muted" render={<a href="#" />}>
          <ItemMedia variant="icon">
            <AlertCircleIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Опасная зона</ItemTitle>
            <ItemDescription className="line-clamp-1">
              Архивировать аккаунт и удалить каталог
            </ItemDescription>
          </ItemContent>
          <ArrowRightIcon />
        </Item>
      </CardFooter>
    </Card>
  )
}
