import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Item, ItemContent } from "@/components/ui/item"
import { Separator } from "@/components/ui/separator"

export function ClaimableBalance() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Доступно к выплате</CardDescription>
        <CardTitle className="text-5xl tabular-nums">$0.00</CardTitle>
        <Badge variant="outline">
          <span className="size-2 rounded-full bg-yellow-500" />
          Ожидает настройки
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-end">
        <Item variant="muted" className="flex-col items-stretch">
          <ItemContent className="gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Чистые гонорары
              </span>
              <span className="text-sm font-medium tabular-nums">$0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Комиссия за обработку
              </span>
              <span className="text-sm font-medium tabular-nums">-$0.00</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Всего к получению
              </span>
              <span className="text-sm font-semibold tabular-nums">
                $0.00 USD
              </span>
            </div>
          </ItemContent>
        </Item>
      </CardContent>
      <CardFooter>
        <CardDescription>
          После подключения банка остатки свыше $10.00 автоматически
          участвуют в ежемесячных выплатах 15-го числа каждого месяца.
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
