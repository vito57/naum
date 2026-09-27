import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LockIcon } from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function FrontDoor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Входная дверь</CardTitle>
        <CardDescription>Smart Lock Pro</CardDescription>
        <CardAction>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Заперто
            <LockIcon />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-muted bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--border)_10px,var(--border)_11px)]">
          <Badge variant="destructive" className="absolute top-2 right-2">
            В эфире
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
