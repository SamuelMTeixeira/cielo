import { Box, Title } from '@/components/atoms'
import Image from '@/components/atoms/Image'
import logo from '@/assets/img/logo.svg'

export default function Aside() {
    return (
        <Box as={'aside'}>

            <Box as={'div'} className='mb-10'>
                <Image src={logo} height={200} width={110} alt='Logo da Cielo' />
                <Title level={3} className='text-blue-400 text-end' size='xl'>Metrics</Title>
            </Box>

            <ul>
                <li>home</li>
                <li>histórico</li>
                <li>outros</li>

            </ul>
        </Box>
    )
}
