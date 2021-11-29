export const numberTestData = [
  { inputNumber: -2147483650, numberValue: true, byteLength: 5, hexValue: "0200008080", binValue: "1000000010000000000000000000000000000010" },
  { inputNumber: -2147483649, numberValue: true, byteLength: 5, hexValue: "0100008080", binValue: "1000000010000000000000000000000000000001" },
  { inputNumber: -2147483648, numberValue: true, byteLength: 5, hexValue: "0000008080", binValue: "1000000010000000000000000000000000000000" },

  // MIN_INTEGER
  { inputNumber: -2147483647, numberValue: true, byteLength: 4, hexValue: "ffffffff", binValue: "11111111111111111111111111111111" },
  { inputNumber: -2147483646, numberValue: true, byteLength: 4, hexValue: "feffffff", binValue: "11111111111111111111111111111110" },

  { inputNumber: -8388609, numberValue: true, byteLength: 4, hexValue: "01008080", binValue: "10000000100000000000000000000001" },
  { inputNumber: -8388608, numberValue: true, byteLength: 4, hexValue: "00008080", binValue: "10000000100000000000000000000000" },

  { inputNumber: -8388607, numberValue: true, byteLength: 3, hexValue: "ffffff", binValue: "111111111111111111111111" },
  { inputNumber: -8388606, numberValue: true, byteLength: 3, hexValue: "feffff", binValue: "111111111111111111111110" },

  { inputNumber: -32769, numberValue: true, byteLength: 3, hexValue: "018080", binValue: "100000001000000000000001" },
  { inputNumber: -32768, numberValue: true, byteLength: 3, hexValue: "008080", binValue: "100000001000000000000000" },

  { inputNumber: -32767, numberValue: true, byteLength: 2, hexValue: "ffff", binValue: "1111111111111111" },
  { inputNumber: -32766, numberValue: true, byteLength: 2, hexValue: "feff", binValue: "1111111111111110" },
  { inputNumber: -32765, numberValue: true, byteLength: 2, hexValue: "fdff", binValue: "1111111111111101" },

  { inputNumber: -257, numberValue: true, byteLength: 2, hexValue: "0181", binValue: "1000000100000001" },
  { inputNumber: -256, numberValue: true, byteLength: 2, hexValue: "0081", binValue: "1000000100000000" },
  { inputNumber: -255, numberValue: true, byteLength: 2, hexValue: "ff80", binValue: "1000000011111111" },
  { inputNumber: -254, numberValue: true, byteLength: 2, hexValue: "fe80", binValue: "1000000011111110" },

  { inputNumber: -129, numberValue: true, byteLength: 2, hexValue: "8180", binValue: "1000000010000001" },
  { inputNumber: -128, numberValue: true, byteLength: 2, hexValue: "8080", binValue: "1000000010000000" },

  { inputNumber: -127, numberValue: true, byteLength: 1, hexValue: "ff", binValue: "11111111" },
  { inputNumber: -126, numberValue: true, byteLength: 1, hexValue: "fe", binValue: "11111110" },

  { inputNumber: -2, numberValue: true, byteLength: 1, hexValue: "82", binValue: "10000010" },
  { inputNumber: -1, numberValue: true, byteLength: 1, hexValue: "81", binValue: "10000001" },

  { inputNumber: 0, numberValue: true, byteLength: 0, hexValue: "", binValue: "" },

  { inputNumber: 1, numberValue: true, byteLength: 1, hexValue: "01", binValue: "00000001" },
  { inputNumber: 2, numberValue: true, byteLength: 1, hexValue: "02", binValue: "00000010" },

  { inputNumber: 126, numberValue: true, byteLength: 1, hexValue: "7e", binValue: "01111110" },
  { inputNumber: 127, numberValue: true, byteLength: 1, hexValue: "7f", binValue: "01111111" },
  { inputNumber: 128, numberValue: true, byteLength: 2, hexValue: "8000", binValue: "0000000010000000" },
  { inputNumber: 129, numberValue: true, byteLength: 2, hexValue: "8100", binValue: "0000000010000001" },

  { inputNumber: 255, numberValue: true, byteLength: 2, hexValue: "ff00", binValue: "0000000011111111" },
  { inputNumber: 256, numberValue: true, byteLength: 2, hexValue: "0001", binValue: "0000000100000000" },
  { inputNumber: 257, numberValue: true, byteLength: 2, hexValue: "0101", binValue: "0000000100000001" },
  { inputNumber: 258, numberValue: true, byteLength: 2, hexValue: "0201", binValue: "0000000100000010" },

  { inputNumber: 32766, numberValue: true, byteLength: 2, hexValue: "fe7f", binValue: "0111111111111110" },
  { inputNumber: 32767, numberValue: true, byteLength: 2, hexValue: "ff7f", binValue: "0111111111111111" },
  { inputNumber: 32768, numberValue: true, byteLength: 3, hexValue: "008000", binValue: "000000001000000000000000" },
  { inputNumber: 32769, numberValue: true, byteLength: 3, hexValue: "018000", binValue: "000000001000000000000001" },

  { inputNumber: 8388606, numberValue: true, byteLength: 3, hexValue: "feff7f", binValue: "011111111111111111111110" },
  { inputNumber: 8388607, numberValue: true, byteLength: 3, hexValue: "ffff7f", binValue: "011111111111111111111111" },
  { inputNumber: 8388608, numberValue: true, byteLength: 4, hexValue: "00008000", binValue: "00000000100000000000000000000000" },
  { inputNumber: 8388609, numberValue: true, byteLength: 4, hexValue: "01008000", binValue: "00000000100000000000000000000001" },

  { inputNumber: 2147483646, numberValue: true, byteLength: 4, hexValue: "feffff7f", binValue: "01111111111111111111111111111110" },
  { inputNumber: 2147483647, numberValue: true, byteLength: 4, hexValue: "ffffff7f", binValue: "01111111111111111111111111111111" },
  // MAX_INTEGER

  { inputNumber: 2147483648, numberValue: true, byteLength: 5, hexValue: "0000008000", binValue: "0000000010000000000000000000000000000000" },
  { inputNumber: 2147483649, numberValue: true, byteLength: 5, hexValue: "0100008000", binValue: "0000000010000000000000000000000000000001" },
  { inputNumber: 2147483650, numberValue: true, byteLength: 5, hexValue: "0200008000", binValue: "0000000010000000000000000000000000000010" },

  { inputNumber: 1099520016384, numberValue: true, byteLength: 6, hexValue: "000080000001", binValue: "000000010000000000000000100000000000000000000000" },
  { inputNumber: 2199031644160, numberValue: true, byteLength: 6, hexValue: "000080000002", binValue: "000000100000000000000000100000000000000000000000" },

  { inputNumber: 281477124194304, numberValue: true, byteLength: 7, hexValue: "00000080000001", binValue: "00000001000000000000000010000000000000000000000000000000" },
  { inputNumber: 562952100904960, numberValue: true, byteLength: 7, hexValue: "00000080000002", binValue: "00000010000000000000000010000000000000000000000000000000" },

  { inputNumber: 72058143793741824, numberValue: true, byteLength: 8, hexValue: "0000000080000001", binValue: "0000000100000000000000001000000000000000000000000000000000000000" },
  { inputNumber: 144115737831669760, numberValue: true, byteLength: 8, hexValue: "0000000080000002", binValue: "0000001000000000000000001000000000000000000000000000000000000000" },

  {
    inputNumber: 18446884811197906944,
    numberValue: false,
    byteLength: 9,
    hexValue: "000000000080000001",
    binValue: "000000010000000000000000100000000000000000000000000000000000000000000000",
  },
  {
    inputNumber: 36893628884907458560,
    numberValue: false,
    byteLength: 9,
    hexValue: "000000000080000002",
    binValue: "000000100000000000000000100000000000000000000000000000000000000000000000",
  },
];
