import React, { memo, PropsWithChildren } from "react";

interface Props {
  id?: string;
  isEditable: boolean;
  classNames?: string;
  style?: React.CSSProperties;
}

const BlockComponent = (props: PropsWithChildren<Props>) => {
  const { children, id, isEditable, classNames = "", style } = props;

  return (
    <div
      id={id}
      className={`bg-white p-6 rounded-table shadow-main flex flex-col gap-4 relative ${classNames}`}
      style={style}
    >
      {children}
    </div>
  );
};

BlockComponent.defaultProps = {
  id: "",
  classNames: "",
  style: {},
};

export const Block = memo(BlockComponent);
