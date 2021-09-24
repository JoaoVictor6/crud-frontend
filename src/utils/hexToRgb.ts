export default function hexToRgb(hex: string){
  hex = hex.replace(/^#/, '');
  if(hex.length === 3){
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  const number = Number.parseInt(hex, 16)
  const red = number >> 16;
	const green = (number >> 8) & 255;
	const blue = number & 255;

  return `${red}, ${green}, ${blue}`
}