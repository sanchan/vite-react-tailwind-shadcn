import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Vite + React + Tailwind v4 + shadcn/ui</CardTitle>
          <CardDescription>
            A modern React setup with the latest versions
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="text-center">
            <p className="text-2xl font-semibold mb-4">Count: {count}</p>
            <Button onClick={() => setCount((count) => count + 1)}>
              Increment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
