import React from 'react'
import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation, lastIdx, emoji}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    return <>
        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
            ${isSelected ? "bg-sky-500" : ""}
        `}
            onClick={() => setSelectedConversation(conversation)}
        >
             <div className='avatar online'>
                 <div className='w-12 rounded-full'>
                     <img src={conversation.profilePic} alt="user avatar" />
                 </div>
             </div>
            <div className='flex flex-col flex-1'>
                 <div className='flex gap-3 justify-between'>
                     <p className='font-bold text-gray-200'>{conversation.fullname}</p>
                     <span className='text-sl'>{emoji}</span>
                 </div>
             </div>
         </div>

         {!lastIdx && <div className='divider my-0 py-0 h-1' />}
     </>

}

export default Conversation;


//starter code
// const Conversation = () => {
//     return <>
//         <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//             <div className='avatar online'>
//                 <div className='w-12 rounded-full'>
//                     <img src="https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?s=612x612&w=is&k=20&c=bsmQokfnjNnmgAwFTRjemoCN7MHs3eIKvAukgaFnvSc=" alt="user avatar" />
//                 </div>
//             </div>

//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-3 justify-between'>
//                     <p className='font-bold text-gray-200'>Raj</p>
//                     <span className='text-sl'>7</span>
//                 </div>
//             </div>
//         </div>

//         <div className='divider my-0 py-0 h-1' />
//     </>

// }

// export default Conversation;