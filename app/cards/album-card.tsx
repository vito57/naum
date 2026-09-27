import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function AlbumCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Aleksandr-vasiliev-2010-07-30a.jpg"
            alt="Обложка альбома Synthetic Horizons EP"
            className="aspect-square w-full object-cover"
          />
          <Badge className="absolute top-3 right-3">$26,033.79</Badge>
        </div>
        <div className="flex flex-col gap-1">
          <CardTitle>Synthetic Horizons EP</CardTitle>
          <CardDescription className="text-xs tracking-wider uppercase">
            Выпущено 14 авг. 2023
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Separator />
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs tracking-wider text-muted-foreground uppercase">
              Треки
            </span>
            <span className="text-lg font-medium tabular-nums">6 треков</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="line-clamp-1 text-xs tracking-wider text-muted-foreground uppercase">
              Всего прослушиваний
            </span>
            <span className="text-lg font-medium tabular-nums">6,198,524</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
