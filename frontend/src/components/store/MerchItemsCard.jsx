import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import MerchItemsSingleCard from './MerchItemsSingleCard';

const MerchItemsCard = ({ merchItems }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 x1:grid-cols-4'>
            {merchItems.map((item) => (
                <MerchItemsSingleCard key={item._id} merchItem={item} />
            ))}
        </div>
    )
}

export default MerchItemsCard