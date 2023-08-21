import Link from 'next/link';
import * as React from 'react';
const Footer = () => {
    return (
        <>
            <section className='footerr'>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-SpaceC w-[40rem] h-12 rounded-2xl shadow-2xl">
                    <div className='flex flex-row gap-1'>
                    <p>This website was designed by</p>
                    <Link href="https://github.com/nightmae" className='text-blue-500'>nightmae</Link>
                    <p>and</p>
                    <Link href="https://github.com/crabfork" className='text-blue-500'>crabfork</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Footer;