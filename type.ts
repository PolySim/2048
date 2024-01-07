export type ListNumber =
  | 0
  | 2
  | 4
  | 8
  | 16
  | 32
  | 64
  | 128
  | 256
  | 512
  | 1024
  | 2048;

export type ScanDirection = "top" | "bottom" | "left" | "right" | "pop" | null;

export type GridType = {
  value: ListNumber;
  translate: ScanDirection;
  numberTranslate: number;
}[][];
