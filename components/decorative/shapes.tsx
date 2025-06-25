import { cn } from "@/lib/utils"

interface ShapeProps {
  className?: string
}

export function Circle({ className }: ShapeProps) {
  return <div className={cn("rounded-full", className)} />
}

export function Square({ className }: ShapeProps) {
  return <div className={cn("", className)} />
}

export function Triangle({ className }: ShapeProps) {
  return <div className={cn("w-0 h-0 border-solid border-transparent", className)} />
}

export function Blob({ className }: ShapeProps) {
  return (
    <div className={cn("", className)}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          fill="currentColor"
          d="M45.7,-59.2C59.9,-51.8,72.5,-39.5,77.9,-24.5C83.3,-9.6,81.6,8,74.6,22.1C67.6,36.2,55.3,46.8,41.6,53.9C27.9,61,13.9,64.5,-0.7,65.4C-15.3,66.3,-30.6,64.6,-43.9,57.2C-57.2,49.8,-68.5,36.7,-73.5,21.3C-78.5,5.9,-77.2,-11.8,-70.2,-26.5C-63.2,-41.2,-50.5,-52.9,-36.8,-60.3C-23.1,-67.7,-8.4,-70.8,3.9,-75.9C16.1,-81,32.2,-88.1,45.7,-59.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  )
}

export function DotsPattern({ className }: ShapeProps) {
  return (
    <div className={cn("opacity-10", className)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="evenDots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#evenDots)" />
      </svg>
    </div>
  )
}

export function GridPattern({ className }: ShapeProps) {
  return (
    <div className={cn("opacity-10", className)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="evenGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#evenGrid)" />
      </svg>
    </div>
  )
}

export function DiagonalLines({ className }: ShapeProps) {
  return (
    <div className={cn("opacity-10", className)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonalLines" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0,20 L20,0" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
      </svg>
    </div>
  )
}

export function Hexagons({ className }: ShapeProps) {
  return (
    <div className={cn("opacity-10", className)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="28" height="24" patternUnits="userSpaceOnUse">
            <polygon points="14,2 22,7 22,17 14,22 6,17 6,7" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  )
}
