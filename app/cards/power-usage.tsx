"use client"

import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
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
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
// import { useDesignSystemSearchParams } from "@/app/(app)/create/lib/search-params"

const chartData = [
  { hour: "06:00", usage: 1.2 },
  { hour: "08:00", usage: 2.8 },
  { hour: "10:00", usage: 3.1 },
  { hour: "12:00", usage: 2.4 },
  { hour: "14:00", usage: 3.4 },
  { hour: "16:00", usage: 2.9 },
  { hour: "18:00", usage: 3.8 },
  { hour: "20:00", usage: 3.2 },
]

const chartConfig = {
  usage: {
    label: "Потребление (кВт)",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function PowerUsage() {
  // const [params] = useDesignSystemSearchParams()
  // const isRounded = !["lyra", "sera"].includes(params.style)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Потребление электроэнергии</CardTitle>
        <CardDescription>Весь дом</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ChartContainer config={chartConfig} className="h-[140px] w-full">
          <BarChart
            data={chartData}
            margin={{ left: 0, right: 0, top: 4, bottom: 0 }}
          >
            <XAxis
              dataKey="hour"
              tickLine={false}
              tickMargin={6}
              axisLine={false}
              className="text-xs"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="usage"
              fill="var(--color-usage)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-muted-foreground">
              Сейчас потребляется
            </span>
            <span className="text-lg font-semibold tabular-nums">3.4 кВт</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-muted-foreground">
              Генерация солнечных панелей
            </span>
            <span className="text-lg font-semibold text-chart-1 tabular-nums">
              +1.2 кВт
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <span className="text-sm text-muted-foreground">Заряд батареи</span>
        <div className="flex w-full items-center gap-2">
          <Progress value={85} className="flex-1" />
          <span className="text-sm font-medium tabular-nums">85%</span>
        </div>
      </CardFooter>
    </Card>
  )
}
