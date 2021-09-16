import TextProps from "./IText";

const Text = (props: TextProps) => {
  const { content, contentClass, icon, type } = props;

  return (
    <span className={contentClass}>

      {
        icon && <img src={icon} />
      }

      {
        type === 'link' ?
          <a href={content}>
            {content}
          </a> :
          <span>
            {content}
          </span>
      }

    </span>
  )
}


export default Text;
