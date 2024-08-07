import SiteLogo from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    
        <Link href={'/'}><Image src={SiteLogo} width={100} height={80} className='w-auto' priority alt='SiteLogo'/></Link>

  )
}

export default Logo