import Image from 'next/image'
import { 
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon 
} from '@heroicons/react/outline'
import HeaderItem from './HeaderItem'


function Header() {
  return (
    {/*flex flex-col sm:flex-row m-5 justify-between items-center h-auto*/}
    <header className='flex mt-5 sm:flex-row-reverse md:justify-between md:flex-row items-center text-center' >
     <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
        <HeaderItem title='COLLECTION' Icon={CollectionIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
     </div>

     <Image 
     src={'https://links.papareact.com/ua6'}
     width={200}
     height={100}
     />
    </header>
  )
}

export default Header
