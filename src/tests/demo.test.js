test("should be true", () => {
  const isActive = true;
  if (isActive) {
    throw new Error("no esta activo");
  }
});
