import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../hooks/use-counter/useCounter";

describe("useCounter", () => {
  it("should render intital count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  it("should accept and render same intital count", () => {
    const initial = 10;
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: initial,
      },
    });
    expect(result.current.count).toBe(initial);
  });
 
  it("should increment count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

   it("should decrement count", () => {
     const { result } = renderHook(useCounter);
     act(() => result.current.decrement());
     expect(result.current.count).toBe(-1);
   });
});
