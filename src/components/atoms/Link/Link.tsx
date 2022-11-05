import React from "react";
import {useLink} from 'react-aria';

const Link = (props) => {
  let ref = React.useRef();
  let { linkProps } = useLink(props, ref);

  return (
    <a
      {...linkProps}
      ref={ref}
      href={props.href}
      target={props.target}
      className={props.className}
    >
      {props.children}
    </a>
  );
};

export default Link