import { WizData } from "./WizData";
import { mockDataBin, mockDataHex, mockDataNumber, mockDataText } from "./tests/data/WizData.data";

test("Initial hex input test", () => {
  mockDataHex.forEach((item) => {
    const hexInput = item.input;
    const hexData = WizData.fromHex(hexInput);
  
    expect(hexData.bin).toEqual(item.bin);
    expect(hexData.input.toString().substr(2)).toEqual(hexInput);
    expect(hexData.bytes.length).toEqual(item.byteLength);
    expect(hexData.hex).toEqual(item.hex);
    expect(hexData.number).toEqual(item.number);
    expect(hexData.text).toEqual(undefined);
  });
});

test("initial binary input test", () => {
  mockDataBin.forEach((item) => {
    const binInput = item.input;
    const binData = WizData.fromBin(binInput);
  
    expect(binData.bin).toEqual(binInput);
    expect(binData.input.toString().substr(2)).toEqual(binInput);
    expect(binData.bytes.length).toEqual(item.byteLength);
    expect(binData.hex).toEqual(item.hex);
    expect(binData.number).toEqual(item.number);
    expect(binData.text).toEqual(undefined);
  });
});

test("initial number input test", () => {
  mockDataNumber.forEach((item) => {
    const numberInput = item.input;
    const numberData = WizData.fromNumber(numberInput);
    
    expect(numberData.bin).toEqual(item.bin);
    expect(numberData.input).toEqual(numberInput);
    expect(numberData.bytes.length).toEqual(item.byteLength);
    expect(numberData.hex).toEqual(item.hex);
    expect(numberData.number).toEqual(item.number);
    expect(numberData.text).toEqual(undefined);
  });
});

test("initial text input test", () => {
  mockDataText.forEach((item) => {
    const textInput = item.input;
    const textData = WizData.fromText(textInput);
    
    expect(textData.bin).toEqual(item.bin);
    expect(textData.input).toEqual(textInput);
    expect(textData.bytes.length).toEqual(item.byteLength);
    expect(textData.hex).toEqual(item.hex);
    expect(textData.number).toEqual(item.number);
    expect(textData.text).toEqual(textInput);
  });
});

test("initial byte input test", () => {
  const byteInput = [4,221];
  const byteInputUInt8Array = new Uint8Array(byteInput);
  const byteData = WizData.fromBytes(byteInputUInt8Array);

  expect(byteData.bin).toEqual("1101110100000100");
  expect(byteData.input).toEqual(byteInputUInt8Array);
  expect(byteData.bytes).toEqual(byteInputUInt8Array);
  expect(byteData.hex).toEqual("04dd");
  expect(byteData.number).toEqual(-23812);
  expect(byteData.text).toEqual(undefined);
});

