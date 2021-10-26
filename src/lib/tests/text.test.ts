import { textTestData } from "./data/text";
import { WizData } from "../WizData";

textTestData.forEach((d, i) => {
  test("textTestData: text to wizData object test:" + i, () => {
    const wizData: WizData = WizData.fromText(d.inputText);

    expect(wizData.input).toBe(d.inputText);

    expect(wizData.bytes.length).toBe(d.byteLength);
    expect(wizData.bin.length / 8).toBe(d.byteLength);
    expect(wizData.hex.length / 2).toBe(d.byteLength);

    expect(wizData.bin).toBe(d.binValue);
    expect(wizData.hex).toBe(d.hexValue);
    expect(wizData.number).toBe(d.numberValue);
    expect(wizData.text).toBe(d.inputText);
  });
});
