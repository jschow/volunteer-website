export function rgbStringToHex(rgbString) {
  // Extract numbers using a regular expression
  const rgbValues = rgbString.match(/\d+/g).map(Number);

  // Convert the RGB values to HEX
  const toHex = (value) => value.toString(16).padStart(2, '0');

  // Combine the HEX values
  return `#${toHex(rgbValues[0])}${toHex(rgbValues[1])}${toHex(rgbValues[2])}`;
}

export function getOutline(style) {
  return {
    width: pixelStringToNumber(style.outlineWidth),
    offset: pixelStringToNumber(style.outlineOffset),
  }
}

export function rgbaStringToHex(rgbaString) {
  // rgba(0, 0, 0, 0.07)

  // Extract numbers using a regular expression
  const rgbaValues = rgbaString.match(/\d+(\.\d+)?/g).map(Number);

  const r = rgbaValues[0];
  const g = rgbaValues[1];
  const b = rgbaValues[2];
  const a = rgbaValues[3];

  // Convert the RGB values to HEX
  const toHex = (value) => value.toString(16).padStart(2, '0');
  const alphaToHex = (value) => Math.round(value * 255).toString(16).padStart(2, '0');

  // Combine the HEX values
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${alphaToHex(a)}`;
}

/**
 * @returns {number}
 */
export function pixelStringToNumber(pixelString) {
  return Number(pixelString.replace('px', ''));
}

/**
 * @returns {{left: number, right: number, top: number, bottom: number}}
 */
export function getMargin(style) {
  return {
    left: pixelStringToNumber(style.marginLeft),
    right: pixelStringToNumber(style.marginRight),
    top: pixelStringToNumber(style.marginTop),
    bottom: pixelStringToNumber(style.marginBottom),
  }
}

/**
 * @returns {{size: number, weight: number, lineHeight: number}}
 */
export function getText(style) {
  return {
    size: pixelStringToNumber(style.fontSize),
    weight: Number(style.fontWeight),
    lineHeight: pixelStringToNumber(style.lineHeight),
  }
}

export function getBoxShadow(style) {
  // rgba(0, 0, 0, 0.07) 0px 4px 3px 0px, rgba(0, 0, 0, 0.06) 0px 2px 2px 0px
  const parts = style.boxShadow.split(", rgba").map((part, i) => i === 0 ? part : `rgba${part}`);

  const result = [];

  for (const part of parts) {
    const values = part.match(/rgba\((\d+), (\d+), (\d+), ([\d.]+)\) (\d+)px (\d+)px (\d+)px (\d+)px/);
    result.push({
      color: rgbaStringToHex(`rgba(${values[1]}, ${values[2]}, ${values[3]}, ${values[4]})`),
      x: Number(values[5]),
      y: Number(values[6]),
      blur: Number(values[7]),
      spread: Number(values[8]),
    });
  }

  return result;
}

/**
 * @returns {{width: number, radius: number, style: 'none' | 'solid' | 'dashed' | 'dotted'}}
 */
export function getBorder(style) {
  return {
    width: pixelStringToNumber(style.borderWidth),
    radius: pixelStringToNumber(style.borderRadius),
    style: style.borderStyle,
  }
}

/**
 * @returns {{left: number, right: number, top: number, bottom: number}}
 */
export function getPadding(style) {
  return {
    left: pixelStringToNumber(style.paddingLeft),
    right: pixelStringToNumber(style.paddingRight),
    top: pixelStringToNumber(style.paddingTop),
    bottom: pixelStringToNumber(style.paddingBottom),
  }
}

/**
 * @returns {{background: string, border: string, outline: string, text: string}}
 */
export function getColors(style) {
  return {
    background: rgbStringToHex(style.backgroundColor),
    border: rgbStringToHex(style.borderColor),
    outline: rgbStringToHex(style.outlineColor),
    text: rgbStringToHex(style.color),
  }
}
