export const getColor = () => {
  let color = '#';
  const character = '0123456789ABCDEF';

  for (let i = 0; i < 6; i++) {
    color += character[Math.floor(Math.random() * 16)];
  }

  return color;
}

const getInitials = (name: string) => {
  let initials;
  const nameArr = name.split(" ");
  const nameLen = nameArr.length;

  if (nameLen > 1) {
    initials =
      nameArr[0].substring(0, 1) +
      nameArr[nameLen - 1].substring(0, 1);
  } else if (nameLen === 1) {
    initials = nameArr[0].substring(0, 1);
  } else return;

  return initials.toUpperCase();
};

export interface initNameProps {
  size: number;
  name: string;
  color: string;
}

export const getNameInitImg = (props: initNameProps) => {
  const { size, name, color } = props;

  if (name == null) return;

  const nameInit = getInitials(name)
  const canvas: any = document.createElement('canvas');
  const context = canvas.getContext('2d') || null;
  canvas.width = canvas.height = size;

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, size, size);

  context.fillStyle = `${color}50`;
  context.fillRect(0, 0, size, size);

  context.fillStyle = color;
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.font = `${size / 2}px Roboto`;
  context.fillText(nameInit, (size / 2), (size / 2));

  return canvas.toDataURL();
};