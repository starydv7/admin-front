import { UserButton } from "@clerk/nextjs";

const SetupPage=()=> {
  return (
   <>
   <div className='p-10w-full'>
  <UserButton afterSignOutUrl="/"/>
   </div>
   </>
  )
}
export default SetupPage;
