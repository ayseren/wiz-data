import { WizData } from "./WizData";
import { mockDataNumber } from "./tests/data/WizData.data";
import { mockDataHex } from "./tests/data/WizData.data";

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
  const binInput = "11101010";
  const binData = WizData.fromBin(binInput);

  expect(binData.bin).toEqual(binInput);
  expect(binData.input.toString().substr(2)).toEqual(binInput);
  expect(binData.bytes.length).toEqual(1);
  expect(binData.hex).toEqual("ea");
  expect(binData.number).toEqual(-106);
  expect(binData.text).toEqual(undefined);
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
  const textInput = "ayse";
  const textData = WizData.fromText(textInput);
  
  expect(textData.bin).toEqual("01100101011100110111100101100001");
  expect(textData.input).toEqual(textInput);
  expect(textData.bytes.length).toEqual(4);
  expect(textData.hex).toEqual("61797365");
  expect(textData.number).toEqual(1702066529);
  expect(textData.text).toEqual(textInput);
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

