import React, { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { TypeMaterialIconName } from '@/shared/types/icon.types';

const MaterialIcon: FC<
  { name: TypeMaterialIconName } & React.HTMLAttributes<HTMLDivElement>
> = ({ name, className }) => {
  const IconComponent = MaterialIcons[name];

  return (
    <IconComponent className={className} /> || (
      <MaterialIcons.MdError className={className} />
    )
  );
};

export default MaterialIcon;
