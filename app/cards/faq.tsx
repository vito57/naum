"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const GENERAL_QUESTIONS = [
  {
    q: "Насколько безопасны мои финансовые данные в Ledger?",
    a: "Мы используем банковское шифрование AES-256, инфраструктуру с сертификацией SOC 2 Type II и никогда не храним ваши учётные данные. Все подключения работают через токены доступа только для чтения. Мы — инвестиционный консультант, зарегистрированный в SEC.",
  },
  {
    q: "Как подключить свой банк или инвестиционные счета?",
    a: "Перейдите в Настройки > Подключённые счета и найдите своё учреждение. Через Plaid и MX мы поддерживаем более 12 000 банков и брокеров.",
  },
  {
    q: "Можно ли экспортировать данные для налоговой?",
    a: "Да. Перейдите в Отчёты > Налоговый экспорт, чтобы скачать сводку в формате CSV или PDF по операциям, дивидендам и приросту капитала за любой налоговый год.",
  },
]

const BILLING_QUESTIONS = [
  {
    q: "Чем отличаются тарифы Basic и Pro?",
    a: "Basic включает бюджетирование, отслеживание целей и до 3 подключённых счетов. Pro добавляет неограниченное число счетов, отслеживание дивидендов, анализ портфеля и приоритетную поддержку.",
  },
  {
    q: "Как отменить подписку?",
    a: "Перейдите в Настройки > Оплата > Управление тарифом и нажмите «Отменить». Доступ сохранится до конца текущего периода оплаты.",
  },
  {
    q: "Есть ли бесплатный пробный период?",
    a: "Да. Все новые аккаунты начинают с 14-дневного пробного периода Pro. Банковская карта не требуется.",
  },
]

const GOALS_QUESTIONS = [
  {
    q: "Как создать свою финансовую цель?",
    a: "Нажмите «Новая цель» в карточке «Цели накопления». Выберите категорию, укажите сумму и дату — мы рассчитаем необходимый ежемесячный взнос.",
  },
  {
    q: "Можно ли отслеживать несколько целей одновременно?",
    a: "Да. Аккаунты Pro позволяют отслеживать неограниченное число целей. Аккаунты Basic поддерживают до 3 активных целей.",
  },
  {
    q: "Как рассчитываются ежемесячные взносы?",
    a: "Мы делим оставшуюся сумму на количество месяцев до целевой даты с учётом вашей текущей нормы накоплений и графика автопереводов.",
  },
]

function QuestionList({
  questions,
}: {
  questions: { q: string; a: string }[]
}) {
  return (
    <Accordion defaultValue={[0]}>
      {questions.map((item, index) => (
        <AccordionItem key={index} value={index}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export function Faq() {
  return (
    <Card>
      <CardContent>
        <Tabs defaultValue="general">
          <TabsList className="w-full">
            <TabsTrigger value="general" className="flex-1">
              Общее
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex-1">
              Оплата
            </TabsTrigger>
            <TabsTrigger value="goals" className="flex-1">
              Цели
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <QuestionList questions={GENERAL_QUESTIONS} />
          </TabsContent>
          <TabsContent value="billing">
            <QuestionList questions={BILLING_QUESTIONS} />
          </TabsContent>
          <TabsContent value="goals">
            <QuestionList questions={GOALS_QUESTIONS} />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Связаться с поддержкой
        </Button>
        <Button variant="link" className="w-full">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  )
}
