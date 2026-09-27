"use client"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { PlusIcon, SearchIcon } from "lucide-react"

export function CatalogToolbar() {
  return (
    <div className="flex items-center gap-3">
      <InputGroup className="flex-1">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Поиск релизов или каталога..." />
      </InputGroup>
      <Button>
        <PlusIcon />
        Загрузить новый релиз
      </Button>
      <ToggleGroup defaultValue={["releases"]} variant="outline">
        <ToggleGroupItem value="all-tracks">Все треки</ToggleGroupItem>
        <ToggleGroupItem value="releases">Релизы</ToggleGroupItem>
        <ToggleGroupItem value="top-earners">Лидеры по доходу</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
