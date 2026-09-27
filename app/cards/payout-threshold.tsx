"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { XIcon } from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

const CURRENCIES = [
  { label: "USD — Доллар США", value: "usd" },
  { label: "EUR — Евро", value: "eur" },
  { label: "GBP — Фунт стерлингов", value: "gbp" },
  { label: "JPY — Японская иена", value: "jpy" },
]

export function PayoutThreshold() {
  const [amount, setAmount] = React.useState([2500])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Порог выплаты</CardTitle>
        <CardDescription>
          Укажите минимальный остаток, при котором запускается выплата.
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm" className="bg-muted">
            <XIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="preferred-currency">
              Предпочитаемая валюта
            </FieldLabel>
            <Select items={CURRENCIES} defaultValue="usd">
              <SelectTrigger id="preferred-currency" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {CURRENCIES.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <div className="flex items-baseline justify-between">
              <FieldLabel htmlFor="min-payout">
                Минимальная сумма выплаты
              </FieldLabel>
              <span className="text-2xl font-semibold tabular-nums">
                ${amount[0].toFixed(2)}
              </span>
            </div>
            <Slider
              id="min-payout"
              value={amount}
              onValueChange={(value) =>
                setAmount(Array.isArray(value) ? [...value] : [value])
              }
              min={50}
              max={10000}
              step={50}
            />
            <div className="flex items-center justify-between">
              <FieldDescription>$50 (МИН)</FieldDescription>
              <FieldDescription>$10 000 (МАКС)</FieldDescription>
            </div>
          </Field>
          <Field>
            <FieldLabel htmlFor="payout-notes">Примечания</FieldLabel>
            <Textarea
              id="payout-notes"
              placeholder="Добавьте примечания к этой конфигурации выплат..."
              className="min-h-[100px]"
            />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Сохранить порог</Button>
      </CardFooter>
    </Card>
  )
}
