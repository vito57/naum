"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

const NOTIFICATIONS = [
  {
    id: "transactions",
    label: "Уведомления об операциях",
    description: "Пополнения, списания и переводы.",
    defaultChecked: true,
  },
  {
    id: "security",
    label: "Оповещения о безопасности",
    description: "Входы в аккаунт и изменения данных.",
    defaultChecked: true,
  },
  {
    id: "goals",
    label: "Достижение целей",
    description: "Обновления на 25%, 50%, 75% и 100%.",
    defaultChecked: false,
  },
  {
    id: "market",
    label: "Обновления рынка",
    description: "Ежедневная сводка по портфелю и оповещения о ценах.",
    defaultChecked: false,
  },
]

export function NotificationSettings() {
  const [checked, setChecked] = React.useState<Record<string, boolean>>(
    Object.fromEntries(NOTIFICATIONS.map((n) => [n.id, n.defaultChecked]))
  )

  const allChecked = NOTIFICATIONS.every((n) => checked[n.id])
  const someChecked = NOTIFICATIONS.some((n) => checked[n.id]) && !allChecked

  const handleSelectAll = (value: boolean) => {
    setChecked(Object.fromEntries(NOTIFICATIONS.map((n) => [n.id, value])))
  }

  const handleToggle = (id: string, value: boolean) => {
    setChecked((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Уведомления</CardTitle>
        <CardDescription>
          Выберите, о чём хотите получать уведомления.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="notify-all"
              checked={allChecked}
              indeterminate={someChecked}
              onCheckedChange={(v) => handleSelectAll(!!v)}
            />
            <FieldContent>
              <FieldLabel htmlFor="notify-all">Выбрать все</FieldLabel>
            </FieldContent>
          </Field>
          {NOTIFICATIONS.map((n) => (
            <Field key={n.id} orientation="horizontal">
              <Checkbox
                id={`notify-${n.id}`}
                checked={checked[n.id]}
                onCheckedChange={(v) => handleToggle(n.id, !!v)}
              />
              <FieldContent>
                <FieldLabel htmlFor={`notify-${n.id}`}>{n.label}</FieldLabel>
                <FieldDescription>{n.description}</FieldDescription>
              </FieldContent>
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Сохранить настройки</Button>
      </CardFooter>
    </Card>
  )
}
