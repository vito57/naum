import { UIElements } from "./cards/1"
import Actions from "./cards/actions"
export default function Page() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto pt-8">
        <div className="columns-2 md:columns-3">
          <UIElements />
          <Actions />
          <Actions />
          <UIElements />
        </div>
      </div>
    </div>
  )
}
