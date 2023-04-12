import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logoImage from '@/assets/images/logo.svg';

const Logo: FC = () => {
  return (
    <div>
      <Link href={'/'}>
        <Image
          src={logoImage}
          alt={'Online cinema'}
          draggable={false}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
