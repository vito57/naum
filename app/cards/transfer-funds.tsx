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
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Item, ItemContent } from "@/components/ui/item"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { XIcon } from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

const FROM_ACCOUNTS = [
  { label: "Основной текущий (··8402) — $12,450.00", value: "checking" },
  { label: "Бизнес (··7731) — $8,920.00", value: "business" },
]

const TO_ACCOUNTS = [
  { label: "Накопительный (··1192) — $42,100.00", value: "savings" },
  { label: "Инвестиционный (··3349) — $18,200.00", value: "investment" },
]

export function TransferFunds() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Перевод средств</CardTitle>
        <CardDescription>
          Перемещайте деньги между подключёнными счетами.
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
            <FieldLabel htmlFor="transfer-amount">
              Сумма перевода
            </FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput id="transfer-amount" defaultValue="1,200.00" />
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="from-account">Со счёта</FieldLabel>
            <Select items={FROM_ACCOUNTS} defaultValue="checking">
              <SelectTrigger id="from-account" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {FROM_ACCOUNTS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="to-account">На счёт</FieldLabel>
            <Select items={TO_ACCOUNTS} defaultValue="savings">
              <SelectTrigger id="to-account" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {TO_ACCOUNTS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Item variant="muted" className="flex-col items-stretch">
            <ItemContent className="gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Ожидаемое зачисление
                </span>
                <span className="text-sm font-medium">Сегодня, 14 апр.</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Комиссия за перевод
                </span>
                <span className="text-sm font-medium tabular-nums">$0.00</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Итого</span>
                <span className="text-sm font-semibold tabular-nums">
                  $1,200.00
                </span>
              </div>
            </ItemContent>
          </Item>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Подтвердить перевод</Button>
      </CardFooter>
    </Card>
  )
}
