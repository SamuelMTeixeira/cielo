export default function generateArrayNumber(maxNumber: number): number[] {
  return Array.from({ length: maxNumber }, (_, i) => i + 1)
}
