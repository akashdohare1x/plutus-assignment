/**
 * In Error handling we have two possible paths either a computation succeeds or fails.
 * The imperative way to control the flow is using exceptions and a try/catch block.
 * In functional programming they recognized that those two paths ok or error can be joined into a structure
 * that signifies one or the other as a possibility and so we can unify them into an Either <ok,error> structure.
 * So Either monad represent two states in this case Left(OK) and Right(error)
 */
export type Either<L, R> = Left<L> | Right<R>;
export class Left<L> {
  constructor(private readonly value: L) {}
  public getValue() {
    return this.value;
  }
}

export class Right<R> {
  constructor(private readonly value: R) {}
  public getValue() {
    return this.value;
  }
}

export function caseOf<L, R>(
  value: Either<L, R>,
  block: { left: (x: L) => void; right: (x: R) => void }
) {
  const { left, right } = block;
  const unwrappedValue = value.getValue();

  if (value instanceof Left) return left(unwrappedValue as L);
  else if (value instanceof Right) return right(unwrappedValue as R);
}
