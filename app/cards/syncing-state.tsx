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
import { Spinner } from "@/components/ui/spinner"

export function SyncingState() {
  return (
    <Card>
      <CardContent className="p-0">
        <Empty className="p-4">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Spinner />
            </EmptyMedia>
            <EmptyTitle>Синхронизация аккаунтов</EmptyTitle>
            <EmptyDescription>
              Мы загружаем последние операции. Обычно это занимает несколько
              секунд.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline">Отмена</Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}
