"use client"

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
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { XIcon } from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function ReceivingMethod() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Настройки выплат</CardDescription>
        <CardTitle>Способ получения</CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon-sm" className="bg-muted">
            <XIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="account-holder">
              Имя владельца счёта
            </FieldLabel>
            <Input
              id="account-holder"
              defaultValue="Synthetic Horizons Music LLC"
            />
          </Field>
          <FieldSet>
            <FieldLegend variant="label">Способ получения</FieldLegend>
            <RadioGroup
              defaultValue="bank"
              className="style-sera:grid-cols-1 grid grid-cols-1 items-start gap-3 md:grid-cols-2"
            >
              <FieldLabel htmlFor="method-bank">
                <Field orientation="horizontal" className="pb-2.5">
                  <RadioGroupItem value="bank" id="method-bank" />
                  <FieldContent>
                    <FieldTitle>Банковский перевод</FieldTitle>
                    <FieldDescription>SWIFT / IBAN</FieldDescription>
                  </FieldContent>
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="method-paypal">
                <Field orientation="horizontal" className="pb-2.5">
                  <RadioGroupItem value="paypal" id="method-paypal" />
                  <FieldContent>
                    <FieldTitle>PayPal</FieldTitle>
                    <FieldDescription className="line-clamp-1">
                      Мгновенная выплата
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
          <Field>
            <FieldLabel htmlFor="iban">IBAN / Номер счёта</FieldLabel>
            <Input id="iban" placeholder="DE89 3704 0044 ...." />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled>
          Сохранить настройки выплат
        </Button>
      </CardFooter>
    </Card>
  )
}
