import React from 'react'
import Image from 'next/image'
import { HomeIcon, CheckBadgeIcon, UserIcon, LighteningBoltIcon, TrendingIcon, DocumentMagnifyingGlassIcon, ArchiveBoxIcon, LightBulbIcon, ArchiveBoxArrowDownIcon, CollectionIcon, SearchIcon } from '@heroicons/react/20/solid'
import HeaderItem from './HeaderItem'

function header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightBulbIcon} />
                <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
                
                <HeaderItem title="Collections" Icon={ArchiveBoxArrowDownIcon} />
               
          
                <HeaderItem title="Search" Icon={DocumentMagnifyingGlassIcon} />

                <HeaderItem title="Account" Icon={UserIcon} />
            </div>
            <Image
                className='object-contain'
                src="https://links.papareact.com/ua6"
                height={200}
                width={100}

            />
        </header>

    )
}

export default header