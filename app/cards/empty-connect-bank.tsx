import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { CreditCardIcon } from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function EmptyConnectBank() {
  return (
    <Card>
      <CardContent>
        <Empty className="p-4">
          <EmptyMedia variant="icon">
            <CreditCardIcon />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>Подключить банк</EmptyTitle>
            <EmptyDescription>
              Привяжите способ получения выплат, чтобы ежемесячные выплаты
              гонораров поступали автоматически.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Настроить выплаты</Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}
