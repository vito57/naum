import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function IndexInvesting() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Усреднение по стоимости</CardTitle>
        <CardDescription>
          Стратегия накопления капитала с течением времени.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription className="style-sera:mt-0 mt-3 text-sm leading-relaxed">
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Со временем
          </a>
          , это сглаживает среднюю стоимость ваших инвестиций. Когда цены
          снижаются, ваша фиксированная сумма покупает больше акций. Когда цены
          растут — меньше. В результате средняя стоимость одной акции оказывается
          ниже, чем при единовременном вложении в периоды волатильности.
        </CardDescription>
      </CardContent>
    </Card>
  )
}
