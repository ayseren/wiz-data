import WizData from "./index";

test("Initial hex input test", () => {
  const input = "ffffff";
  const data = WizData.fromHex(input);

  expect(data.bin).toEqual("111111111111111111111111");
  expect(data.input).toEqual(input);
  expect(data.bytes.length).toEqual(3);
  expect(data.hex).toEqual(input);
  expect(data.number).toEqual(-8388607);
  expect(data.text).toEqual(undefined);
});
