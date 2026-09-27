"use client"

import { Bar, BarChart, XAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const activityData = [
  { month: "Янв", amount: 40 },
  { month: "Фев", amount: 55 },
  { month: "Мар", amount: 35 },
  { month: "Апр", amount: 60 },
  { month: "Май", amount: 45 },
  { month: "Июнь", amount: 50 },
  { month: "Июдь", amount: 65 },
  { month: "Авг", amount: 40 },
  { month: "Сен", amount: 55 },
  { month: "Окт", amount: 70 },
  { month: "Ноя", amount: 45 },
  { month: "Дек", amount: 80 },
]

const chartConfig = {
  amount: {
    label: "Активность",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function CardOverview() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card>
        <CardContent>
          <CardDescription>Баланс карты</CardDescription>
          <CardTitle className="text-2xl tabular-nums">US$12.94</CardTitle>
          <CardDescription className="tabular-nums">
            Доступно US$11,337.06
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="flex flex-col justify-between">
        <CardContent className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-1">
            <CardDescription>Платёж к оплате</CardDescription>
            <CardTitle className="text-2xl">1 апр.</CardTitle>
          </div>
          <Button variant="outline" size="sm" className="mt-3 w-full">
            Оплатить заранее
          </Button>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <CardDescription>Активность за год</CardDescription>
            <Badge variant="secondary">+US$0.25 ежедневно</Badge>
          </div>
          <ChartContainer config={chartConfig} className="h-20 w-full">
            <BarChart
              data={activityData}
              margin={{ top: 4, right: 0, bottom: 0, left: 0 }}
            >
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={4}
                axisLine={false}
                tickFormatter={(v) => String(v).slice(0, 1)}
                className="text-[10px]"
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="amount"
                fill="var(--color-amount)"
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
