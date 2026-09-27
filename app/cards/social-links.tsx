import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { CameraIcon, CirclePlusIcon, CloudIcon, GlobeIcon } from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ссылки на соцсети</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="spotify-url">Ссылка на Spotify</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <CirclePlusIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="spotify-url"
                defaultValue="spotify.com/artist/3j...2k"
              />
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="instagram-handle">Имя в Instagram</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <CameraIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="instagram-handle"
                defaultValue="@julianduryea_music"
              />
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="soundcloud-url">Ссылка на SoundCloud</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <CloudIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="soundcloud-url"
                placeholder="soundcloud.com/username"
              />
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="website-url">Веб-сайт</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <GlobeIcon />
              </InputGroupAddon>
              <InputGroupInput
                id="website-url"
                placeholder="https://yoursite.com"
              />
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="style-sera:justify-center justify-end gap-2">
        <Button variant="secondary" className="style-sera:flex-1">
          Отменить
        </Button>
        <Button className="style-sera:flex-1">Сохранить изменения</Button>
      </CardFooter>
    </Card>
  )
}
