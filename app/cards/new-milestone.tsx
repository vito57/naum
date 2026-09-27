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

export function NewMilestone() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Новая цель</CardTitle>
        <CardDescription>
          Определите финансовую цель, и мы поможем распределить накопления.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="goal-name">Название цели</FieldLabel>
            <Input
              id="goal-name"
              placeholder="например: Новый автомобиль, первый взнос"
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="target-amount">Целевая сумма</FieldLabel>
              <Input id="target-amount" defaultValue="$15,000" />
            </Field>
            <Field>
              <FieldLabel htmlFor="target-date">Целевая дата</FieldLabel>
              <Input id="target-date" defaultValue="Дек 2025" />
            </Field>
          </div>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Создать цель</Button>
        <Button variant="outline" className="w-full">
          Отмена
        </Button>
      </CardFooter>
    </Card>
  )
}
