"use client"

import { Bar, BarChart, XAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
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
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Item, ItemContent, ItemDescription } from "@/components/ui/item"
// import { useDesignSystemSearchParams } from "@/app/(app)/create/lib/search-params"

const chartData = [
  { month: "Дек", amount: 800 },
  { month: "Янв", amount: 1100 },
  { month: "Фев", amount: 900 },
  { month: "Мар", amount: 1300 },
  { month: "Апр", amount: 750 },
  { month: "Май", amount: 1400 },
]

const chartConfig = {
  amount: {
    label: "Взносы",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ContributionHistory() {
  // const [params] = useDesignSystemSearchParams()
  // const isRounded = !["lyra", "sera"].includes(params.style)

  return (
    <Card>
      <CardHeader>
        <CardTitle>История взносов</CardTitle>
        <CardDescription>Активность за последние 6 месяцев</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 0, right: 0, top: 8, bottom: 0 }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="min-w-40" />}
            />
            <Bar
              dataKey="amount"
              fill="var(--color-amount)"
              radius={[6, 6, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardContent>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          <Item variant="muted" className="flex-col items-stretch">
            <ItemContent className="gap-1">
              <ItemDescription className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Запланировано
              </ItemDescription>
              <span className="cn-font-heading text-lg font-semibold">
                25 мая 2024
              </span>
              <span className="text-sm text-muted-foreground">
                $1,000 запланировано
              </span>
            </ItemContent>
          </Item>
          <Item variant="muted" className="flex-col items-stretch">
            <ItemContent className="gap-1">
              <ItemDescription className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                План автонакопления
              </ItemDescription>
              <span className="cn-font-heading text-lg font-semibold">
                Ускоренный
              </span>
              <span className="text-sm text-muted-foreground">
                Еженедельно
              </span>
            </ItemContent>
          </Item>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Смотреть полный отчёт</Button>
      </CardFooter>
    </Card>
  )
}
