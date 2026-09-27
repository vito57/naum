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
  FieldSeparator,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { XIcon } from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

const CURRENCIES = [
  { label: "USD — Доллар США", value: "usd" },
  { label: "EUR — Евро", value: "eur" },
  { label: "GBP — Фунт стерлингов", value: "gbp" },
  { label: "JPY — Японская иена", value: "jpy" },
]

export function Preferences() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройки</CardTitle>
        <CardDescription>
          Управляйте настройками аккаунта и уведомлениями.
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
            <FieldLabel htmlFor="default-currency">
              Валюта по умолчанию
            </FieldLabel>
            <Select items={CURRENCIES} defaultValue="usd">
              <SelectTrigger id="default-currency" className="w-full">
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
          <FieldSeparator className="style-sera:hidden -my-4" />
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="public-statistics">
                Публичная статистика
              </FieldLabel>
              <FieldDescription>
                Разрешить другим видеть общее число прослушиваний и активность
              </FieldDescription>
            </FieldContent>
            <Switch id="public-statistics" defaultChecked />
          </Field>
          <FieldSeparator className="style-sera:hidden -my-4" />
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="email-notifications">
                Уведомления по электронной почте
              </FieldLabel>
              <FieldDescription>
                Ежемесячные отчёты по гонорарам и обновления выплат
              </FieldDescription>
            </FieldContent>
            <Switch id="email-notifications" defaultChecked />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Сбросить</Button>
        <Button className="ml-auto">Сохранить настройки</Button>
      </CardFooter>
    </Card>
  )
}
