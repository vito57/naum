"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"

const TICKERS = ["VOO", "VIG", "AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"]

const CHART_DATA: Record<string, { month: string; price: number }[]> = {
  VOO: [
    { month: "Янв", price: 412 },
    { month: "Фев", price: 438 },
    { month: "Мар", price: 395 },
    { month: "Апр", price: 450 },
    { month: "Май", price: 420 },
    { month: "Июнь", price: 462 },
  ],
  AAPL: [
    { month: "Янв", price: 185 },
    { month: "Фев", price: 210 },
    { month: "Мар", price: 172 },
    { month: "Апр", price: 198 },
    { month: "Май", price: 178 },
    { month: "Июнь", price: 215 },
  ],
}

const DEFAULT_DATA = [
  { month: "Янв", price: 100 },
  { month: "Фев", price: 118 },
  { month: "Мар", price: 95 },
  { month: "Апр", price: 125 },
  { month: "Май", price: 108 },
  { month: "Июнь", price: 130 },
]

const chartConfig = {
  price: {
    label: "Цена",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function StockPerformance() {
  const [ticker, setTicker] = React.useState("VOO")

  const data = CHART_DATA[ticker] ?? DEFAULT_DATA

  return (
    <Card>
      <CardHeader>
        <CardTitle>Динамика акции</CardTitle>
        <CardDescription>История цены за 6 месяцев.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="ticker-select">Тикер</FieldLabel>
            <Combobox
              items={TICKERS}
              value={ticker}
              onValueChange={(value) => {
                if (value !== null) setTicker(value)
              }}
            >
              <ComboboxInput
                id="ticker-select"
                placeholder="Поиск тикера..."
              />
              <ComboboxContent>
                <ComboboxEmpty>Тикеры не найдены.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
        </FieldGroup>
        <Separator className="style-sera:hidden" />
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{ left: 0, right: 0, top: 8, bottom: 0 }}
          >
            <defs>
              <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-price)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-price)"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="var(--color-price)"
              strokeWidth={2}
              fill="url(#fillPrice)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
