import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PerksCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold">Perks</CardTitle>
        <Button variant="ghost" size="sm" disabled>
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center h-[200px] text-center">
          <p className="text-gray-500">You aren't eligible for perks, yet.</p>
        </div>
      </CardContent>
    </Card>
  )
}

