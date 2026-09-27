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
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
} from "@/components/ui/item"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Progress } from "@/components/ui/progress"

export function SavingsTargets() {
  return (
    <div className="grid-row-2 grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Цели накопления</CardTitle>
          <CardDescription>Активные ориентиры на 2024 год</CardDescription>
          <CardAction>
            <Button variant="outline" size="sm">
              Новая цель
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <ItemGroup className="gap-3">
            <Item variant="muted" className="flex-col items-stretch">
              <ItemContent className="gap-3">
                <ItemDescription className="cn-font-heading text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Пенсия
                </ItemDescription>
                <span className="text-3xl font-semibold tabular-nums">
                  $420,000
                </span>
                <Progress value={65} />
              </ItemContent>
              <ItemFooter>
                <span className="text-sm text-muted-foreground">
                  65% достигнуто
                </span>
                <span className="text-sm font-medium tabular-nums">
                  $273,000
                </span>
              </ItemFooter>
            </Item>
            <Item variant="muted" className="flex-col items-stretch">
              <ItemContent className="gap-3">
                <ItemDescription className="cn-font-heading text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Недвижимость
                </ItemDescription>
                <span className="text-3xl font-semibold tabular-nums">
                  $85,000
                </span>
                <Progress value={32} />
              </ItemContent>
              <ItemFooter>
                <span className="text-sm text-muted-foreground">
                  32% достигнуто
                </span>
                <span className="text-sm font-medium tabular-nums">
                  $27,200
                </span>
              </ItemFooter>
            </Item>
          </ItemGroup>
        </CardContent>
        <CardFooter>
          <CardDescription className="text-center">
            Вы ещё не достигли своих целей за этот год.
          </CardDescription>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Купить актив</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-3">
          <FieldGroup className="flex-1">
            <Field>
              <FieldLabel htmlFor="invest-amount">Сумма инвестиций</FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput id="invest-amount" defaultValue="1,000.00" />
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="invest-type">Тип заявки</FieldLabel>
              <NativeSelect id="invest-type" defaultValue="market">
                <NativeSelectOption value="market">
                  По рыночной цене
                </NativeSelectOption>
                <NativeSelectOption value="limit">
                  Лимитная заявка
                </NativeSelectOption>
                <NativeSelectOption value="stop">Стоп-заявка</NativeSelectOption>
              </NativeSelect>
              <FieldDescription>
                Рыночные заявки исполняются по текущей цене.
              </FieldDescription>
            </Field>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Расчётное количество акций
                </span>
                <span className="text-sm font-semibold tabular-nums">1.95</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Доступные средства
                </span>
                <span className="text-sm font-semibold tabular-nums">
                  $12,450.00
                </span>
              </div>
            </div>
          </FieldGroup>
        </CardContent>
        <CardFooter className="flex-col gap-3">
          <Button className="w-full">Проверить заявку</Button>
          <CardDescription className="text-center">
            Сделки обычно исполняются в течение нескольких минут в часы работы
            биржи.
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}
