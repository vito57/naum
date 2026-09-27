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
import { PlusIcon } from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function EmptyDistributeTrack() {
  return (
    <Card>
      <CardContent>
        <Empty className="p-4">
          <EmptyMedia variant="icon">
            <PlusIcon />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>Распространить трек</EmptyTitle>
            <EmptyDescription>
              Загрузите свой первый мастер, чтобы начать выходить на
              слушателей в Spotify, Apple Music и других сервисах.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Создать релиз</Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}
