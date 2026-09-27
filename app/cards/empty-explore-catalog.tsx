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
import { AudioLinesIcon } from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function EmptyExploreCatalog() {
  return (
    <Card>
      <CardContent>
        <Empty className="p-4">
          <EmptyMedia variant="icon">
            <AudioLinesIcon />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>Изучить каталог</EmptyTitle>
            <EmptyDescription>
              Проверьте коды ISRC, метаданные и визуальные материалы перед
              публикацией.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>Открыть каталог</Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}
