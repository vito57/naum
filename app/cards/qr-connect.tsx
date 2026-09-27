"use client"

import QRCode from "react-qr-code"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function QrConnect() {
  return (
    <Card>
      <CardContent className="flex justify-center pt-6">
        <div className="rounded-xl border bg-white p-4">
          <QRCode
            value="https://ledger.app/connect/jd-4829"
            size={160}
            level="M"
          />
        </div>
      </CardContent>
      <CardHeader className="text-center">
        <CardTitle>Отсканируйте, чтобы подключить мобильное устройство</CardTitle>
        <CardDescription>
          Откройте мобильное приложение Ledger и отсканируйте этот код, чтобы
          связать устройство.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Понятно
        </Button>
      </CardFooter>
    </Card>
  )
}
